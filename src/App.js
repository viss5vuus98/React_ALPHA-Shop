//hook
import { useState } from 'react';
//components
import LeftContent from './components/Contents/LeftContent';
import RightContent from './components/Contents/RightContent'
//css
import styles from './style/app.module.css'

function App() {
  let [step, setStep] = useState(1)
  let [ship, setShip] = useState(0)

  return (
    <div className={styles.main}>
      <LeftContent 
      step={step} 
      setStep={setStep}
      ship={ship}
      setShip={setShip} 
      />
      <RightContent
       ship={ship}
      />
    </div>
  );
}

export default App;
