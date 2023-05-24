import { Navigate } from "react-router-dom";

export const RequireAuth = ({ children }: {children: JSX.Element}) => {
    const isAuth = true

    if (!isAuth) {
        return <Navigate to={"/login"} replace />;
    }

    return children;
};