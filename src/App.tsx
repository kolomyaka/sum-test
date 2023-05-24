import { AppRouter } from "@/services/providers";
import { MainLayout } from "@/components/Layout/MainLayout";

export const App = () => {

    return (
        <MainLayout content={<AppRouter />} />
    );
};