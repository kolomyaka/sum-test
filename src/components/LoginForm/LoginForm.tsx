import { Button, Form, Input, message, Typography } from "antd";
import cls from "./LoginForm.module.scss";
import { useAppDispatch } from "@/utils/hooks/useAppDispatch/useAppDispatch";
import { loginByUsername } from "@/services/api/LoginByUsername";
import { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { getUserError } from "@/store/user/userSelector";

const { Title } = Typography;

interface formValuesProps {
    username: string;
    password: string;
}

export const LoginForm = () => {
    const dispatch = useAppDispatch();
    const [messageApi, contextHolder] = message.useMessage();

    const error = useSelector(getUserError);

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


    return (
        <div className={cls.loginForm}>
            {contextHolder}
            <Title>Вход</Title>
            <Form
                name="login"
                autoComplete="off"
                layout="vertical"
                onFinish={onFinishHandler}
            >
                <Form.Item
                    label={"Логин"}
                    name="username"
                    rules={[{ required: true, message: "Введите Ваш логин!" }]}
                >
                    <Input type={"text"} placeholder={"Введите логин"} />
                </Form.Item>
                <Form.Item
                    label={"Пароль"}
                    name="password"
                    rules={[{ required: true, message: "Введите Ваш пароль!" }]}
                >
                    <Input.Password placeholder={"Введите пароль"} />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className={cls.loginFormButton}>
                        Войти
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};