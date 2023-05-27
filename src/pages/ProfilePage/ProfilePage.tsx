import { Module } from "@/components/ui";
import { Button, Space, Typography } from "antd";
import { useSelector } from "react-redux";
import { getUserName } from "@/store/user/userSelector";
import { useCallback } from "react";
import { useAppDispatch } from "@/utils/hooks/useAppDispatch/useAppDispatch";
import { userActions } from "@/store/user";

export const ProfilePage = () => {
    const dispatch = useAppDispatch();
    const userName = useSelector(getUserName);

    const onLogoutHandler = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    return (
        <Module>
            <Space direction={"vertical"}>
                <Typography.Title>Привет, {userName}!</Typography.Title>
                <Button onClick={onLogoutHandler} type={"primary"}>Выйти</Button>
            </Space>
        </Module>
    );
};