//hook
import { useCartContext } from "../Context/Context"
//css
import styles from './creditCard.module.css'

export default function StepCreditCard() {
  const { handleInputChange } = useCartContext()

  return (
    <form action="" className={styles.form}>
      <h3 className={styles.title}>付款資訊</h3>
      <section className={styles.input_section}>
        <div className={styles.row}>
          <label className={styles.label} htmlFor="creditCard_Name">持卡人姓名</label>
          <input id='creditCard_Name' 
          className={styles.input} 
          type="text" 
          placeholder='John Doe' 
          onChange={(e) => handleInputChange('name', e.target.value)}/>
        </div>
        <div className={styles.row}>
          <label className={styles.label} htmlFor="creditCard_Number">卡號</label>
          <input id='creditCard_Number' 
          className={styles.input} 
          type="text" 
          placeholder='1111 2222 3333 4444' max="12" 
          onChange={(e) => handleInputChange('cardNumber', e.target.value)}
          />
        </div>
        <div>
          <div className={`${styles.row} ${styles.fold}`}>
            <label className={styles.label} htmlFor="creditCard_validDate">有效期限</label>
            <input id='creditCard_validDate' 
            className={styles.input} 
            type="text" placeholder='MM/YY' max="4"
            onChange={(e) => handleInputChange('validThru', e.target.value)}
            />
          </div>
          <div className={`${styles.row} ${styles.fold}`}>
            <label className={styles.label} htmlFor="creditCard_CVC">CVC/CCV</label>
            <input id='creditCard_CVC' 
            className={styles.input} 
            type="text" placeholder='123' max="3"
            onChange={(e) => handleInputChange('cvc', e.target.value)}
            />
          </div>
        </div>
      </section>
    </form>
  )
}
