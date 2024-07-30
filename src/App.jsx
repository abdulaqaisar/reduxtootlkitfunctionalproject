import { useState } from "react";
import { Counter } from "./Components/Counter";
import Counter2 from "./Components/Counter2";
import { useSelector} from 'react-redux';
import { Phone } from "./redux/Slices/CounterSlice";

function App() {
  const name = useSelector((state) => state.counter.name);  
  const email = useSelector((state) => state.counter.email);  
  const phone = useSelector((state) => state.counter.phone);  
  return (
    <>
    <h3 style={{ border:"2px solid gray", padding:"20px", width:"30%" , marginLeft:"30px"  }}>User Details <br /><br />Name: {name} <br /> Email: {email} <br /> Phone: {phone}</h3>
      <div style={{ display:"flex",justifyContent:"space-between" , width:"100%" , height:"100vh" }}>
         <Counter/>
         <Counter2/>
      </div>
    </>
  );
}

export default App;
