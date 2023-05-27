import { Navigate } from "react-router-dom";
import { RoutePath } from "@/utils/consts/router";
import { useSelector } from "react-redux";
import { getUserAuthData } from "@/store/user/userSelector";

export const RequireAuth = ({ children }: {children: JSX.Element}) => {
    const isAuth = useSelector(getUserAuthData);

    if (!isAuth) {
        return <Navigate to={RoutePath.login} replace />;
    }

    return children;
};