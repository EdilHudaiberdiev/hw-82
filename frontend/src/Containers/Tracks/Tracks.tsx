import {AppDispatch, RootState} from '../../app/store';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {getTracksByAlbumId} from '../../Features/tracks/TracksThunk';
import Spinner from '../../Components/UI/Spinner/Spinner';
import TrackCard from '../../Components/TrackCard/TrackCard';
import {getAlbumsById} from '../../Features/albums/AlbumsThunk';
import {getArtistById} from '../../Features/artists/ArtistsThunk';
import {postTrackToHistoryById} from '../../Features/trackHistory/TrackHistoryThunk';

const Tracks = () => {
  const dispatch: AppDispatch = useDispatch();
  const params = new URLSearchParams(document.location.search);
  let albumId = params.get('album');
  let artistId = params.get('artist');

  const tracks = useSelector((state: RootState) => state.tracks.tracks);
  const tracksLoading = useSelector((state: RootState) => state.tracks.isLoading);

  const artistOfAlbum = useSelector((state: RootState) => state.artists.artist);
  const infoOfAlbum = useSelector((state: RootState) => state.albums.album);
  const albumsLoading = useSelector((state: RootState) => state.albums.isLoading);
  const artistLoading = useSelector((state: RootState) => state.artists.isLoading);


  useEffect(() => {
    if (albumId && artistId) {
      dispatch(getArtistById(artistId));
      dispatch(getTracksByAlbumId(albumId));
      dispatch(getAlbumsById(albumId));
    }

  }, [dispatch, albumId, artistId]);

  const clickHandler = async (id: string) => {
    try {
      await dispatch(postTrackToHistoryById(id))
      console.log(id)

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      {tracksLoading && artistLoading && albumsLoading ? <Spinner/> :
        <div>
          <h1 className="mb-2">Artist: {artistOfAlbum ? artistOfAlbum.title : "Not found"}</h1>
          <h3 className="opacity-75 mb-3">Album: {infoOfAlbum ? infoOfAlbum.title : "Not found"}</h3>
          <hr/>
          {tracks.length === 0 ? <p>No tracks yet</p> :
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 justify-content-around">
              {tracks.map(track => (
                  <TrackCard key={track._id +1} track={track} onClick={clickHandler}/>
              ))}
            </div>
          }
        </div>
      }
    </div>
  );
};

export default Tracks;