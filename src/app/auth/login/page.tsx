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
import useToast from "@/hooks/toast.hook";
import { initWebAuthLoginProcess } from "@/components/auth/auth";
import Link from "next/link";
import { routes } from "@/lib/routes";
import { useAppDispatch } from "@/hooks/redux.hook";
import { useAccount } from "@/context/account.context";
import { setAuth } from "@/slices/account/auth.slice";
import { initAuthentication } from "@/actions/auth.action";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { error, loading, success } = useToast();
  const { setCredentials } = useAccount();

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
      try {
        const response = await initAuthentication(data.email);
        if (response) {
          const authResponse = await initWebAuthLoginProcess(
            response,
            data.email,
          );
          if (authResponse && authResponse.status) {
            dispatch(setAuth(true));
            setCredentials(authResponse.credentials);
            reset({ email: undefined });
            success({ msg: "Login successful" });
            router.push(routes.app.home);
          }
        }
      } catch (err: any) {
        console.log(err.message);
        if (
          typeof err.message === "string" &&
          err.message.includes("not allowed")
        ) {
          return error({ msg: "Operation rejected" });
        }
        error({ msg: err.message ?? "Error logging in" });
      }
    } catch (err: any) {
      console.error("Error:", err);
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
                  <h2 className="text-2xl font-bold">Login to Wallet</h2>
                  <p className="text-sm text-foreground/60">
                    100% secured. No more seed phrase and private keys
                  </p>
                  <div className="my-5 mt-5 flex flex-col gap-4">
                    <GoogleConnector type={"login"} name="Login with Google" />
                  </div>
                  <div className="mb-2 flex items-center">
                    <hr className="w-1/2" />
                    <p className="px-2 text-foreground/50">OR</p>
                    <hr className="w-1/2" />
                  </div>
                  <form onSubmit={handleSubmit(login)}>
                    <div className="flex flex-col gap-4">
                      <Controller
                        control={control}
                        render={({ field: { value, onChange } }) => (
                          <div className="mb-5 text-left">
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
                        className="-mt-4 h-11"
                      >
                        Continue
                      </Button>
                      <Link className="text-primary" href={routes.auth.create}>
                        Create a Smart Wallet
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
