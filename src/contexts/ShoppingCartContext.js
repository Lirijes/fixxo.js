import ShoppingCart from "../components/ShoppingCart";

const { createContext, useContext, useState } = require("react");

const ShoppingCartContext = createContext()

export const useShoppingCart = () => {
    return useContext(ShoppingCartContext)
}

export const ShoppingCartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([])

    const cartQuantity = cartItems.reduce(
        (quantity, item) => item.quantity + quantity, 0
    )

    const getItemQuantity = (articleNumber) => {
        return cartItems.find(item => item.articleNumber === articleNumber)?.quantity || 0 //letar efter hur många antal av en produkt det finns i cartitems som är vår kundvagn
    }

    const incrementQuantity = (cartItem) => {// incrementquantity samma sak som att lägga till och öka ett värde 
        const {articleNumber, product} = cartItem

        setCartItems(items => {
            if (items.find(item => item.articleNumber === articleNumber) == null) {
                return [...items, { articleNumber, product, quantity: 1 }] //tar de befintliga produkterna genom ...items och sedan lägger till en ny produkt
            }
            else {
                return items.map(item => {
                    if (item.articleNumber === articleNumber) { //kollar så de artikelnummer vi lägger i varukorgen stämmer överrens med artikelnummer på varan vi vill lägga in
                        return {...item, quantity: item.quantity + 1 } //item innehåller articlenumber och product, vi ändrar bara quantity med +1 
                    }
                    /* else {
                        return item //matchar inte föregående så gör vi bara en return
                    } */
                })
            }
        })
    }

    const decrementQuantity = (cartItem) => {
        const {articleNumber} = cartItem

        setCartItems(items => {
            if (items.find(item => item.articleNumber === articleNumber).quantity === 1) {
                return items.filter(item => item.articleNumber !== articleNumber) //vi filterar bort item.articlenumer för vi vill ha med produkter som inte har samma artikelnummer
            }
            else {
                return items.map(item => {
                    if (item.articleNumber === articleNumber) {
                        return {...item, quantity: item.quantity - 1 }
                    }
                    else {
                        return item //matchar inte föregående så gör vi bara en return
                    }
                })
            }
        })
    }

    const removeItem = (articleNumber) => { //ta bort en artikel helt från varukorgen
        setCartItems(items => {
            return items.filter(item => item.articleNumber !== articleNumber)
        })
    }

    return <ShoppingCartContext.Provider value={{cartItems, cartQuantity, getItemQuantity, incrementQuantity, decrementQuantity, removeItem}}>
        {children}
        <ShoppingCart />
    </ShoppingCartContext.Provider>
}