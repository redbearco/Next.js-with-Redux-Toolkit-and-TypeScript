'use client'
import { Minus, Plus } from "lucide-react";
import { decrement, increment } from '../redux/store/features/counterSlice';
import { useAppDispatch, useAppSelector } from "../redux/hooks/hooks";

export default function Counter() {
    const dispatch = useAppDispatch();
    const count = useAppSelector((state) => state.counter.value)
    const handlerIncrement = () => {
        dispatch(increment())
    }
    const handlerDencrement = () => {
        dispatch(decrement())
    }

    console.log('count', count)

    return (
        <div className='max-w-3x1 mx-auto flex flex-col justify-center items-center text-white'>
            <h2 className="scroll-m-20 pb-6 text-4xl font-semibold tracking-tight first:mt-0">
                Redux Counter
            </h2>
            <div className="py-4">
                <div className="flex items-center space-x-6">
                    <button onClick={handlerDencrement}>
                        <Minus className='w-8 h-8' />
                    </button>
                    <p className='scroll-m-20 text-6xl font-semibold tracking-tight first:mt-0'>
                        {count}
                    </p>
                    <button onClick={handlerIncrement}>
                        <Plus className='w-8 h-8' />
                    </button>
                </div>
            </div>
        </div>
    )
}
