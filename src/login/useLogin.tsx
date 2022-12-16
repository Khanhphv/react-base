import { useState } from 'react';

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const login = async data => {
    setLoading(true);
  };
  return { login };
};
