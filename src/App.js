import React from 'react'
import Table from './Table'
import Navbar from './Nav'
import Card from './Card'
import logo1 from './utils/logo1.png';
import logo2 from './utils/logo2.png';
import logo3 from './utils/logo3.jpeg';
import logo4 from './utils/logo4.png';
import logo5 from './utils/logo5.png';
import logo6 from './utils/logo6.png';





class App extends React.Component {
  render() {
    return (
      <div className="container text-center">

        <Navbar menu1="Store" menu2="Login" menu3="Singnup" menu4="Produtos"
          subMenu1="Cadastrar" subMenu2="Editar" subMenu3="Deletar"
        />



        <br />
        <h1>STORE DAY!</h1>

        <br></br>
        <div className="row">
          <div className="col-md-4">
            <Card logo={logo1} title="Camisa 1 CR FLAMENGO 23/24" price="R$349,75" />
          </div>
          <div className="col-md-4">
            <Card logo={logo2} title="Camisa 3 FLAMENGO" price="R$390,00" />
          </div>
          <div className="col-md-4">
            <Card logo={logo3} title="Camisa 1 CR FLAMENGO 22/23" price="R$230,00" />
          </div>
          <div className="col-md-4">
            <Card logo={logo4} title="Camisa FLAMENGO II 23/24" price="R$284,00" />
          </div>
          <div className="col-md-4">
            <Card logo={logo5} title="Camisa FLAMENGO 23" price="R$184,00" />
          </div>
          <div className="col-md-4">
            <Card logo={logo5} title="Camisa FLAMENGO Retro" price="R$205,00" />
          </div>

        </div>
      </div>

    );
  }
}

export default App