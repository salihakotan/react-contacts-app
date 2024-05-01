import React, { useState } from "react";


function List({ contacts }) {


    const [filterText,setFilterText] = useState("")

    const filtered = contacts.filter((item) => {
       return Object.keys(item).some((key) => 
            item[key].toString().toLowerCase().includes(filterText.toLowerCase())
        );
    });
    


  return (<div>

    <input name="filter" placeholder="Filter" onChange={(e)=> setFilterText(e.target.value)} value={filterText} />

    <ul className="list">
        {
            filtered.map((contact,i)=> <li key={i}>
                <span>{contact.name}</span>
                <span>{contact.phone}</span>
                </li>)
        }
    </ul>


    <p>
        Total contacts: ({filtered.length})
    </p>
    </div>
  );
}

export default List;
