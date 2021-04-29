import React from 'react';
import './App.css';
function Tail({Countstd}){
    return (
        <div>
            <p className='noStudent'>#Student : {Countstd}</p>
            <header className = 'Tail'>---------------------------------------</header>
        </div>
    )
}

export default Tail;