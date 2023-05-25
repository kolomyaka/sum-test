import { Button, Form, Input, Typography } from "antd";
import cls from "./LoginForm.module.scss";

const { Title } = Typography;

export const LoginForm = () => {
    const onFinishHandler = () => {
        console.log("login");
    };

    return (
        <div className={cls.loginForm}>
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