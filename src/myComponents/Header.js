import React from 'react'
// import PropTypes from 'prop-types'
// import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";


export default function Header(props) {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <anchor className="navbar-brand" to="/">{props.title}</anchor>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <anchor className="nav-link active" aria-current="page" to="/">Home</anchor>
                        </li>
                        <li className="nav-item">
                            <anchor className="nav-link" to="/about">About</anchor>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

// Header.PropTypes = {
//     title: PropTypes.string
// };

Header.defaultProps = {
    title: "title is here"
};