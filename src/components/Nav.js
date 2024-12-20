import React from 'react';

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{backgroundColor: '#836446'}} data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="http://localhost:3000/homepage">Gallery</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="http://localhost:3000/homepage">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="http://localhost:3000/profile">Profile</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
