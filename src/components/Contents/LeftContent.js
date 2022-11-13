import StepProgress from '../Step/StepProgress'
import StepAddress from '../Step/StepAddress'
import StepCreditCard from '../Step/StepCreditCard'
import StepShip from '../Step/StepShip'
import ProgressControl from '../ProgressControl/ProgressControl'
import styles from '../../style/content.module.css'

const FormControl = (props) => {
  if(props.step === 1){
    return <StepAddress/>
  }
  if(props.step === 2){
    return <StepShip ship={props.ship} setShip={props.setShip}/>
  }
  return <StepCreditCard/>
}

export default function LeftContent(props) {
  return (
    <div className={styles.left_content}>
        <StepProgress currentStep={props.step}/>
        <FormControl 
        step={props.step}
        ship={props.ship}
        setShip={props.setShip}         
        />
        <ProgressControl step={props.step} setStep={props.setStep}/>
    </div>
  )
}