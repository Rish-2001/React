import React from 'react'
import PropTypes from 'prop-types'


export default function Navbar(props) {
  return (

    // <nav className={'navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}'}>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>

  <a class="navbar-brand" href="/">{props.title}</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="/">{props.Home} <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/">Link</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        {/* <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="/">Action</a>
          <a class="dropdown-item" href="/">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="/">Something else here</a>
        </div> */}
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="/">Disabled</a>
      </li>
    </ul>
    {/* <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form> */}
    <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark</label>
</div>
  </div>
</nav>
    
  )
}

Navbar.prototype={title:PropTypes.string,
         Home: PropTypes.string

}
Navbar.defaultProps={
    title: 'set title here',
    Home:'Home text here'
};