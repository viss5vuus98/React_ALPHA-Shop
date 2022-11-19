// hook
import { useState } from 'react'

//css
import productStyles from './products.module.css'

// svg
import plusIcon from '../../assets/icons/plus.svg'
import minusIcon from '../../assets/icons/minus.svg'

const CartItem = (props) => {
  const { name, img, price, quantity } = { ...props.product}
  const [itemQuantity, setQuantity ] = useState(quantity)

  if(itemQuantity === 0){
    return null
  }
  return (
    <div className={productStyles.product_container}>
      <div className={productStyles.img_container}><img src={img} alt="" /></div>
      <div className={productStyles.product_info}>
        <h4>{name}</h4>
        <div className={productStyles.product_control}>
          <div onClick={() => {setQuantity(itemQuantity - 1); props.handleClickItem(-price)}} className={productStyles.icon}>
            <img src={minusIcon} alt="minus" />
          </div>
          <p className={productStyles.count}>{itemQuantity}</p>
          <div onClick={() => {setQuantity(itemQuantity + 1); props.handleClickItem(price)}} className={productStyles.icon}>
            <img src={plusIcon} alt="plus" />
          </div>
        </div>
      </div>
      <p className={productStyles.price}>${price * itemQuantity}</p>
    </div>
  )
}

export default CartItem
