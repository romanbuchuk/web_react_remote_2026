import styles from './App.module.css';

import Button from './components/Button/Button';
import List from './components/List';

function App() {
  return (
    <div>
      <h1 className={styles.item}>Test App</h1>
      <Button name="TestName" age={30}>
        Click Me
      </Button>
      <List />
    </div>
  );
}

export default App;
