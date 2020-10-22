import React, { useEffect, useState } from "react";
import Table from "./components/Table";
import axios from "axios";
import "./App.css";

function App() {
  const [myData, setMyData] = useState([]);  //State handles the data

  useEffect(() => {
    //Fetching the data
    axios
      .get(`http://fetch-hiring.s3.amazonaws.com/hiring.json`)
      .then((res) => {
        const newData = res.data.filter(
          (item) => item.name !== null && item.name !== ""
        ); //Filterig any null / empty name value
        setMyData(newData);
      })
      .catch((err) => console.log(err));
  }, [myData]); //preventing infinite loop

  console.log(myData);
  return (
    <div className="App">
      <h1>Fetch App</h1>
      <p>Sorted by listId and name</p>
      <Table myData={myData} />
    </div>
  );
}

export default App;
