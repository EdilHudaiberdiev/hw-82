import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {useAppSelector} from '../../app/hooks';
import {selectUser} from '../../Features/users/UsersSlice';
import {AppDispatch} from '../../app/store';
import {useDispatch} from 'react-redux';
import {getTrackToHistory} from '../../Features/trackHistory/TrackHistoryThunk';

const TrackHistory = () => {

  const dispatch: AppDispatch = useDispatch();
  const user = useAppSelector(selectUser);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
    } else {
      dispatch(getTrackToHistory());
    }
  }, [user, dispatch]);

  return (
    <div>
      future
    </div>
  );
};

export default TrackHistory;