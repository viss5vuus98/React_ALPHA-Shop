import LeftContent from './components/Contents/LeftContent';
import RightContent from './components/Contents/RightContent'
import styles from './style/app.module.css'

function App() {
  return (
    <div className={styles.main}>
      <LeftContent />
      <RightContent/>
    </div>
  );
}

export default App;
