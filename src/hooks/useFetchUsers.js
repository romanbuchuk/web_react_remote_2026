import { useEffect, useState } from 'react';

const useFetchUsers = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then((response) => {
        setTimeout(() => setIsLoading(false), 1000);

        return response.json();
      })
      .then((data) => {
        setUsers(data.users);
      });
    //
  }, []);

  return { users, isLoading };
};
export default useFetchUsers;
