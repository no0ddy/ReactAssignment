import { useEffect, useState } from "react";
import axios from "axios";
import Display from "./Display";

const App = () => {
  const [data, setData] = useState([]);

  const info = async function () {
    return await axios.get("https://randomuser.me/api/?results=50");
  };
  console.log(data);
  useEffect(() => {
    info()
      .then((resp) => {
        console.log(resp.data.results);
        return setData(resp.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  return <Display data={data} />;
};
export default App;
