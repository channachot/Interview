import React from 'react';
import './App.css';

function HeadTable(){
    return(
        <table>
            <tr>
                <th className='col1'>Firstname</th>
                <th className='col2'>Lastname</th>
                <th className='col3'>Id</th>
                <th className='col4'>Faculty</th> 
                <th className='col5'></th> 
            </tr>
        </table>
    )
}

export default HeadTable;