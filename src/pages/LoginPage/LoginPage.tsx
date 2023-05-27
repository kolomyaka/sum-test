import { LoginForm } from "@/components";
import { Module } from "@/components/ui";
import { useSelector } from "react-redux";
import { getUserAuthData } from "@/store/user/userSelector";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "@/utils/consts/router";
import { useEffect } from "react";

export const LoginPage = () => {
    const userAuthData = useSelector(getUserAuthData);
    const navigate = useNavigate();

    useEffect(() => {
        if (userAuthData) {
            navigate(RoutePath.profile);
        }
    }, [navigate, userAuthData]);


    return (
        <Module>
            <LoginForm />
        </Module>
    );
};