import React , {useState} from 'react';
import './App.css';
import Title from './Title';
import Input from './Input';
import Table from './Table';
import HeadTable from './HeadTable';
import Navbar from './Navbar'
import SearchTable from './SearchTable'
import Tail from './Tail'
let keyid=1;
function App() {
  const [ClickSearch,setClicksearch] =  useState(false)
  const [Countstd,setCountstd] = useState(1)
  const [Data, setData] = useState([{
    Firstname : 'Diablo1',
    Lastname : 'Devil',
    Id : '007',
    Faculty : 'Hell'
  },
  ]);
  // const [Search,setSearch] =  useState({
  //   Firstname : '',
  //   Lastname : '',
  //   Id : '',
  //   Faculty : ''
  // })
  const [Tablesearch,setTablesearch] = useState([{
    Firstname : '',
    Lastname : '',
    Id : '',
    Faculty : ''
  }]);
  function addData(Firstname,Lastname,Id,Faculty){
    const newData = {keyid,Firstname,Lastname,Id,Faculty};
    setData([...Data,newData ]);
    keyid +=1;
  }
  function deleteData(keyid){
    const updatedData = Data.filter((data) => data.keyid !== keyid );
    const updatedSearch = Tablesearch.filter((data) => data.keyid !== keyid );
    setData(updatedData);
    setTablesearch(updatedSearch);

  }
  function countStd(events){
    const updatedCountstd = Countstd+events
    setCountstd(updatedCountstd)
  }
  // function createTable(Firstname,Lastname,Id,Faculty){
  //   const newTable = Data.filter((data) => 
  //     ( data.Firstname === Firstname 
  //     && data.Lastname === Lastname 
  //     && data.Id === Id 
  //     && data.Faculty === Faculty ) 
  //     );
  //     setTablesearch(newTable);
  // }

  // async function createTable(Firstname,Lastname,Id,Faculty){
  function createTable(Firstname,Lastname,Id,Faculty){  
    try{
      let newTableFi = Data.filter((data) => ( Firstname !== '') 
      ? data.Firstname === Firstname : data.Firstname.length >0
      );
      let newTableL =  newTableFi;
      newTableL = newTableFi.filter((data) => ( Lastname !== '') 
      ? data.Lastname === Lastname : data.Lastname.length >0
      );
      let newTableI =  newTableL;
      newTableI = newTableL.filter((data) => ( Id !== '') 
      ? data.Id === Id : data.Id.length >0
      );
      let newTableFa =  newTableI;
      newTableFa = newTableI.filter((data) => ( Faculty !== '') 
      ? data.Faculty === Faculty : data.Faculty.length >0
      );
      setTablesearch(newTableFa);
    }
    catch(error){
      console.log(error.message)
    }
    
  }

  function clickButton(state){
    setClicksearch(state)
  }


  return (
    <div className = 'App'>
      <Title/>
      <Navbar/>
      <Input addData={addData} countStd={countStd}/>
      <SearchTable  clickButton={clickButton} createTable={createTable}/>
      <HeadTable/>
      {ClickSearch ?(
        Tablesearch.map((tablesearch) => (
          <Table key = {tablesearch.keyid} keyid = {tablesearch.keyid} Firstname={tablesearch.Firstname} Lastname={tablesearch.Lastname} Id={tablesearch.Id} Faculty={tablesearch.Faculty} 
            deleteData = {deleteData} countStd={countStd}
          />         
        )) 
      ):(
          Data.map((data) => (
          <Table key = {data.keyid} keyid = {data.keyid} Firstname={data.Firstname} Lastname={data.Lastname} Id={data.Id} Faculty={data.Faculty} 
            deleteData = {deleteData} countStd={countStd}
          />
        )) 
      )}
      <Tail Countstd={Countstd}/>
    </div>
  );
}

 


export default App;
