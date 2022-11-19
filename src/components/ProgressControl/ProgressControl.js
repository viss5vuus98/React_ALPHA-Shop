import styles from './progressControl.module.css'
import leftArrow from '../../assets/icons/left-arrow.svg';
import rightArrowIco from '../../assets/icons/right-arrow.svg';

export default function ProgressControl({ step, handleProgress }) {
  
  return (
    <section className={styles.button_control}>
      <Button step={step} handleProgress={handleProgress}/>
    </section>
  )
}

const Button = ({step, handleProgress}) => {
  return (
    <section className={styles.group}>
        <button className={styles.next} onClick={handleProgress}>
          <p>{step === 3 ? '確認下單': '下一步'}</p>
          <img src={rightArrowIco} className={`${styles.icon} ${styles.right_icon}`} alt="next" />
        </button>
        {step > 1 && <button className={styles.prev} onClick={ handleProgress }>
                        <img src={leftArrow} className={`${styles.icon} ${styles.left_icon}`} alt="prev"/>
                        <p>上一步</p>
                      </button>
        }
    </section>
  )
}