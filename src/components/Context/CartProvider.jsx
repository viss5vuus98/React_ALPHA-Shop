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
  let [ship, setShip] = useState(0)
  const [total, setTotal] = useState(initialData.map(product => product.price * product.quantity)
  .reduce((accItem, currentItem) => accItem + currentItem))

  const [formData, setFormData] = useState({
    info: {
      name: '',
      cardNumber: '',
      validThru: '',
      cvc: ''
    },
    total: total
  })
  
  //input change
  function handleInputChange(key, value){
    setFormData({
      ...formData,
      info: {
        ...formData.info,
        [key]: value
      }
    })
  }

  //submit 
  function handleSubmit() {
    console.table(formData)
  }

  //calculate total 
  function handleUpdateTotal(currentPrice){
    setTotal(total + (currentPrice))
    setFormData({
      ...formData,
      total: total + (currentPrice)
    })
  }

  //change ship
  function  handleChangeShip(ship) {
    setShip(ship)
  }

  return (
    <CartContext.Provider value={{ship, total, handleChangeShip, handleUpdateTotal, handleInputChange, handleSubmit}}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider