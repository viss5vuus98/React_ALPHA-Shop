import CartList from '../CartList/CartList'
import styles from '../../style/content.module.css'

export default function RightContent() {
  return (
    <section className={styles.right_content}>
      <CartList />
    </section>
  )
}