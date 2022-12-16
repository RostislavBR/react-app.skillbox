import React from "react";
import './main.global.css';
import {hot} from "react-hot-loader/root";
import {Layout} from "./shared/Layout";
import {Header} from "./shared/Header";
import {Main} from "./shared/Main";

function AppComponent() {
    return (
        <Layout>
            <Header/>
            <Main/>
        </Layout>
    )
}

export const App = hot(AppComponent)