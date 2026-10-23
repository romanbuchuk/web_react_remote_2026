// properties = {
//    name: 'TestName',
//    age: 30,
//    children: '.......'
// };
import styles from './Button.module.css';

const Button = ({ handleClick, children }) => {
  // const { handleClick, children } = properties;

  return (
    <button className={styles.button} onClick={handleClick}>
      {children}
    </button>
  );
};
export default Button;

// { default: Button, Button }
