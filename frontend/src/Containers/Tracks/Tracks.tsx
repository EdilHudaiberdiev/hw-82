import {AppDispatch, RootState} from '../../app/store';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {getTracksByAlbumId} from '../../Features/tracks/TracksThunk';
import Spinner from '../../Components/UI/Spinner/Spinner';
import TrackCard from '../../Components/TrackCard/TrackCard';

const Tracks = () => {
  const dispatch: AppDispatch = useDispatch();
  const params = new URLSearchParams(document.location.search);
  const tracks = useSelector((state: RootState) => state.tracks.tracks);
  const loading = useSelector((state: RootState) => state.tracks.isLoading);


  useEffect(() => {
    let albumId = params.get('album');

    if (albumId) {
      dispatch(getTracksByAlbumId(albumId));
    }

  }, [dispatch]);

  return (
    <div className="container">
      {loading ? <Spinner/> :
        <>
          {tracks.length === 0 ? <p>No tracks yet</p> :
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 justify-content-around">
              {tracks.map(track => (
                <TrackCard key={track._id} track={track}/>
              ))}
            </div>
          }
        </>
      }
    </div>
  );
};

export default Tracks;