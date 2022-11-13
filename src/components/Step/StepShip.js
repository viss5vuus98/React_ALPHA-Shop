import styles from '../../style/ship.module.css'

export default function StepShip({ship, setShip}) {
  const handleChangeShip = (ship) => {
    setShip(ship)
  }

  return (
      <form action="" className={styles.form}>
        <h3 className={styles.title}>運送方式</h3>
        <section className={styles.input_section}>
          <div className={styles.radio_container}>
            <div className={styles.row}>
              <div>
                <input type="radio" name="phase" onChange={() => handleChangeShip(0)} checked/>
                <div className={styles.text}>
                  <p>標準運送</p>
                  <span>約3~7個工作天</span>
                </div>
              </div>
              <span>免費</span>
            </div>
            <div className={styles.row}>
              <div>
                <input type="radio" name="phase" onChange={() => handleChangeShip(500)}/>
                <div className={styles.text}>
                  <p>DHL 貨運</p>
                  <span>48小時內送達</span>
                </div>
              </div>
              <span>$500</span>
            </div>
          </div>
        </section>
      </form>
  )
}