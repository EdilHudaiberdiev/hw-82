import {NavLink} from 'react-router-dom';

const Toolbar = () => {

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

      <div className="container">
        <NavLink to='/' className="navbar-brand d-flex ">
          <p className="me-2 mb-0">Spotify</p>
        </NavLink>
      </div>
    </nav>
  );
};

export default Toolbar;