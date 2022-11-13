import { useState, useEffect } from 'react'
import styles from '../../style/progress.module.css'

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

function Step({steps}){

  const renderStep = steps.map(step => {
    if(step.id < stepList.length ){
      return <>    
              <div key={step.id} className={`${styles.step} ${step.state? styles.active : null}`}>
                <div className={styles.circle}></div>
                <div className={styles.label}>{step.label}</div>    
              </div>
              <span className={`${styles.connectLine} ${step.state? styles.active : null}`}></span>
            </>
    }
      return <div key={step.id} className={`${styles.step} ${step.state? styles.active : null}`}>
                <div className={styles.circle}></div>
                <div className={styles.label}>{step.label}</div>    
              </div>
  })
  return (
    renderStep
  )
}

export default function StepProgress({currentStep}){
  const [ steps, setSteps ] = useState([...stepList])

  useEffect(() => {
    const currentSteps = steps.map(step => {
      if(step.id <= currentStep){
        return {
          ...step,
          state: true
        }
      }
      return {
        ...step,
        state: false
      }
    })
    setSteps(currentSteps)
  }, [currentStep])

  return (
    <section className={styles.container}>
      <Step steps={steps}/>
    </section>
  )
}

