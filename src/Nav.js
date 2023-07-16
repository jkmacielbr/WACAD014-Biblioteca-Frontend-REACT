import React, {Component} from "react";

class Navbar extends Component {
    render() {
        const {menu1, menu2, menu3, menu4,
            subMenu1, subMenu2, subMenu3} = this.props
    
        return (
            <nav class="navbar navbar-expand-lg bg-primary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">{menu1}</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">{menu2}</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">{menu3}</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {menu4}
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">{subMenu1}</a></li>
                                    <li><a class="dropdown-item" href="#">{subMenu2}</a></li>
                                    <li><a class="dropdown-item" href="#">{subMenu3}</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar