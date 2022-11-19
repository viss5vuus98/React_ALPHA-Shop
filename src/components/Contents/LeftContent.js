import { useState } from 'react'
import StepProgress from '../Step/StepProgress'
import StepAddress from '../Step/StepAddress'
import StepCreditCard from '../Step/StepCreditCard'
import StepShip from '../Step/StepShip'
import ProgressControl from '../ProgressControl/ProgressControl'
import styles from './content.module.css'

const FormControl = (props) => {
  if(props.step === 1){
    return <StepAddress/>
  }
  if(props.step === 2){
    return <StepShip/>
  }
  return <StepCreditCard/>
}

export default function LeftContent() {
  let [step, setStep] = useState(1)

  function handleProgress(e){
    e.preventDefault();
    if(e.target.innerText === '上一步'){
      setStep(step - 1)
      return
    }

    setStep(step >= 3 ? 3 : step + 1)
    return
  }

  return (
    <div className={styles.left_content}>
        <StepProgress currentStep={step}/>
        <FormControl 
        step={step}
        />
        <ProgressControl step={step} setStep={setStep} handleProgress={handleProgress}/>
    </div>
  )
}