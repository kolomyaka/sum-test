import { AppRoutes, RoutePath } from "@/utils/consts/router";
import { AppRoutesProps } from "@/types/router";

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <div>Main page</div>,
    },
    [AppRoutes.PROFILE]: {
        path: RoutePath.profile,
        element: <div>Profile page</div>,
        authOnly: true
    },
    [AppRoutes.REGISTRATION]: {
        path: RoutePath.registration,
        element: <div>Registration page</div>
    },
    [AppRoutes.LOGIN]: {
        path: RoutePath.login,
        element: <div>Login page</div>,
    },
    // last
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <div>Not found page</div>,
    }
};