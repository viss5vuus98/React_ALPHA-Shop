import Progress from '../Step/StepProgress'
import StepAddress from '../Step/StepAddress'
import ProgressControl from '../ProgressControl/ProgressControl'
import styles from '../../style/content.module.css'

export default function LeftContent() {
  return (
    <div className={styles.left_content}>
        <Progress/>
        <StepAddress/>
        <ProgressControl/>
    </div>
  )
}