'use client'

import Image from "next/image"
import { useAppDispatch, useAppSelector } from "../../../redux/hooks/hooks"
import { Button } from "@/components/ui/button"
import { Trash } from "lucide-react"
import { removeProductFromCart } from "../../../redux/store/features/cartSlice"
import toast from "react-hot-toast"

const page = () => {
    const dispatch = useAppDispatch();
    const cartItems = useAppSelector(state => state.cart.cartItems)
    
    const handleRemove = (id:number) => {
        dispatch(removeProductFromCart(id));
       
        localStorage.setItem(
        "cart",
        JSON.stringify(cartItems.filter((product) => product.id !== id))
        );
        toast.error('Item Remove successfully');
    }
    return (
        <div className="bg-blue-50 py-8 px-8 min-h-screen">
            <div className="rounded max-w-xl bg-white rounded-xl mx-auto min-h-96">
                <h2 className="py-5 px-5 border-b">Shopping Cart ({cartItems?.length})</h2>
                <div className="space-y-3 divide-y-4 divide-gray-100 p-8">
                    {
                        cartItems?.length > 0 ? (
                            cartItems?.map((product) => (
                                <div key={product?.id}>
                                    <div className="py-3 px-4 flex items-center justify-between">
                                        <Image className='h-28 w-28 object-cover rounded' src={product?.image ?? '/calcium2.jpeg'} width={225} height={225} alt='calcium' />
                                        <h3 className='font-semibold text-xl'>{product?.name}</h3>
                                        <p className='font-semibold text-sm py-2'>${product?.price}</p>
                                    </div>
                                    <Button variant={'destructive'} size={'sm'} onClick={() => handleRemove(product?.id)}>
                                        <Trash className="w-4 h-4 mr-2"/>
                                        Remove
                                    </Button>
                                </div>
                            ))
                        ) : (
                            <div className="px-5 py-5 text-center flex items-center justify-center h-full">
                                <h2>No Items in Cart</h2>
                            </div>
                        )
                    }
                </div>

            </div>
        </div>
    )
}

export default page