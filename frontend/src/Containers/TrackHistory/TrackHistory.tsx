import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {useAppSelector} from '../../app/hooks';
import {selectUser} from '../../Features/users/UsersSlice';
import {AppDispatch, RootState} from '../../app/store';
import {useDispatch, useSelector} from 'react-redux';
import {getTrackToHistory} from '../../Features/trackHistory/TrackHistoryThunk';
import TrackHistoryCard from '../../Components/TrackHistoryCard/TrackHistoryCard';
import Spinner from '../../Components/UI/Spinner/Spinner';

const TrackHistory = () => {
  const dispatch: AppDispatch = useDispatch();
  const user = useAppSelector(selectUser);
  const trackHistory = useSelector((state: RootState) => state.tracksHistory.trackHistory);
  const loading = useSelector((state: RootState) => state.artists.isLoading);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
    } else {
      dispatch(getTrackToHistory());
    }
  }, [user, dispatch]);

  return (
  <div className="container">
    {loading ? <Spinner/> :
      <>
        {trackHistory.map(trackFromHistory => (
          <TrackHistoryCard key={trackFromHistory._id + 1} trackFromHistory={trackFromHistory}/>
        ))}
      </>
    }
  </div>
)
  ;
};

export default TrackHistory;