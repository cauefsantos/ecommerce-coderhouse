import '../styles/styles.css'

import CartWidget from "./CartWidget"

const NavBar = () => {
    return (
        <header>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand">CoderComputers</a>
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Computadores</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Periféricos</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Contato</a>
                        </li>
                    </ul>
                    <CartWidget class="cart"/>
                </div>
            </nav>
        </header>
    )
}

export default NavBar
