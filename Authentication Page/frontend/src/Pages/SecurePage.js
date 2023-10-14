import React, { useEffect } from 'react'
import axios from 'axios';
import '../secure.css'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const SecurePage = () => {

const history = useHistory();

const logOut = () => {
  localStorage.removeItem('userInfo');
  history.push("/");

}
    
  return (
    <div>
      <button className="button button5" onClick={logOut}>
        Log Out
      </button>
      <h1
        style={{
          color: "blue",
          fontSize: "100px",
          fontFamily: "bold",
          // backgroundColor: "pink",
          textAlign: "center",
          margin: "8rem",
          boxSizing: "border-box",
        }}
      >
        <h1
          style={{
            color: "blue",
            fontSize: "100px",
            fontFamily: "bold",
            // backgroundColor: "pink",
            textAlign: "center",
            margin: "4rem",
            boxSizing: "border-box",
          }}
        >Welcome User !</h1>
        Secured Page Accessed
      </h1>
    </div>
  );
}

export default SecurePage
