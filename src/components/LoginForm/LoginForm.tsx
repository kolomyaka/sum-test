import { Button, Form, Input, message, Typography } from "antd";
import cls from "./LoginForm.module.scss";
import { useAppDispatch } from "@/utils/hooks/useAppDispatch/useAppDispatch";
import { loginByUsername } from "@/services/api/LoginByUsername";
import { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import {
    getLoginFormError,
    getLoginFormIsLoading,
    getLoginFormPassword,
    getLoginFormUsername,
    loginFormActions,
    LoginFormFields
} from "@/store/LoginForm";

const { Title } = Typography;

interface formValuesProps {
    username: string;
    password: string;
}

export const LoginForm = () => {
    const dispatch = useAppDispatch();
    const [messageApi, contextHolder] = message.useMessage();
    const username = useSelector(getLoginFormUsername);
    const password = useSelector(getLoginFormPassword);

    const error = useSelector(getLoginFormError);
    const isLoading = useSelector(getLoginFormIsLoading);

    const errorMessage = useCallback((errorText: string) => {
        messageApi.open({
            type: "error",
            content: errorText,
        });
    }, [messageApi]);


    const onFinishHandler = (formValues: formValuesProps) => {
        const username = formValues.username;
        const password = formValues.password;

        dispatch(loginByUsername({ username, password }));
    };

    useEffect(() => {
        if (error) {
            errorMessage(error);
        }
    }, [error, errorMessage]);

    const onChangeHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const field = e.target.name as LoginFormFields;
        const value = e.target.value;
        dispatch(loginFormActions.setLoginFormField({ field, value }));
    }, [dispatch]);

    return (
        <div className={cls.loginForm}>
            {contextHolder}
            <Title style={{ textAlign: "center" }}>Вход</Title>
            <Form
                name="registration"
                autoComplete="off"
                layout="vertical"
                onFinish={onFinishHandler}
                initialValues={{
                    username,
                    password
                }}
            >
                <Form.Item
                    label={"Логин"}
                    name="username"
                    rules={[{ required: true, message: "Введите Ваш логин!" }]}
                >
                    <Input
                        name={"username"}
                        value={username}
                        type={"text"}
                        placeholder={"Введите логин"}
                        onChange={onChangeHandler}
                    />
                </Form.Item>
                <Form.Item
                    label={"Пароль"}
                    name="password"
                    rules={[{ required: true, message: "Введите Ваш пароль!" }]}
                >
                    <Input.Password
                        name={"password"}
                        value={password}
                        placeholder={"Введите пароль"}
                        onChange={onChangeHandler}
                    />
                </Form.Item>
                <Form.Item>
                    <Button
                        loading={isLoading}
                        block type="primary"
                        htmlType="submit"
                        className={cls.loginFormButton}
                    >
                        Войти
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};