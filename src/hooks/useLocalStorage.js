import React, {useEffect, useState} from "react";

export default function useLocalStorage(key) {
    const isClient = typeof window !== "undefined"; // Check if we are on the client side
    const [value, setValue] = useState(() => {
      if (isClient) {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : null;
      }
      return null;
    });
  
    useEffect(() => {
      localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);
  
    return [value, setValue];
  }
