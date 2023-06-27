import React, { Component, useState ,useEffect,userdata} from 'react'

function HookExample() {
    const [userData, setUserData] = useState(null);

    useEffect( () => {
        if(null == userData){
            setUserData('Ramesh');

      }
    } )

  
    return (
      <div>
        <h1>HookExample</h1>
        <h3>{userdata}</h3>
        <div>
            <label>User Name : </label>
            <input type='text' onChange={ (event) =>{
                setUserData(event.target.value)
            }} />
            </div>
        </div>
    )
  
}

export default HookExample