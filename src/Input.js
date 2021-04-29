import React, {useState} from 'react';
import './App.css';
function Input_text({addData,countStd}){
    
    const [Values, setValues] = useState({
        Firstname : '',
        Lastname : '',
        Id : '',
        Faculty : ''    
    });
    function onChange(event) {
        setValues({...Values,[event.target.name]:event.target.value});
    }
    function onClick(event){
        event.preventDefault()
        addData(Values.Firstname,Values.Lastname,Values.Id,Values.Faculty);
        setValues({
            Firstname : '',
            Lastname : '',
            Id : '',
            Faculty : ''    
        });
        countStd(1);
    }
    return(
        <div>
            <div className = 'Input'>
                    <div className = 'nameinput'>First Name</div>
                    <input className ='fieldinput' type='text' name ='Firstname' value={Values.Firstname} onChange={onChange} />

                    <div className = 'nameinput'>Last Name</div>
                    <input className ='fieldinput' type='text' name ='Lastname' value={Values.Lastname} onChange={onChange}/>

                    <div className = 'nameinput'>Id</div>
                    <input className ='fieldinput' type='text' name ='Id' value={Values.Id} onChange={onChange}/>

                    <div className = 'nameinput'>Faculty</div>
                    <input className ='fieldinput' type='text' name ='Faculty' value={Values.Faculty} onChange={onChange}/>
            </div>
            <button className = 'Input__Data'  onClick = {onClick}  >
                Add Data
            </button>
            <hr className='Line_Bot'/>
        </div>
    );
}

export default Input_text;