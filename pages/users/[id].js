import {useRouter} from "next/router";
import {MainContainer} from "../../components/MainContainer";

export default function ({user}) {
    const {query} = useRouter()
    return (
        <MainContainer keywords={user.name}>
            <h1>id - {query.id}</h1>
            <h3>Пользователь: {user.name}</h3>
            <h3>Username: {user.username}</h3>
            <h3> Email: {user.email}</h3>
            <h3> Phone: {user.phone}</h3>
        </MainContainer>
    )
}

export async function getServerSideProps({params}) {
    const user = await fetch('https://jsonplaceholder.typicode.com/users/' + params.id)
        .then(response => response.json())
    return {
        props: {user}, // will be passed to the page component as props
    }
}

