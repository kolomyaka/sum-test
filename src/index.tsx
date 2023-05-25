import ReactDOM from "react-dom/client";
import { App } from "./App";
import "antd/dist/reset.css";
import "@/assets/styles/global.scss";
import { BrowserRouter } from "react-router-dom";
import { AntdProvider } from "@/services/providers";
import { StoreProvider } from "@/services/providers";

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