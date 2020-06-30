import { useEffect, useState } from "react";

export const useFetchDetails = () => {
  //Defining states for hook
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      fetch("/data/data.json")
        .then((res) => res.json())
        .then((json) => {
          setLoading(false);
          if (json.details) {
            setDetails(json.details);
          } else {
            setDetails([]);
          }
        })
        .catch((err) => {
          setError(err);
          setLoading(false);
        });
    };
    fetchData();
  }, []);
  return { details, loading, error };
};
