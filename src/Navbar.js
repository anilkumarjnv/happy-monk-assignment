import React,{useState} from 'react'
import './NavbarStyle.css'

function Navbar(props) {
        const [selectedItem, setSelectedItem] = useState(null);
      
        const handleItemClick = (itemIndex) => {
          setSelectedItem(itemIndex);
        };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light">
  <a className="navbar-brand" href="#" style={{ color: "white" }}>
    {" "}
    {props.websiteName}
  </a>
  <button
    className="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse">
    <ul className="navbar nav mr-auto navigation">
      <li className={`navigation-item ${selectedItem === 0 ? 'selected' : ''}`} onClick={() => handleItemClick(0)}>
        <a className="nav-link" href="#" style={{ color: selectedItem === 0 ? 'black' : 'white' }}>
          <i className="material-symbols-outlined" style={{ color: selectedItem === 0 ? 'black' : 'white' }}>star</i>
        </a>
      </li>
      <span className="separator">|</span>
      <li className={`navigation-item ${selectedItem === 1 ? 'selected' : ''}`} onClick={() => handleItemClick(1)}>
        <a className="nav-link" href="#" style={{ color: selectedItem === 1 ? 'black' : 'white' }}>
          <i className="material-symbols-outlined" style={{ color: selectedItem === 1 ? 'black' : 'white' }}>group</i>
          <span>Workspace Visible</span>{" "}
        </a>
      </li>
      <span className="separator">|</span>
      <li className={`navigation-item ${selectedItem === 2 ? 'selected' : ''}`} onClick={() => handleItemClick(2)}>
        <a className="nav-link" href="#" style={{ color: selectedItem === 2 ? 'black' : 'white' }}>
          <i className="material-symbols-outlined" style={{ color: selectedItem === 2 ? 'black' : 'white' }}>leaderboard</i>
          <span>Board</span>{" "}
        </a>
      </li>
    </ul>
    <ul className="navbar nav my-lg-0 navigation">
      <li className={`navigation-item ${selectedItem === 3 ? 'selected' : ''}`} onClick={() => handleItemClick(3)}>
        <a className="nav-link" href="#" style={{ color: selectedItem === 3 ? 'black' : 'white' }}>
          <i className="material-symbols-outlined" style={{ color: selectedItem === 3 ? 'black' : 'white' }}>rocket_launch</i>
          <span>Power-Ups</span>
        </a>
      </li>
      <li className={`navigation-item ${selectedItem === 4 ? 'selected' : ''}`} onClick={() => handleItemClick(4)}>
        <a className="nav-link" href="#" style={{ color: selectedItem === 4 ? 'black' : 'white' }}>
          <i className="material-symbols-outlined" style={{ color: selectedItem === 4 ? 'black' : 'white' }}>bolt</i>
          <span>Automation</span>
        </a>
      </li>
      <span className="separator">|</span>
      <li className={`navigation-item ${selectedItem === 5 ? 'selected' : ''}`} onClick={() => handleItemClick(5)}>
        <a className="nav-link" href="#" style={{ color: selectedItem === 5 ? 'black' : 'white' }}>
          <i className="material-symbols-outlined" style={{ color: selectedItem === 5 ? 'black' : 'white' }}>filter_list</i>
          <span>Filter</span>
        </a>
      </li>
      <span className="separator">|</span>
      <li className={`navigation-item ${selectedItem === 6 ? 'selected' : ''}`} onClick={() => handleItemClick(6)}>
        <a className="nav-link" href="#" style={{ color: selectedItem === 6 ? 'black' : 'white' }}>
          <i className="material-symbols-outlined" style={{ color: selectedItem === 6 ? 'black' : 'white' }}>group_add</i>
          <span>Share</span>
        </a>
      </li>
      <span className="separator">|</span>
      <li className={`navigation-item ${selectedItem === 7 ? 'selected' : ''}`} onClick={() => handleItemClick(7)}>
        <a className="nav-link" href="#" style={{ color: selectedItem === 7 ? 'black' : 'white' }}>
          <i className="material-symbols-outlined" style={{ color: selectedItem === 7 ? 'black' : 'white' }}>more_horiz</i>
        </a>
      </li>
    </ul>
  </div>
</nav>

    </div>
  )
}

export default Navbar;
