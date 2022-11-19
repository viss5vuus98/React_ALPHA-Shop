import styles from './progressControl.module.css'
import leftArrow from '../../assets/icons/left-arrow.svg';
import rightArrowIco from '../../assets/icons/right-arrow.svg';

export default function ProgressControl(props) {
  const handleClick = (e) => {
    e.preventDefault();
    if(e.target.innerText === '上一步'){
      props.setStep(props.step - 1)
      return
    }

    props.setStep(props.step >= 3 ? 3 : props.step + 1)
    return
  }
  const BtnControl = ({step}) => {
    return step <= 1 ? null : <button className={styles.prev} onClick={handleClick}>
                                <img src={leftArrow} className={`${styles.icon} ${styles.left_icon}`} alt="prev"/>
                                <p>上一步</p>
                              </button>
  }

  return (
    <section className={styles.button_control}>
      <section className={styles.group}>
        <button className={styles.next} onClick={handleClick}>
          <p>{props.step === 3 ? '確認下單': '下一步'}</p>
          <img src={rightArrowIco} className={`${styles.icon} ${styles.right_icon}`} alt="next" />
        </button>
        <BtnControl step={props.step}/>
      </section>
    </section>
  )
}