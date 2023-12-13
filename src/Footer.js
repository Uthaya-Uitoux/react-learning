import React from 'react'

const Footer = ({length}) => {
    //const year= new Date();
  return (
    //<footer>Copyright &copy; {year.getFullYear()}
    //</footer>
    <footer>{length} Line {length ===1 ? "item":"Items"}</footer>
    //<footer>{length} Line ITEMS</footer> - To get the length and data in order 
  )
}

export default Footer