import React from 'react'
import Table from './Table'
import Navbar from './Nav'
import Card from './Card'



class App extends React.Component {
    render() {
      return (
        
        <div className="container text-center">
          
          <Navbar/>
          <br/>
          <h1>STORE DAY!</h1>
          <br></br>
          <Card/>
          {/* <Table /> */}
         
        </div>
      )
    }
  }
  
  export default App