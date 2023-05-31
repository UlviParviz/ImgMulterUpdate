import { useState } from "react";
import "./App.css";
import axios from "axios";
import { useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:7777/images").then((res) => {
      setData(res.data);
      console.log(res.data)
    });
  }, []);

  return (
    <>
      <div className="app">
        <div className="app___wrapper">
          {data.map((item, index) => {
            return (
              <div key={index} className="app___wrapper___item">
                <div className="app___wrapper___item--top">
                  <img src={`http://localhost:7777/uploads/${item.image.name}`} alt="" />
                </div>
                <div className="app___wrapper___item--bottom">
                  <p className="app___wrapper___item--bottom--name">
                    {item.name}
                  </p>
                  <p className="app___wrapper___item--bottom--price">
                    {item.price}
                  </p>
                  <p className="app___wrapper___item--bottom--desc">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
