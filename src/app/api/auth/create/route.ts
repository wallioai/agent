import { CreateUserSchema, User } from "@/models/user.model";
import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/db";
import { generateId } from "@/lib/helpers";
import { isoBase64URL } from "@simplewebauthn/server/helpers";
import { RP_ID } from "@/config/env.config";
import { generateRegistrationOptions } from "@simplewebauthn/server";
import { Db } from "mongodb";
import { z } from "zod";

async function generateRegistionCredentials(
  user: Pick<User, "uniqueId" | "email" | "name" | "_id">,
  db: Db,
) {
  const userId = isoBase64URL.toBuffer(user.uniqueId, "base64url");
  const options = await generateRegistrationOptions({
    rpID: RP_ID ?? "",
    rpName: "Dexa Smart Wallet",
    userName: user.email,
    userDisplayName: user.name,
    userID: userId,
  });
  await db.collection("webauths").insertOne({
    user: user._id.toString(),
    id: options.user.id,
    challenge: options.challenge,
    email: user.email,
  });
  return options;
}

export async function POST(req: NextRequest) {
  try {
    console.log(req);
    const body = await req.json();
    const { email, name, fromGoogle } = CreateUserSchema.parse(body);

    const { db } = await clientPromise();
    const user = await db
      .collection<User>("users")
      .findOne({ email: email.toLowerCase() });

    if (fromGoogle && user) {
      return await generateRegistionCredentials(user, db);
    }

    if (user) {
      return NextResponse.json(
        { error: "User already registered" },
        { status: 405 },
      );
    }

    const newUser: Partial<User> = {
      email,
      name,
      uniqueId: generateId({ length: 64, dictionary: "hex" }),
    };
    const result = await db.collection("users").insertOne(newUser);
    newUser._id = result.insertedId;

    const options = await generateRegistionCredentials(
      newUser as unknown as User,
      db,
    );
    return NextResponse.json(options);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors }, { status: 400 });
    }
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
