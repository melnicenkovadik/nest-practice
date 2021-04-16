import Head from 'next/head'
import Link from 'next/link'
import A from "../components/A";
import {NavbarComponent} from "../components/navbar-component";
import {MainContainer} from "../components/MainContainer";


export default function Home() {
    return (
        <MainContainer keywords={'main page'}>
            <main>
                <h1 className="container">Главная страница</h1>
            </main>

            <footer>
                <div className="container">
                    my footer
                </div>
            </footer>
        </MainContainer>
    )
}
