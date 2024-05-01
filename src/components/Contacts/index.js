import { useEffect, useState } from 'react'
import List from './List'
import Form from './Form'
import "./styles.css"


function Contacts() {


    const defaultContacts = (e) => [
        {
            name:"Jack",
            phone:"34-58854925"
        },
        {
            name:"Mary",
            phone:"67-8464588"
        },
        {
            name:"Stephen",
            phone:"43-63436757"
        }
    ]

    const [contacts,setContacts] = useState(defaultContacts)


    useEffect(()=> {
        console.log(contacts);
    },[contacts])

  return (
    <div id='container'>
        <h1>Contacts</h1>
        
        <List contacts={contacts}/>
        <Form contacts={contacts} setContacts={setContacts}/>

    </div>
  )
}

export default Contacts