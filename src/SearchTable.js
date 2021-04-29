import React, {useState} from 'react';
import './App.css';


function SearchTable({clickButton,createTable}){
    const [Find,setFind] =  useState({
        Firstname : '',
        Lastname : '',
        Id : '',
        Faculty : ''
    })
    function onChange(event){
        setFind({...Find,[event.target.name]:event.target.value});
    }
    function onClick(event){
        event.preventDefault()
        createTable(Find.Firstname,Find.Lastname,Find.Id,Find.Faculty);
        if(
            Find.Firstname === ''&&
            Find.Lastname === ''&&
            Find.Id === ''&&
            Find.Faculty === ''
          ){
            clickButton(false)}
        else{
            clickButton(true)
        }
        setFind({
            Firstname : '',
            Lastname : '',
            Id : '',
            Faculty : ''   
        })
        
    }
    
    return(
        <div className='FindData'>
            <p className='Topic_selected'>First name</p>
            <input type='text' className='FindData_Input' name='Firstname' value={Find.Firstname} onChange={onChange}/>
            <p className='Topic_selected'>Last name</p>
            <input type='text' className='FindData_Input' name='Lastname' value={Find.Lastname} onChange={onChange}/>
            <p className='Topic_selected'>Id</p>
            <input type='text' className='FindData_Input' name='Id' value={Find.Id} onChange={onChange}/>
            <p className='Topic_selected'>Faculty</p>
            <input type='text' className='FindData_Input' name='Faculty' value={Find.Faculty} onChange={onChange}/>
            <button className='ButtonSearch' onClick={onClick}>Search</button>
        </div>
    )
}

export default SearchTable;