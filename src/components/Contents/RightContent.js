import CartList from '../CartList/CartList'
import styles from '../../style/content.module.css'

export default function RightContent(props) {
  return (
    <section className={styles.right_content}>
      <CartList 
      products={props.products}
      setProducts={props.setProducts}
      />
    </section>
  )
}