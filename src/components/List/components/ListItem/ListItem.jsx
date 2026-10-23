import styles from './ListItem.module.css';
import { useState } from 'react';
import classnames from 'classnames';

const ListItem = ({ children }) => {
  const [isActive, setIsActive] = useState(false); // => [variableName, (newValue) => variableName = newVal ]
  const computedClassName = classnames(styles.item, {
    [styles.active]: isActive,
  });

  const handleClick = () => {
    setIsActive((previousIsActive) => !previousIsActive);
  };

  return (
    <li className={computedClassName} onClick={handleClick}>
      {children}
    </li>
  );
};
export default ListItem;

// { default: Button, Button }
