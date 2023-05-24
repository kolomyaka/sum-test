export enum AppRoutes {
    MAIN = "main",
    PROFILE = "profile",
    LOGIN = "login",
    REGISTRATION = "registration",
    // last
    NOT_FOUND = "not_found"
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: "/",
    [AppRoutes.PROFILE]: "/profile",
    [AppRoutes.LOGIN]: "/login",
    [AppRoutes.REGISTRATION]: "/registration",
    // last
    [AppRoutes.NOT_FOUND]: "*"
};