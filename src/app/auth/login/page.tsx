"use client";

import GoogleConnector from "@/components/auth/connectors/GoogleConnector";
import Container from "@/components/layouts/Container";
import Section from "@/components/layouts/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm, Controller, FieldValues } from "react-hook-form";
import { DexaSWIcon, DexaSWLogo } from "@/components/icons/logo";
import { loginSchemaResolve } from "@/schemas/login.schema";
import { initAuthentication } from "@/actions/auth.action";
import { type PublicKeyCredentialRequestOptionsJSON } from "@simplewebauthn/browser";
import useToast from "@/hooks/toast.hook";
import { initWebAuthLoginProcess } from "@/components/auth/auth";

export default function Login() {
  const { error, loading, success } = useToast();

  const {
    reset,
    control,
    handleSubmit,
    formState: { isValid, isLoading, isSubmitting },
  } = useForm({
    mode: "onSubmit",
    reValidateMode: "onChange",
    resolver: loginSchemaResolve,
  });

  const login = async (data: FieldValues) => {
    try {
      loading({ msg: "Authenticating..." });
      const response = await initAuthentication(data.email);
      try {
        if (response.status) {
          const options =
            response.data as PublicKeyCredentialRequestOptionsJSON;
          const webAuthAccount = await initWebAuthLoginProcess(
            options,
            data.email
          );
          if (webAuthAccount) {
            reset({ email: undefined });
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
                  <h2 className="font-bold text-2xl">Quick Login</h2>
                  <p className="text-sm text-foreground/60">
                    100% secured. No more seed phrase and private keys
                  </p>
                  <div className="flex flex-col gap-4 mt-5 my-5">
                    <GoogleConnector type={"login"} name="Login with Google" />
                  </div>
                  <div className="flex items-center mb-2">
                    <hr className="w-1/2" />
                    <p className="px-2 text-foreground/50">OR</p>
                    <hr className="w-1/2" />
                  </div>
                  <form onSubmit={handleSubmit(login)}>
                    <div className="flex flex-col gap-4">
                      <Controller
                        control={control}
                        render={({ field: { value, onChange } }) => (
                          <div className="text-left mb-5">
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

                      <Button
                        disabled={!isValid || isSubmitting || isLoading}
                        type="submit"
                        variant={"default"}
                        className="h-11 -mt-2"
                      >
                        Continue
                      </Button>
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
