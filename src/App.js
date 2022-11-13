import { useState } from 'react';
import LeftContent from './components/Contents/LeftContent';
import RightContent from './components/Contents/RightContent'
import styles from './style/app.module.css'


function App() {
  let [step, setStep] = useState(1)

  return (
    <div className={styles.main}>
      <LeftContent step={step} setStep={setStep}/>
      <RightContent/>
    </div>
  );
}

export default App;
