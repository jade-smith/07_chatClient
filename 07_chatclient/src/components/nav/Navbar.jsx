
const Navbar = ({token, clearToken}) =>{

  return(
    <nav>
      <header style={{justifyContent: "left"}}>Brand</header> 
      {!token
      ?
      null
      :
      <Link onClick={clearToken} style={{justifyContent: "right"}} to='/auth'>Logout</Link> 
      }
    </nav>
  )
}

export default Navbar;