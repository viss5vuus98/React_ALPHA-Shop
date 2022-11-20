//context
import CartProvider from './components/Context/CartProvider';
//components
import LeftContent from './components/Contents/LeftContent';
import RightContent from './components/Contents/RightContent'
//css
import styles from './style/app.module.css'

function App() {

  return (
    <CartProvider>
        <div className={styles.main}>
        <LeftContent 
        />
        <RightContent
        />
      </div>
    </CartProvider>
  );
}

export default App;
