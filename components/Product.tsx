'use client'
import { Button } from '@/components/ui/button'
import { ShoppingBag } from 'lucide-react'
import Image from 'next/image'
import { IProduct } from '../redux/types/types';
import { useAppDispatch, useAppSelector } from '../redux/hooks/hooks';
import { addProductToCart, removeProductFromCart } from '../redux/store/features/cartSlice';
import toast from 'react-hot-toast';
import { useEffect, useState } from 'react';

export default function Product({ item }: { item: IProduct }) {
  const [existing, setExisting] = useState(false);
  const cartItems = useAppSelector((state) => state.cart.cartItems);
  const dispatch = useAppDispatch();

  useEffect(() =>{
    const isExisting = cartItems.some((itemsome) => itemsome?.id === item?.id); 
    setExisting(isExisting);
  }, [cartItems, item?.id])

  const handleAdd = () => {
    const newCartItem = {
      id: item?.id,
      image: item?.images[0],
      name: item?.title,
      price: item?.price
    };

    dispatch(
      addProductToCart(newCartItem)
    );
    localStorage.setItem("cart", JSON.stringify([...cartItems, newCartItem]));
    toast.success('Item added successfully');
  }

  const handleRemove = (productId: number) => {
    dispatch(removeProductFromCart(productId));
    toast.error('Item Remove successfully');
    localStorage.setItem(
      "cart",
      JSON.stringify(cartItems.filter((product) => product.id !== productId))
    );
  };

  return (
    <div className="">
      <Image className='h-36 w-36 object-cover rounded' src={item?.images[0] ?? '/calcium2.jpeg'} width={225} height={225} alt='calcium' />
      <h3 className='font-semibold text-xl'>{item?.title}</h3>
      <p className='font-semibold text-sm py-2'>${item?.price}</p>

      {existing ? (
        <Button variant={'destructive'} onClick={() => handleRemove(item?.id)}>
          <ShoppingBag className='w-4 h-4 mr-2' />
          <span>Remove From Cart</span>
        </Button>
      ) : (
        <Button onClick={() => handleAdd()}>
          <ShoppingBag className='w-4 h-4 mr-2' />
          <span>Add to Cart</span>
        </Button>
      )}

    </div>
  )
}
