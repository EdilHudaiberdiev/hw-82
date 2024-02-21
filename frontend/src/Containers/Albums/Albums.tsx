import {useEffect} from 'react';
import {AppDispatch, RootState} from '../../app/store';
import {useDispatch, useSelector} from 'react-redux';
import {getAlbumsByArtist} from '../../Features/albums/AlbumsThunk';
import Spinner from '../../Components/UI/Spinner/Spinner';
import AlbumCard from '../../Components/AlbumCard/AlbumCard';
import {getArtistById} from '../../Features/artists/ArtistsThunk';

const Albums = () => {
  const dispatch: AppDispatch = useDispatch();
  const params = new URLSearchParams(document.location.search);
  const albums = useSelector((state: RootState) => state.albums.albums);
  const artistOfAlbum = useSelector((state: RootState) => state.artists.artist);
  const albumsLoading = useSelector((state: RootState) => state.albums.isLoading);
  const artistLoading = useSelector((state: RootState) => state.artists.isLoading);


  useEffect(() => {
    let artistId = params.get('artist');

    if (artistId) {
      dispatch(getAlbumsByArtist(artistId));
      dispatch(getArtistById(artistId));
    }

  }, [dispatch]);

  return (
    <div className="container">
      {albumsLoading && artistLoading  ? <Spinner/> :
        <div>
          <h1 className="mb-2">Artist: {artistOfAlbum ? artistOfAlbum.title : "Not found"}</h1>
          <hr/>
          {albums.length === 0 ? <p>No albums yet</p> :
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 justify-content-around">
              {albums.map(album => (
                <AlbumCard key={album._id} album={album}/>
              ))}
            </div>
          }
        </div>
      }
    </div>
  );
};

export default Albums;