import  {useEffect} from 'react';
import {AppDispatch} from '../../app/store';
import {useDispatch} from 'react-redux';
import {getAlbumsByArtist} from '../../Features/albums/AlbumsThunk';

const Albums = () => {
  const dispatch: AppDispatch = useDispatch();
  const params = new URLSearchParams(document.location.search);


  useEffect(() => {
    let artistId = params.get('artist');

    if (artistId) {
      dispatch(getAlbumsByArtist(artistId));
    }

  }, [dispatch]);

  return (
    <div>
      
    </div>
  );
};

export default Albums;