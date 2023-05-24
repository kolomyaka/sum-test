import { Button, Layout, Menu, MenuProps } from "antd";
import {
    AppstoreOutlined,
    LoginOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UserAddOutlined,
    UserOutlined
} from "@ant-design/icons";
import "./sidebar.scss";
import { HStack } from "@/components/ui";
import { RoutePath } from "@/utils/consts/router";
import { Link } from "react-router-dom";

const { Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    path?: string,
): MenuItem {
    return {
        key,
        icon,
        path,
        label,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem(<Link to={RoutePath.main}>Главная</Link>, "1", <AppstoreOutlined />),
    getItem(<Link to={RoutePath.profile}>Профиль</Link>, "2", <UserOutlined />),
    getItem(<Link to={RoutePath.login}>Вход</Link>, "3", <LoginOutlined />),
    getItem(<Link to={RoutePath.registration}>Регистрация</Link>, "4", <UserAddOutlined />),
];

interface sidebarProps {
    collapsed: boolean;
    setCollapsed: (collapsed: boolean) => void;
}

export const Sidebar = (props: sidebarProps) => {
    const { collapsed, setCollapsed } = props;

    return (
        <Sider
            trigger={null}
            theme={"light"}
            collapsible
            collapsed={collapsed}
            onCollapse={(value) => setCollapsed(value)}
            className={"sidebar"}
        >
            <HStack
                align={"center"}
                gap={16}
                justify={"center"}
                className={"sidebar__header"}
            >
                {!collapsed &&<div className="demo-logo-vertical" />}
                <Button
                    type="text"
                    icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                    onClick={() => setCollapsed(!collapsed)}
                    style={{
                        fontSize: "14px",
                        width: 32,
                        height: 32,
                    }}
                />
            </HStack>
            <Menu
                theme="light"
                defaultSelectedKeys={["1"]}
                mode="inline"
                items={items}
            />
        </Sider>
    );
};