export const routes = {
  home: "/",
  auth: {
    login: "/auth/login",
    create: "/auth/create",
  },
  app: {
    home: "/home",
    others: "/others",
  },
};

export const protectedRoutes = [routes.app.home];
export const publicRoutes = [
  routes.home,
  routes.auth.create,
  routes.auth.login,
];

export const apiRoutes = {
  auth: {
    initRegistration: "auth/register/webauthn",
    verifyRegistration: "auth/register/webauthn/verify",
    initAuthentication: (email: string) => `auth/login/webauthn/${email}`,
    verifyAuthentication: "auth/login/webauthn/verify",
  },
};
