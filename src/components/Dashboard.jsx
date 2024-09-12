import React, { useEffect, useRef,useState} from 'react';
import useLogout from '../hooks/UseLogout';


function Dashboard() {
 const logout = useLogout()

  const [userName,setUserName]=useState("")

  useEffect(()=>{
    let userName = sessionStorage.getItem("userName")
    if(userName)
    {
      setUserName(userName)
    }
  },[])


  return (
    <>
     
     <div className="sign " id='sign' style={{paddingBottom:"180px"}} >
      <div className='wel'>
       WELCOME
    </div>
    <br/>
      <br/>
      <br/>
      <div style={{ position:'absolute', marginTop:"300px" }}>
  <span className="fast-flicker"></span><span  className="flicker">{userName}</span>
  <br />
  </div>
  
  <button id='log' style={{ position:'absolute', marginTop:"500px" }}>
  <span onClick={logout} >LOGOUT</span>
</button>



  
</div>


   
</>
  );
}

export default Dashboard;