import { useEffect, useState } from "react"
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/router'
import styles from '../styles/Counter.module.css'


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
        <div className={styles.content}>
        <div className={styles.title}>COUNTER PAGE</div>
        <div className={styles.welcome}>Welcome {isUser}</div>


        <div className={styles.number}>{number}</div>
        <button onClick={() => setNumber(number + 1)}>Increment</button>
        <button onClick={() => setNumber(number - 1)}>Decrement</button>
      </div>  
      </>
    )



}