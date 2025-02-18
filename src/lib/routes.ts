export const routes = {
  home: "/",
  auth: {
    login: "/auth/login",
    create: "/auth/create",
  },
};

export const apiRoutes = {
  auth: {
    initRegistration: "auth/register/webauthn",
    verifyRegistration: "auth/register/webauthn/verify",
    initAuthentication: (email: string) => `auth/login/webauthn/${email}`,
    verifyAuthentication: "auth/login/webauthn/verify",
  },
};
