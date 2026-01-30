import {useState} from "react";

const Newsletter= () => {
      const[email,setEmail]=useState("");
  return(
    <section>
      <form class="newsletter">
        <label >Newsletter</label>
            <input type="email" 
            placeholder="Enter Your Email"
            id="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)} />
       
      </form>
        <button   onClick={() => alert(email)} className1="OK">OK</button>
  
    </section>
    );
};

export default Newsletter;