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
    initRegistration: "api/auth/register/webauthn",
    verifyRegistration: "api/auth/register/webauthn/verify",
    initAuthentication: (email: string) => `api/auth/login?email=${email}`,
    verifyAuthentication: "api/auth/login",
  },
};
