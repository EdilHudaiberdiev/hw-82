import {useEffect} from 'react';
import {AppDispatch, RootState} from '../../app/store';
import {useDispatch, useSelector} from 'react-redux';
import {getAlbumsByArtist} from '../../Features/albums/AlbumsThunk';
import Spinner from '../../Components/UI/Spinner/Spinner';
import AlbumCard from '../../Components/AlbumCard/AlbumCard';

const Albums = () => {
  const dispatch: AppDispatch = useDispatch();
  const params = new URLSearchParams(document.location.search);
  const albums = useSelector((state: RootState) => state.albums.albums);
  const loading = useSelector((state: RootState) => state.albums.isLoading);


  useEffect(() => {
    let artistId = params.get('artist');

    if (artistId) {
      dispatch(getAlbumsByArtist(artistId));
    }

  }, [dispatch]);

  return (
    <div className="container">
      {loading ? <Spinner/> :
        <>
          {albums.length === 0 ? <p>No albums yet</p> :
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 justify-content-around">
              {albums.map(album => (
                <AlbumCard key={album._id} album={album}/>
              ))}
            </div>
          }
        </>
      }
    </div>
  );
};

export default Albums;