//hook
import { useState } from 'react'

//css
import productStyles from '../../style/products.module.css'
import cartStyles from '../../style/cartList.module.css'

// svg
import plusIcon from '../../assets/icons/plus.svg'
import minusIcon from '../../assets/icons/minus.svg'

const productData = [
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


const Product = (props) => {
  //TODO://事件處理器 需要處理當前的按鈕目標去更新陣列
  const handleClickItem = (productId, action) => {
    const updateProducts = props.products.map(product => {
      if(product.id === productId){
        return action === 'minus' ? {...product, quantity: product.quantity - 1} : {...product, quantity: product.quantity + 1}
      }
      return product
    })

    props.setProducts(updateProducts.filter(product => product.quantity > 0))
  }

  const product = props.products.map(product => 
    <div key={product.id} className={productStyles.product_container}>
      <div className={productStyles.img_container}><img src={product.img} alt="" /></div>
      <div className={productStyles.product_info}>
        <h4>{product.name}</h4>
        <div className={productStyles.product_control}>
          <div onClick={() => handleClickItem(product.id, 'minus')} className={productStyles.icon}>
            <img src={minusIcon} alt="minus" />
          </div>
          <p className={productStyles.count}>{product.quantity}</p>
          <div onClick={() => handleClickItem(product.id, 'minus')} className={productStyles.icon}>
            <img src={plusIcon} alt="plus" />
          </div>
        </div>
      </div>
      <p className={productStyles.price}>${product.price}</p>
    </div>
  )
  return (
    <div className={cartStyles.product_list}>{product}</div>
  )
}

const CartList = (props) => {
  const [products, setProducts] = useState(productData)

  return (
    <div className={cartStyles.cart_container}>
      <h3 className={cartStyles.title}>購物籃</h3>
        <Product products={products} setProducts={setProducts}/>
      <section className={`${cartStyles.cart_info} ${cartStyles.ship}`}>
        <p className={cartStyles.text}>運費</p>
        <p className={cartStyles.price}>免費</p>
      </section>
      <section className={cartStyles.cart_info}>
        <p className={cartStyles.text}>小計</p>
        <p className={cartStyles.price}>＄5322</p>
      </section>
    </div>
  )
}

export default CartList