import React, { useEffect, useState } from 'react';
import MyForm from './components/MyForm';
import DataTable from './components/DataTable';
import axios from 'axios';

function App() {
  //Calling api using Axios
  const [apiData, setApiData] = useState('');
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://springboot-health-api-alb-243191324.us-east-1.elb.amazonaws.com/health');
        //http://172.16.12.109:8080/health
        setApiData(response.data);
      } catch (error) {
        console.error('An error occurred:', error);
      }
    }
    fetchData();
    console.log(apiData);
},[apiData])

  const [data, setData] = useState([]);

  const handleSubmit = (formData) => {
    setData([...data, formData]);
  };

  return (
    <div>
      <h1>A react application for learning </h1>
      <p>Enter your name and email address and click submit</p>
      <p>Data after calling the api: <b>{apiData}</b></p>
      <MyForm onSubmit={handleSubmit} />
      <DataTable data={data} />
    </div>
  );
}

export default App;
