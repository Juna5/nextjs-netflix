import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AuthProvider } from "../hooks/useAuth";
import { RecoilRoot } from "recoil";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <RecoilRoot>
            <AuthProvider>
                <Component {...pageProps} />
                <ToastContainer />
            </AuthProvider>
        </RecoilRoot>
    );
}
