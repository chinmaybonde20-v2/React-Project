import React, { useState } from 'react';
import MyForm from './components/MyForm';
import DataTable from './components/DataTable';

function App() {
  const [data, setData] = useState([]);

  const handleSubmit = (formData) => {
    setData([...data, formData]);
  };

  return (
    <div>
      <h1>A react application</h1>
      <p>Enter your name and email address and click submit</p>
      <p>Then check the table below and click submit</p>
      <MyForm onSubmit={handleSubmit} />
      <DataTable data={data} />
    </div>
  );
}

export default App;
