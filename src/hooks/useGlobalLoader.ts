import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export function useGlobalLoader(delay = 300) {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, delay); // ajustá el delay si es necesario

    return () => clearTimeout(timeout);
  }, [location]);

  return loading;
}
