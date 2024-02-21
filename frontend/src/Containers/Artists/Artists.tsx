import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../app/store';
import {getArtists} from '../../Features/artists/ArtistsThunk';
import Spinner from '../../Components/UI/Spinner/Spinner';
import ArtistCard from '../../Components/ArtistCard/ArtistCard';


const Artists = () => {
  const dispatch: AppDispatch = useDispatch();
  const artists = useSelector((state: RootState) => state.artists.artists);
  const loading = useSelector((state: RootState) => state.artists.isLoading);

  useEffect(() => {
    dispatch(getArtists());
  }, [dispatch]);



  return (
    <div>
      {loading ? <Spinner/> :
        <>
          {artists.length === 0 ? <p>No artists yet</p> :
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 justify-content-around">
              {artists.map(artist => (
               <ArtistCard key={artist._id} artist={artist}/>
              ))}
            </div>
          }
        </>
      }
    </div>
  );
};

export default Artists;