import CartList from '../CartList/CartList'
import styles from './content.module.css'

export default function RightContent({ship}) {
  return (
    <section className={styles.right_content}>
      <CartList
      ship={ship} 
      />
    </section>
  )
}