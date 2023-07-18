import { useState,useEffect } from "react";

const useFetch = (url) => {
  const [joke, setJoke] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchJoke = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(url);
      const data = await response.json();
      setJoke(data.value);
    } catch (error) {
      setError("Something went wrong");
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchJoke();
  }, [url]);

  return { joke, loading, error, fetchJoke };
};

export default useFetch;