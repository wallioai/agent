export const routes = {
  home: "/",
  auth: {
    login: "/auth/login",
    create: "/auth/create",
  },
  app: {
    home: "/home",
    bridge: "/bridge",
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
  server: {
    auth: {
      initSignup: "auth/register/webauthn",
      verifySignup: "auth/register/webauthn/verify",
      initLogin: (email: string) => `auth/login/webauthn/${email}`,
      verifyLogin: "auth/login/webauthn/verify",
    },
    network: {
      list: "network/list",
    },
    token: {
      byChainId: (chainId: number) => `token/${chainId}`,
    },
  },
  auth: {
    initRegistration: "api/auth/create",
    verifyRegistration: "api/auth/create/verify",
    initAuthentication: (email: string) => `api/auth/login?email=${email}`,
    verifyAuthentication: "api/auth/login",
  },
  agents: {
    dexai: "api/agents/dexai",
  },
};
