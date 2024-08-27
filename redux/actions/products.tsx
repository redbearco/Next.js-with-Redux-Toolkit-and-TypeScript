'use server'

import axios from "axios"
import { IProduct } from "../types/types";

export const getAllProducts = async () => {
    try {
        const res = await axios.get("https://dummyjson.com/products?limit=12");
        const products = res?.data?.products;
        return products as IProduct[];
    } catch (error) {
        console.log('error', error)
        return null;
    }
}