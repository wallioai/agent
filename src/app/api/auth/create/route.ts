import { z } from "zod";
import { CreateUserSchema } from "@/db/mongodb/user/user.model";
import { NextRequest, NextResponse } from "next/server";
import { generateId, toObjectId } from "@/lib/helpers";
import { isoBase64URL } from "@simplewebauthn/server/helpers";
import { RP_ID } from "@/config/env.config";
import { generateRegistrationOptions } from "@simplewebauthn/server";
import userService from "@/db/mongodb/user/user.service";
import { IUser } from "@/db/mongodb/user/user.model";
import webAuthService from "@/db/mongodb/webauth/webauth.service";

async function generateRegistionCredentials(
  user: Pick<IUser, "uniqueId" | "email" | "name" | "_id">,
) {
  const userId = isoBase64URL.toBuffer(user.uniqueId, "base64url");
  const options = await generateRegistrationOptions({
    rpID: RP_ID ?? "",
    rpName: "Dexa Smart Wallet",
    userName: user.email,
    userDisplayName: user.name,
    userID: userId,
  });
  await webAuthService.create({
    user: toObjectId(user._id.toString()),
    id: options.user.id,
    challenge: options.challenge,
    email: user.email,
  });
  return options;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, name, fromGoogle } = CreateUserSchema.parse(body);

    const user = await userService.findOne({ email: email.toLowerCase() });
    if (fromGoogle && user) {
      const options = await generateRegistionCredentials(user);
      return NextResponse.json(options);
    }

    if (user) {
      return NextResponse.json(
        { error: "User already registered" },
        { status: 405 },
      );
    }

    const newUser = await userService.create({
      email,
      name,
      uniqueId: generateId({ length: 64, dictionary: "hex" }),
    });

    const options = await generateRegistionCredentials(newUser);
    return NextResponse.json(options);
  } catch (error) {
    console.log(error);
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors }, { status: 400 });
    }
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
