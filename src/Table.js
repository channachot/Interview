import React from 'react';
import './App.css';

function Table({keyid,Firstname,Lastname,Id,Faculty,deleteData}){
    return(
        <table>
            <tr >
                <td className='col1'>{Firstname}</td>
                <td className='col2'>{Lastname}</td>
                <td className='col3'>{Id}</td>
                <td className='col4'>{Faculty}</td> 
                <td className='col5'><button className='delete_Data' onClick={() => deleteData(keyid)}>X</button></td>
            </tr>
            
            
            
        </table>
    )
}

export default Table;