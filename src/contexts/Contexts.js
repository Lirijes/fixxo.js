import { createContext } from 'react';

export const ProductContext = createContext() /* en context som blir tillgänglig för alla routes i detta fall, i detta fall behöver vi ej använda item={products} i enskild vy */
export const FeaturedProductContext = createContext()
export const SaleProductContext = createContext()