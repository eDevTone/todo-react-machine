import { useEffect, useState } from "react";

function useLocalStorage(name, initialValue) {
  const [item, setItems] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  try {
    useEffect(
      () => {
        // setTimeout(() => {
        const localStorageTodos = localStorage.getItem(name);
        let parsedItem;
        if (!localStorageTodos) {
          localStorage.setItem(name, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageTodos);
          setItems(parsedItem);
        }
        setLoading(false);
        // }, 2000);
      }, []);
  } catch (error) {
    setLoading(false);
    setError(error);
  }

  const saveItem = (newItem) => {
    localStorage.setItem(name, JSON.stringify(newItem));
    setItems(newItem);
  };

  return {
    item,
    saveItem,
    loading,
    error
  };
}

export { useLocalStorage };