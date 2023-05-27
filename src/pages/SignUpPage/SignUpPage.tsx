import { Module } from "@/components/ui";
import { SignUpForm } from "@/components";
import { useSelector } from "react-redux";
import { getUserAuthData } from "@/store/user/userSelector";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { RoutePath } from "@/utils/consts/router";


export const SignUpPage = () => {
    const userAuthData = useSelector(getUserAuthData);
    const navigate = useNavigate();

    useEffect(() => {
        if (userAuthData) {
            navigate(RoutePath.profile);
        }
    }, [navigate, userAuthData]);

    return (
        <Module>
            <SignUpForm />
        </Module>
    );
};