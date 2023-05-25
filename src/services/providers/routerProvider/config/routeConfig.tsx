import { AppRoutes, RoutePath } from "@/utils/consts/router";
import { AppRoutesProps } from "@/types/router";
import { LoginPage, MainPage, ProfilePage, SignUpPage } from "@/pages";

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRoutes.PROFILE]: {
        path: RoutePath.profile,
        element: <ProfilePage />,
        authOnly: true
    },
    [AppRoutes.REGISTRATION]: {
        path: RoutePath.registration,
        element: <SignUpPage />
    },
    [AppRoutes.LOGIN]: {
        path: RoutePath.login,
        element: <LoginPage />,
    },
    // last
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <div>Not found page</div>,
    }
};