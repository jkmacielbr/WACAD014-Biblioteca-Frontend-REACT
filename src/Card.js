import React, { Component } from "react";
import logo1 from './utils/logo1.png'
import logo2 from './utils/logo2.png'
import logo3 from './utils/logo3.jpeg'
import logo4 from './utils/logo4.png'
import logo5 from './utils/logo5.png'
import logo6 from './utils/logo6.png'

class Card extends Component {
  render() {
    const {logo, title, price} = this.props;
    return (
      <div className="row row-cols-1 row-cols-md-3 g-6">
        <div className="col">
          <div className="card h-100">
            <svg
              className="bd-placeholder-img card-img-top"
              width="100%"
              height="140"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: Image cap"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>Placeholder</title>

              <image href={logo} width="100%" height="100%" />

            </svg>
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <a href="#" class="btn btn-primary">{price}</a>
            </div>
          </div>
        </div>
        </div>
       
    )
    }
    }
  

export default Card;