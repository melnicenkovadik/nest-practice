import React from 'react';
import Head from "next/head";
import {NavbarComponent} from "./navbar-component";

export const MainContainer = ({children, keywords}) => {
    return (
        <>
            <Head>
                <meta keywords={"next.js" + keywords}/>
                <title>Главная страница</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <NavbarComponent/>
            <div className="container">
                {children}

            </div>
        </>
    )
}

