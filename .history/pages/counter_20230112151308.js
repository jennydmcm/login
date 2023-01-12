import { useEffect, useState } from "react"
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/router'


export default function Counter() {
    const [number, setNumber] = useState(0);
    const searchParams = useSearchParams();
    const isUser = searchParams.get('username')
    const router = useRouter();

    useEffect(() => {
        !isUser ? router.push('/') : <></>
    }, [isUser])

    return (
        <>
        <div>COUNTER PAGE</div>
        <div>Welcome</div>


        <button>Increment</button>
        <button>Decrement</button>
        </>
    )



}