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
      <h1>Simple React Application for learning </h1>
      <MyForm onSubmit={handleSubmit} />
      <DataTable data={data} />
    </div>
  );
}

export default App;
