'use client'

import { useAppSelector } from "../redux/hooks/hooks";
import { selectCount } from "../redux/store/features/counterSlice";


export default function CounterValue() {
    const count = useAppSelector(selectCount)
    console.log('count', count);
    return (
        <div>
            <h1>{count}</h1>
        </div>
    )
}
