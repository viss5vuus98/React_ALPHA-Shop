import styles from '../../style/progressControl.module.css'
import leftArrow from '../../assets/icons/left-arrow.svg';
import rightArrowIco from '../../assets/icons/right-arrow.svg';

export default function ProgressControl() {
  return (
    <section className={styles.button_control}>
      <section className={styles.group}>
        <button className={styles.prev}>
          <img src={leftArrow} className={`${styles.icon} ${styles.left_icon}`} alt="" />
          <p>上一步</p>
        </button>
        <button className={styles.next}>
          <p>下一步</p>
          <img src={rightArrowIco} className={`${styles.icon} ${styles.right_icon}`} alt="" />
        </button>
      </section>
    </section>
  )
}