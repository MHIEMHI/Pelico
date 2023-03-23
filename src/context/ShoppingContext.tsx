import { createContext, useContext, ReactNode, useState } from 'react';

const ShoppingCartContext = createContext({} as ShoppingCartContextType);


export function useShoppingCart ()
{
	return useContext(ShoppingCartContext);
}

type ShoppingCartProps = {
	children: ReactNode;
};

type CartItem = {
	id: string;
	quantity: number;
};
type ShoppingCartContextType = {
	getItemQuantity: (id: string) => number;
	increaseCartItemQuantity: (id: string) => void;
	cartItems: CartItem[]
};

export function ShoppingCartProvider ({ children }: ShoppingCartProps)
{
	const [cartItems, setCartItems] = useState<CartItem[]>([]);

	const getItemQuantity = (id: string) =>
	{
		return cartItems.find(item => item.id === id)?.quantity || 0;
	};

	const increaseCartItemQuantity = (id: string,) =>
	{
		setCartItems(currItems =>
		{
			let curreItem = currItems.find(item => item.id === id);
			if (!curreItem)
			{
				return [...currItems, { id, quantity: 1 }];
			}
			return currItems.map(item =>
			{
				if (item.id != id) 
				{
					return item;
				}
				return { ...item, quantity: item.quantity + 1 };
			});
		});
	};
	return (
		<ShoppingCartContext.Provider value={{ increaseCartItemQuantity, getItemQuantity, cartItems }}>
			{children}
		</ShoppingCartContext.Provider>
	);
}