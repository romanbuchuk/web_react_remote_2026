import styles from './List.module.css';
import ListItem from './components/ListItem';
import { useEffect, useState } from 'react';

const List = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then((response) => response.json())
      .then((data) => setItems(data.users));
    //
  }, []);

  return (
    <ul className={styles.list}>
      {items.map((item, index) => (
        <ListItem key={index}>{item.firstName}</ListItem>
      ))}
    </ul>
  );
};
export default List;

// { default: Button, Button }
