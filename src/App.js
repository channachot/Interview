import React , {useState} from 'react';
import './App.css';
import Title from './Title';
import Input from './Input';
import Table from './Table';
import HeadTable from './HeadTable';
import Navbar from './Navbar'


let keyid=1;
function App() {

  const [Data, setData] = useState([{
  Firstname : 'Diablo',
  Lastname : 'Devil',
  Id : '007',
  Faculty : 'Hell'}]);

  function addData(Firstname,Lastname,Id,Faculty){
    const newData = {keyid,Firstname,Lastname,Id,Faculty};
    setData([...Data,newData ]);

    keyid +=1;
  }
  function deleteData(keyid){
    const updatedData = Data.filter((data) => data.keyid !== keyid );
    setData(updatedData);
  }

  return (
    <div className = 'App'>
      <Title/>
      <Navbar/>
      <Input addData={addData} />
      <HeadTable/>
      {Data.map((data) => (
        <Table key = {data.keyid} keyid = {data.keyid} Firstname={data.Firstname} Lastname={data.Lastname} Id={data.Id} Faculty={data.Faculty} 
          deleteData = {deleteData}
        />
      ))}
    </div>
  );
}

export default App;
