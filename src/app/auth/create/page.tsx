"use client";

import GoogleConnector from "@/components/auth/connectors/GoogleConnector";
import Container from "@/components/layouts/Container";
import Section from "@/components/layouts/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { useForm, Controller, FieldValues } from "react-hook-form";
import { DexaSWIcon, DexaSWLogo } from "@/components/icons/logo";
import { registerSchemaResolve } from "@/schemas/register.schema";
import { initRegistration } from "@/actions/auth.action";
import { type PublicKeyCredentialCreationOptionsJSON } from "@simplewebauthn/browser";
import useToast from "@/hooks/toast.hook";
import { initWebAuthRegistration } from "@/components/auth/auth";
import { routes } from "@/lib/routes";

export default function Create() {
  const { error, loading, success } = useToast();

  const {
    reset,
    control,
    handleSubmit,
    formState: { isValid, isLoading, isSubmitting },
  } = useForm({
    mode: "onSubmit",
    reValidateMode: "onChange",
    resolver: registerSchemaResolve,
  });

  const signUp = async (data: FieldValues) => {
    try {
      loading({ msg: "Authenticating..." });
      const response = await initRegistration({
        name: data.name,
        email: data.email,
        fromGoogle: false,
      });
      try {
        if (response.status) {
          const options =
            response.data as PublicKeyCredentialCreationOptionsJSON;
          const webAuthAccount = await initWebAuthRegistration(
            options,
            data.email
          );
          if (webAuthAccount) {
            reset({ name: undefined, email: undefined, terms: false });
            success({ msg: "Registration successful" });
          }
        }
      } catch (err: any) {
        if (
          typeof err.message === "string" &&
          err.message.includes("not allowed")
        ) {
          return error({ msg: "Operation rejected" });
        }
        error({ msg: "Error registering user" });
      }
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <Container>
      <Section>
        <div className="overflow-y-scroll h-svh relative">
          <div className="size-full flex">
            <div className="w-80 lg:w-96 hidden md:block bg-primary p-5">
              <DexaSWLogo
                textClass="text-background"
                logoClass="bg-background p-1 rounded-full"
              />
            </div>
            <div className="flex-1 h-full flex items-center px-5 justify-center">
              <div className="w-full">
                <div className="max-w-sm mx-auto text-center">
                  <div className="flex justify-center mb-2">
                    <DexaSWIcon className="rounded-full" />
                  </div>
                  <h2 className="font-bold text-2xl">Create a smart account</h2>
                  <p className="text-sm text-foreground/60">
                    100% secured. No more seed phrase and private keys
                  </p>
                  <div className="flex flex-col gap-4 mt-5 my-5">
                    <GoogleConnector type={"register"} />
                  </div>
                  <div className="flex items-center mb-2">
                    <hr className="w-1/2" />
                    <p className="px-2 text-foreground/50">OR</p>
                    <hr className="w-1/2" />
                  </div>
                  <form onSubmit={handleSubmit(signUp)}>
                    <div className="flex flex-col gap-4">
                      <Controller
                        control={control}
                        render={({ field: { value, onChange } }) => (
                          <div className="text-left">
                            <Label className="font-semibold">
                              Name<span className="text-destructive">*</span>
                            </Label>
                            <Input
                              type="text"
                              onChange={onChange}
                              value={value ?? ""}
                              placeholder="Enter your name"
                              className="h-11 shadow-none"
                            />
                          </div>
                        )}
                        name="name"
                      />
                      <Controller
                        control={control}
                        render={({ field: { value, onChange } }) => (
                          <div className="text-left">
                            <Label className="font-semibold">
                              Email<span className="text-destructive">*</span>
                            </Label>
                            <Input
                              type="email"
                              onChange={onChange}
                              value={value ?? ""}
                              placeholder="Enter your email"
                              className="h-11 shadow-none"
                            />
                          </div>
                        )}
                        name="email"
                      />

                      <Controller
                        control={control}
                        render={({ field: { value, onChange } }) => (
                          <div className="flex items-center justify-start gap-2 -mt-1 mb-5">
                            <Checkbox
                              id="terms"
                              checked={value}
                              onCheckedChange={onChange}
                            />
                            <Label htmlFor="terms">
                              I agree to all SonicSW&apos;s{" "}
                              <Link className="text-primary" href="">
                                Terms and Conditions
                              </Link>
                            </Label>
                          </div>
                        )}
                        name="terms"
                      />

                      <Button
                        disabled={!isValid || isSubmitting || isLoading}
                        type="submit"
                        variant={"default"}
                        className="h-11 -mt-2"
                      >
                        Continue
                      </Button>
                      <Link
                        className="mt-6 text-primary"
                        href={routes.auth.login}
                      >
                        Already have an account?
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </Container>
  );
}
