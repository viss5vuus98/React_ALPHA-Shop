import CartList from '../CartList/CartList'
import styles from './content.module.css'

export default function RightContent() {
  return (
    <section className={styles.right_content}>
      <CartList
      />
    </section>
  )
}