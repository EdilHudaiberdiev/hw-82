import {NavLink} from 'react-router-dom';
import {useAppSelector} from '../../../app/hooks';
import {selectUser} from '../../../Features/users/UsersSlice';
import AnonymousMenu from './AnonymousMenu';
import UserMenu from './UserMenu';

const Toolbar = () => {
  const user = useAppSelector(selectUser);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

      <div className="container">
        <NavLink to='/' className="navbar-brand d-flex ">
          <p className="me-2 mb-0">Spotify</p>
        </NavLink>
        я
        <div>
          {user ? (
            <UserMenu user={user}/>
          ) : (
            <AnonymousMenu/>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Toolbar;