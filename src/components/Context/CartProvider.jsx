import { useState } from "react"
import { CartContext } from "./Context"

export const initialData = [
  {
    id: '1',
    name: '貓咪罐罐',
    img: 'https://picsum.photos/300/300?text=1',
    price: 100,
    quantity: 2,
  },
  {
    id: '2',
    name: '貓咪干干',
    img: 'https://picsum.photos/300/300?text=2',
    price: 200,
    quantity: 1,
  },
]

const CartProvider = ({children}) => {
  let [step, setStep] = useState(1)
  let [ship, setShip] = useState(0)
  const [total, setTotal] = useState(initialData.map(product => product.price * product.quantity)
  .reduce((accItem, currentItem) => accItem + currentItem))
  

  function handleUpdateTotal(currentPrice){
    setTotal(total + (currentPrice))
  }
  function  handleChangeShip(ship) {
    setShip(ship)
  }

  return (
    <CartContext.Provider value={{step, ship, total, handleChangeShip, handleUpdateTotal}}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider