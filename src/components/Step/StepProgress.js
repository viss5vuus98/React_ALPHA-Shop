import { Fragment } from 'react'
import styles from './stepProgress.module.css'

const stepList = [
  {
    id: 1,
    label: '寄送地址',
    num: 1,
    state: true 
  },
  {
    id: 2,
    label: '運送方式',
    num: 1,
    state: false
  },
  {
    id: 3,
    label: '付款資訊',
    num: 1,
    status: false
  }
]

export default function StepProgress({currentStep}){
  const steps = stepList.map(step => {
    return {
      ...step,
      state: step.id <= currentStep
    }
  })

  return (
    <section className={styles.container}>
      <Step steps={steps}/>
    </section>
  )
}


const Step = ({steps}) => {

  const renderStep = steps.map(step => {
      return <Fragment key={step.id}>    
              <div className={`${styles.step} ${step.state? styles.active : null}`}>
                <div className={styles.circle}></div>
                <div className={styles.label}>{step.label}</div>    
              </div>
              { step.id < stepList.length && <span className={`${styles.connectLine} ${step.state? styles.active : null}`}></span> }
            </Fragment>
  })
  return (
    renderStep
  )
}

