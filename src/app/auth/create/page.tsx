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
import { type PublicKeyCredentialCreationOptionsJSON } from "@simplewebauthn/browser";
import useToast from "@/hooks/toast.hook";
import { initWebAuthRegistration } from "@/components/auth/auth";
import { apiRoutes, routes } from "@/lib/routes";
import { useAccount } from "@/context/account.context";
import { useAppDispatch } from "@/hooks/redux.hook";
import { setAuth } from "@/slices/account/auth.slice";
import { postApi } from "@/actions/api.action";
import { useRouter } from "next/navigation";

export default function Create() {
  const router = useRouter();
  const { error, loading, success } = useToast();
  const { setCredentials } = useAccount();
  const dispatch = useAppDispatch();

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
      const response = await postApi<PublicKeyCredentialCreationOptionsJSON>(
        apiRoutes.auth.initRegistration,
        {
          name: data.name,
          email: data.email,
          fromGoogle: false,
        },
      );
      try {
        if (response.status && response.data) {
          const regResponse = await initWebAuthRegistration(
            response.data,
            data.email,
          );
          if (regResponse && regResponse.status) {
            dispatch(setAuth(true));
            setCredentials(regResponse.credentials);
            reset({ name: undefined, email: undefined, terms: false });
            success({ msg: "Registration successful" });
            router.push(routes.app.home);
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
      error({ msg: "Error registering user" });
    }
  };

  return (
    <Container>
      <Section>
        <div className="relative h-svh overflow-y-scroll">
          <div className="flex size-full">
            <div className="hidden w-80 bg-primary p-5 md:block lg:w-96">
              <DexaSWLogo
                textClass="text-background"
                logoClass="bg-background p-1 rounded-full"
              />
            </div>
            <div className="flex h-full flex-1 items-center justify-center px-5">
              <div className="w-full">
                <div className="mx-auto max-w-sm text-center">
                  <div className="mb-2 flex justify-center">
                    <DexaSWIcon className="rounded-full" />
                  </div>
                  <h2 className="text-2xl font-bold">Create a smart account</h2>
                  <p className="text-sm text-foreground/60">
                    100% secured. No more seed phrase and private keys
                  </p>
                  <div className="my-5 mt-5 flex flex-col gap-4">
                    <GoogleConnector type={"register"} />
                  </div>
                  <div className="mb-2 flex items-center">
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
                          <div className="-mt-1 mb-5 flex items-center justify-start gap-2">
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
                        className="-mt-2 h-11"
                      >
                        Continue
                      </Button>
                      <Link className="text-primary" href={routes.auth.login}>
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
