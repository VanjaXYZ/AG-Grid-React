import axios from "axios";
import { useEffect } from "react";

const Table = () => {
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          "https://data.binance.com/api/v3/ticker/24hr"
        );
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);

  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};

export default Table;
