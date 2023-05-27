import { Button, Form, Input, message, Typography } from "antd";
import { useAppDispatch } from "@/utils/hooks/useAppDispatch/useAppDispatch";
import { useCallback, useEffect } from "react";
import cls from "./SignUpForm.module.scss";
import { LoginFormFields } from "@/store/LoginForm";
import {
    getSignUpFormError,
    getSignUpFormName,
    getSignUpFormPassword,
    getSignUpFormRepeatPassword,
    getSignUpFormUsername,
    signUpFormActions
} from "@/store/SignUpForm";
import { useSelector } from "react-redux";
import { RegistrationUser } from "@/services/api/RegistrationUser";


interface formValuesProps {
    username: string;
    name: string;
    password: string;
    repeatPassword: string;
}

export const SignUpForm = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const dispatch = useAppDispatch();

    const username = useSelector(getSignUpFormUsername);
    const name = useSelector(getSignUpFormName);
    const password = useSelector(getSignUpFormPassword);
    const repeatPassword = useSelector(getSignUpFormRepeatPassword);
    const error = useSelector(getSignUpFormError);

    const errorMessage = useCallback((errorText: string) => {
        messageApi.open({
            type: "error",
            content: errorText,
        });
    }, [messageApi]);

    const onFinishHandler = (formValues: formValuesProps) => {

        const username = formValues.username;
        const password = formValues.password;
        const name = formValues.name;
        const repeatPassword = formValues.repeatPassword;
        dispatch(RegistrationUser({ username,name,password,repeatPassword }));
    };

    const onChangeHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const field = e.target.name as LoginFormFields;
        const value = e.target.value;
        dispatch(signUpFormActions.setSignUpFormFields({ field, value }));
    }, [dispatch]);

    useEffect(() => {
        if (error) {
            errorMessage(error);
        }
    }, [error, errorMessage]);


    return (
        <div className={cls.signUpForm}>
            {contextHolder}
            <Typography.Title style={{ textAlign: "center" }}>Регистрация</Typography.Title>
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
                    <Input
                        type={"text"}
                        placeholder={"Введите логин"}
                        name={"username"}
                        onChange={onChangeHandler}
                        value={username}
                    />
                </Form.Item>
                <Form.Item
                    label={"Имя"}
                    name="name"
                    rules={[{ required: true, message: "Введите Ваше имя!" }]}
                >
                    <Input
                        type={"text"}
                        placeholder={"Введите имя"}
                        name={"name"}
                        onChange={onChangeHandler}
                        value={name}
                    />
                </Form.Item>
                <Form.Item
                    label={"Пароль"}
                    name="password"
                    rules={[{ required: true, message: "Введите Ваш пароль!" }]}
                >
                    <Input.Password
                        value={password}
                        placeholder={"Введите пароль"}
                        name={"password"}
                        onChange={onChangeHandler}
                    />
                </Form.Item>
                <Form.Item
                    label={"Пароль"}
                    name="repeatPassword"
                    rules={[{ required: true, message: "Введите ваш пароль еще раз!" }]}
                >
                    <Input.Password
                        value={repeatPassword}
                        placeholder={"Введите пароль"}
                        name={"repeatPassword"}
                        onChange={onChangeHandler}
                    />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" block>
                        Войти
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};