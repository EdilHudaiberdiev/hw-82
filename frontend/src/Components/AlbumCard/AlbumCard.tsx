import React from 'react';
import {NavLink} from 'react-router-dom';
import {apiUrl} from '../../constants';
import NoAlbumImage from '../../assets/plate.png';
import {CardMedia, styled} from '@mui/material';
import {IAlbum} from '../../types';

const ImageCardMedia = styled(CardMedia)({
  width: '100px',
  height: "100px",
  margin: "20px",
  borderRadius: "50%"
});

interface Props {
  album: IAlbum;
}

const AlbumCard: React.FC<Props> = ({album}) => {
  return (
    <div className="col">
      <NavLink to={`tracks?album=${album._id}&artist=${album.artist._id}`} className="d-block border mb-2 rounded-4 text-black text-decoration-none">
        <div className="d-flex align-items-center">
          <ImageCardMedia
            image={album.image ? apiUrl + album.image : NoAlbumImage} title={album._id}/>
          <div className="text-start">
            <h5>{album.title}</h5>
            <p className="opacity-50">Release: {album.release}</p>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default AlbumCard;