import React, { Component } from "react";
import logo1 from './utils/logo1.png'
import logo2 from './utils/logo2.png'
import logo3 from './utils/logo3.jpeg'
import logo4 from './utils/logo4.png'
import logo5 from './utils/logo5.png'
import logo6 from './utils/logo6.png'

class Card extends Component {
  render() {
    return (
      <div class="row row-cols-1 row-cols-md-3 g-6">
        <div class="col">
  <div class="card h-100">
    <svg
      class="bd-placeholder-img card-img-top"
      width="100%"
      height="140"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Placeholder: Image cap"
      preserveAspectRatio="xMidYMid slice"
      focusable="false"
    >
      <title>Placeholder</title>
      
      <image href={logo1} width="100%" height="100%" />
      
    </svg>
    <div class="card-body">
      <h5 class="card-title">Camisa 1 CR FLAMENGO 23/24</h5>
      <a href="#" class="btn btn-primary">R$349,75</a>
    </div>
  </div>
</div>

        <div class="col">
          <div class="card h-100">
            <svg
              class="bd-placeholder-img card-img-top"
              width="100%"
              height="140"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: Image cap"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>Placeholder</title>
              <image href={logo2} width="100%" height="100%" />
            </svg>
            <div class="card-body">
              <h5 class="card-title">Camisa 3 FLAMENGO </h5>
              <a href="#" class="btn btn-primary">R$390,00</a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <svg
              class="bd-placeholder-img card-img-top"
              width="100%"
              height="140"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: Image cap"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>Placeholder</title>
              <image href={logo3} width="100%" height="100%" />
            </svg>
            <div class="card-body">
              <h5 class="card-title">Camisa 1 CR FLAMENGO 22</h5>
              <a href="#" class="btn btn-primary">R$230,00</a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <svg
              class="bd-placeholder-img card-img-top"
              width="100%"
              height="140"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: Image cap"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>Placeholder</title>
              <image href={logo4} width="100%" height="100%" />
            </svg>
            <div class="card-body">
              <h5 class="card-title">Camisa FLAMENGO II 23/24</h5>
              <a href="#" class="btn btn-primary">R$284,00</a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <svg
              class="bd-placeholder-img card-img-top"
              width="100%"
              height="140"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: Image cap"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>Placeholder</title>
              <image href={logo5} width="100%" height="100%" />
            </svg>
            <div class="card-body">
              <h5 class="card-title">Camisa Flamengo 23</h5>
              <a href="#" class="btn btn-primary">R$184,00</a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <svg
              class="bd-placeholder-img card-img-top"
              width="100%"
              height="140"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: Image cap"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>Placeholder</title>
              <image href={logo6} width="100%" height="100%" />
            </svg>
            <div class="card-body">
              <h5 class="card-title">Camisa FLAMENGO Retro</h5>
              <a href="#" class="btn btn-primary">R$205,90</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Card