import ReactDOM from "react-dom/client";
import { App } from "./App";
import "antd/dist/reset.css";
import { BrowserRouter } from "react-router-dom";
import { AntdProvider } from "@/services/providers/AntdProvider/AntdProvider";
import { StoreProvider } from "@/services/providers/StoreProvider/StoreProvider";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <StoreProvider>
        <BrowserRouter>
            <AntdProvider>
                <App />
            </AntdProvider>
        </BrowserRouter>
    </StoreProvider>
);