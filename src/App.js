import React, { useEffect, useState } from 'react';
import MyForm from './components/MyForm';
import DataTable from './components/DataTable';
import axios from 'axios';



function App() {
  //Calling api using Axios
  useEffect(() => {
    async function fetchData() {
      const apiresult = await axios.get("http://springboot-health-api-alb-243191324.us-east-1.elb.amazonaws.com/health");
      console.log(apiresult);
    }
    fetchData();
  })

  const [data, setData] = useState([]);

  const handleSubmit = (formData) => {
    setData([...data, formData]);
  };

  return (
    <div>
      <h1>A react application for learning </h1>
      <p>Enter your name and email address and click submit</p>
      <p>Then check the table below and click submit.</p>
      <MyForm onSubmit={handleSubmit} />
      <DataTable data={data} />
    </div>
  );
}

export default App;
