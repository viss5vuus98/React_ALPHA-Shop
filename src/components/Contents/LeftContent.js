import StepProgress from '../Step/StepProgress'
import StepAddress from '../Step/StepAddress'
import StepCreditCard from '../Step/StepCreditCard'
import StepShip from '../Step/StepShip'
import ProgressControl from '../ProgressControl/ProgressControl'
import styles from '../../style/content.module.css'

const FormControl = (step) => {
  if(step.step === 1){
    return <StepAddress/>
  }
  if(step.step === 2){
    return <StepShip/>
  }
  return <StepCreditCard/>
}

export default function LeftContent(props) {
  return (
    <div className={styles.left_content}>
        <StepProgress/>
        <FormControl step={props.step}/>
        <ProgressControl step={props.step} setStep={props.setStep}/>
    </div>
  )
}