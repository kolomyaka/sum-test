import { Navigate } from "react-router-dom";
import { RoutePath } from "@/utils/consts/router";

export const RequireAuth = ({ children }: {children: JSX.Element}) => {
    const isAuth = true;

    if (!isAuth) {
        return <Navigate to={RoutePath.registration} replace />;
    }

    return children;
};