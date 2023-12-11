import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link';

export default function CamperVanPage() {
    const { data: session, status } = useSession()
    const userEmail = session?.user?.email

    console.log('overview page session:', session)
    console.log('overview page status:', status)

    if (status === "loading") {
        return <p>Hang on there...</p>
    }

    if (status === "authenticated") {
        return (
            <>
                <p>Signed in as {userEmail}</p>
                <button onClick={() => signOut()}>Sign out</button>
                <p>
                    <Link href="/api/movies/list">
                        Go to movies list page
                    </Link>
                </p>
                <img src="https://cdn.pixabay.com/photo/2017/08/11/19/36/vw-2632486_1280.png" />
            </>
        )
    }

    return (
        <>
            <p>Not signed in.</p>
            <button onClick={() => signIn("github")}>Sign in</button>
        </>
    )
}