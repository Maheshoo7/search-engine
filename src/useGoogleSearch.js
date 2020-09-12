import { useState, useEffect } from "react";

const CONTEXT_KEY = "59824745a3126805a";
const API_KEY = "AIzaSyCK9VkNmSiSUu-s9VUaH9VIBnIbqISjlqQ";

function useGoogleSearch(term) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
      )
        .then((response) => response.json())
        .then((result) => {
          setData(result);
        });
    };
    fetchData();
  }, [term]);

  return { data };
}

export default useGoogleSearch;
