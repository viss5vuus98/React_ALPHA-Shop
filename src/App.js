import { useState } from 'react';
import LeftContent from './components/Contents/LeftContent';
import RightContent from './components/Contents/RightContent'
import styles from './style/app.module.css'

const productData = [
  {
    id: '1',
    name: '貓咪罐罐',
    img: 'https://picsum.photos/300/300?text=1',
    price: 100,
    quantity: 2,
  },
  {
    id: '2',
    name: '貓咪干干',
    img: 'https://picsum.photos/300/300?text=2',
    price: 200,
    quantity: 1,
  },
]

function App() {
  let [step, setStep] = useState(1)
  const [products, setProducts] = useState(productData)

  return (
    <div className={styles.main}>
      <LeftContent 
      step={step} 
      setStep={setStep} 
      products={products}
      />
      <RightContent 
      products={products}
      setProducts={setProducts}
      />
    </div>
  );
}

export default App;
