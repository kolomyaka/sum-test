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
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

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
    getItem(<Link to={RoutePath.main}>Главная</Link>, RoutePath.main, <AppstoreOutlined />, RoutePath.main),
    getItem(<Link to={RoutePath.profile}>Профиль</Link>, RoutePath.profile, <UserOutlined />, RoutePath.profile),
    getItem(<Link to={RoutePath.login}>Вход</Link>, RoutePath.login, <LoginOutlined />, RoutePath.login),
    getItem(<Link to={RoutePath.registration}>Регистрация</Link>, RoutePath.registration, <UserAddOutlined />,
        RoutePath.registration),
];

interface sidebarProps {
    collapsed: boolean;
    setCollapsed: (collapsed: boolean) => void;
}

export const Sidebar = (props: sidebarProps) => {
    const { collapsed, setCollapsed } = props;
    const location = useLocation();

    const [currentLocation, setCurrentLocation] = useState(location.pathname);

    useEffect(() => {
        setCurrentLocation(location.pathname);
    }, [location.pathname]);

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
                // TODO: Подсвечивание menuItem зависит не от урла, а от нажатия на меню
                defaultSelectedKeys={[currentLocation]}
                theme="light"
                mode="inline"
                items={items}
            />
        </Sider>
    );
};