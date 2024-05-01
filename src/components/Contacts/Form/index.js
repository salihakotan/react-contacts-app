import {useEffect, useState} from "react";

function Form({contacts,setContacts}) {

    const initialFormValues = {name:"",phone:""}

    const [form,setForm] = useState(initialFormValues)
    
    

    useEffect(()=> {
        setForm(initialFormValues);
    },[contacts])

    const onSubmit = (e) => {
        e.preventDefault();
       
        if(form.name === "" || form.phone === "") 
            return false;

        setContacts([...contacts,form])
      
    }

    const onChangeInput = (e) => {
        setForm({...form,[e.target.name]:e.target.value})
    }


    useEffect((e)=> {
        console.log("changed contacts")
    },[contacts])


  return (
    <div>
      <form onSubmit={onSubmit}>
        <input name="name" placeholder="Enter your name" onChange={onChangeInput} value={form.name} />
        <input name="phone" placeholder="Enter your phone number" onChange={onChangeInput} value={form.phone} />
       <div className="button">
        <button>Add</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
