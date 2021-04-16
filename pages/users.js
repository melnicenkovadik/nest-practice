import Head from 'next/head'
import Link from 'next/link'
import {useState} from "react";
import A from "../components/A";
import {MainContainer} from "../components/MainContainer";

export default function Users({users}) {
    return (
        <MainContainer keywords={'users'}>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main>
                <h2>Пользователи</h2>
                <ul>
                    {users.map((user => {
                            console.log(user);
                            return (
                                <li className={'list-unstyled'}>
                                    <A
                                        navLink
                                        href={`/users/${user.id}`}
                                        text={user.name}
                                        key={user.id}
                                    />
                                </li>

                            )
                        }
                    ))}
                </ul>

                <hr/>

            </main>

            <footer>
                my footer
            </footer>

        </MainContainer>
    )
}

export async function getStaticProps(context) {
    const users = await fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
    return {
        props: {users}, // will be passed to the page component as props
    }
}
