//hook
import { useState } from 'react'

//context
import { useCartContext } from '../Context/Context'

//components
import CartItem from './CartItem'

//css
import cartStyles from './cartList.module.css'

//data
import { initialData } from '../Context/CartProvider'


const CartList = () => {
  const [products] = useState(initialData)
  const { ship, total, handleUpdateTotal } = useCartContext()

  return (
    <Cart 
    total={total}
    ship={ship}
    >
        <Product products={products} handleClickItem={handleUpdateTotal}/>
    </Cart>
  )
}

const Cart = ({total, ship, children }) => {
  return (
    <div className={cartStyles.cart_container}>
      <h3 className={cartStyles.title}>購物籃</h3>
        {children}
      <section className={`${cartStyles.cart_info} ${cartStyles.ship}`}>
        <p className={cartStyles.text}>運費</p>
        <p className={cartStyles.price}>{ship === 0 ? '免費' : ship}</p>
      </section>
      <section className={cartStyles.cart_info}>
        <p className={cartStyles.text}>小計</p>
        <p className={cartStyles.price}>＄{total === 0 ? total : total + ship}</p>
      </section>
    </div>
  )
}

const Product = (props) => {
  const product = props.products.map(product => {
    return <CartItem
            key={product.id}
            product={product}
            handleClickItem={props.handleClickItem}
            />
  })
  return (
    <div className={cartStyles.product_list}>
      {product}
    </div>
  )
}


export default CartList