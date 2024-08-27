'use client'

import { ReactNode } from "react";
import { Provider } from "react-redux";
import store from "../store/store";
import { Toaster } from "react-hot-toast";

export default function Providers({ children }: { children: ReactNode }) {
    return <Provider store={store}>
        <Toaster
            position="top-center"
            reverseOrder={false}
        />
        {children}
    </Provider>;
}