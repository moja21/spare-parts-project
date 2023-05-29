import { Link } from 'react-router-dom';
const Navbar = () => {
  const handleClick = () => {

  }
    return ( 
      <nav className="navbar">
        <h1>Spare Parts Service</h1>
       <div className="links">
        <Link to="/" style={{
          color: "white",
          backgroundColor:"#20419c",
          borderRadius: '8px'
         }}>Home</Link>
        <Link to="/Create"  style={{
          color: "white",
          backgroundColor:"#20419c",
          borderRadius: '8px'
         }}>Create Order</Link>
         <Link to="/Ongoing" style={{
          color: "white",
          backgroundColor:"#20419c",
          borderRadius: '8px'
         }}>Ongoing Orders</Link>
         <Link to="/Account" style={{
          color: "white",
          backgroundColor:"#20419c",
          borderRadius: '8px'
         }}>Account</Link>
       </div>
      </nav>
     );
}
 
export default Navbar;