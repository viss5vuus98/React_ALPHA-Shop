import productStyles from '../../style/products.module.css'
import cartStyles from '../../style/cartList.module.css'
import plusIcon from '../../assets/icons/plus.svg'
import minusIcon from '../../assets/icons/minus.svg'

const products = [
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

const Product = () => {
  const product = products.map(product => 
    <div key={product.id} className={productStyles.product_container}>
      <div className={productStyles.img_container}><img src={product.img} alt="" /></div>
      <div className={productStyles.product_info}>
        <h4>{product.name}</h4>
        <div className={productStyles.product_control}>
          <div className={productStyles.icon}>
            <img src={minusIcon} alt="minus" />
          </div>
          <p className={productStyles.count}>{product.quantity}</p>
          <div className={productStyles.icon}>
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

const ProductList = () => {
  return (
    <div className={cartStyles.cart_container}>
      <h3 className={cartStyles.title}>購物籃</h3>
        <Product/>
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

export default ProductList