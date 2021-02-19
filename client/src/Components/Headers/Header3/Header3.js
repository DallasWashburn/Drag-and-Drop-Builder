import React, { Component } from "react"
import "./Header3.css"

class Header3 extends Component {
    render() {
        return (
            <>
                <div class="header4 d-flex pt-3 header4-bg">
                    <div className="mr-auto p-2 ">
                        <p className="">+1-555-555-5555</p>
                    </div>
                    <div className="p-2">
                        <i className="fab fa-google-plus-g"></i>
                    </div>
                    <div className="p-2">
                        <i className="fab fa-twitter"></i>
                    </div>
                    <div className="p-2 mr-2">
                        <i className="fab fa-facebook-f"></i>
                    </div>
                </div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light header4">
                    <a className="navbar-brand" href="#">
                        <img src="../logo.png" width="250" height="60" className="d-inline-block align-top"
                            alt="" loading="lazy" />

                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Stories</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Company</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact</a>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input></input>
                            <a className="btn  my-2 my-sm-0" type="submit"><i className="fas fa-search fa-1x"></i>
                            </a>
                            <i className="fas fa-bars fa-2x ml-3"></i>


                        </form>
                    </div>
                </nav>
            </>
        )
    }
}


export default Header3