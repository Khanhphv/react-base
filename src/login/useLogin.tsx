import { useState } from 'react';
import client from '../../api/api';

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const login = async data => {
    setLoading(true);
    try {
      const res = await client.post('/login', data);
      if (res) {
        //todo
      } else {
        // todo;
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };
  return { login, loading };
};

export default useLogin;
