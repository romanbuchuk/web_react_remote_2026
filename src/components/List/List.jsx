import styles from './List.module.css';
import ListItem from './components/ListItem';
import useFetchUsers from '../../hooks/useFetchUsers';

const List = () => {
  const { isLoading, users: items } = useFetchUsers();

  return isLoading ? (
    <h2>Loading...</h2>
  ) : (
    <ul className={styles.list}>
      {items.map((item, index) => (
        <ListItem key={index}>{item.firstName}</ListItem>
      ))}
    </ul>
  );
};
export default List;

// { default: Button, Button }
