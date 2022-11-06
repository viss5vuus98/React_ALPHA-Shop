import styles from '../../style/progerss.module.css'

function ConnectLine({label}) {
  if(label === 3) {
    return null
  }
  return <span className={styles.connectLine}></span>
}

function Step({label, num}){
  return (
      <div className={`${styles.step} ${styles.checked}`}>
        <div className={styles.circle}></div>
        <div className={styles.label}>{label}</div>
        <ConnectLine
          label={num}
        />        
      </div>
  )
}

export default function Progress(){
  return (
    <section className={styles.container}>
      <Step         
        label={'寄送地址'}
        num={1}
      />
      <Step 
        label={'運送方式'}
         num={2}
      />
      <Step 
        label={'付款資訊'}
         num={3}
      />
    </section>
  )
}