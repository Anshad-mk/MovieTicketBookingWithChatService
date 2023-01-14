import React,{useState} from "react";
import styles from "./navbar.module.css"
import { Button, Modal } from 'antd'
import Login from "../../pages/LoginPage/LoginPage";
function NavBar(){
   const [modal1Open, setModal1Open] = useState(false);
  
  
return(
<div className={styles.Navbar}>
      <Modal
        title=""
        centered
        open={modal1Open}
        onOk={() => setModal1Open(false)}
        onCancel={() => setModal1Open(false)}
      >
        
<Login />


        
      </Modal>
   <div className={styles.logo}> <h2>Stream<i>+</i></h2></div>
<div className={styles.Links}>
<h2 className={styles.Link}>Home</h2>
<h2 className={styles.Link}>Movies</h2>
<h2 className={styles.Link}>Coming Soon</h2>    
<h2 className={styles.Link}>City</h2>
<button className="btn btn-primary Link" type="primary" onClick={() => setModal1Open(true)} >sign in</button>
 </div>

</div>
)


}

export default NavBar
