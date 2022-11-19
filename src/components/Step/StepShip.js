//context
import { useCartContext } from '../Context/Context'
//css
import styles from './ship.module.css'

export default function StepShip() {
  const { handleChangeShip } = useCartContext()

  return (
      <form action="" className={styles.form}>
        <h3 className={styles.title}>運送方式</h3>
        <div className={styles.input_section}>
          <div className={styles.radio_container}>
            <div className={styles.row}>
              <div>
                <input type="radio"
                id="standard" 
                name="phase" 
                value="0" 
                onChange={() => handleChangeShip(0)} 
                defaultChecked={true}/>
                <div className={styles.text}>
                  <label htmlFor="standard">標準運送</label>
                  <span>約3~7個工作天</span>
                </div>
              </div>
              <span>免費</span>
            </div>
            <div className={styles.row}>
              <div>
                <input type="radio"
                id="hdl" 
                name="phase" 
                value="500" 
                onChange={() => handleChangeShip(500)}/>
                <div className={styles.text}>
                  <label htmlFor="dhl">DHL 貨運</label>
                  <span>48小時內送達</span>
                </div>
              </div>
              <span>$500</span>
            </div>
          </div>
        </div>
      </form>
  )
}