import React from 'react';
import {NavLink} from 'react-router-dom';
import {apiUrl} from '../../constants';
import NoArtistImage from '../../../public/artist-none-image.png';
import {CardMedia, styled} from '@mui/material';
import {IArtist} from '../../types';

const ImageCardMedia = styled(CardMedia)({
  width: '100px',
  height: "100px",
  margin: "20px",
  borderRadius: "50%"
});

interface Props {
  artist: IArtist;
}

const ArtistCard: React.FC<Props> = ({artist}) => {
  return (
    <NavLink to={`albums?artist=${artist._id}`} className="col d-block border mb-2 rounded-4 text-black text-decoration-none">
      <div className="d-flex justify-content-between align-items-center">
        <ImageCardMedia
          image={artist.image ? apiUrl + artist.image : NoArtistImage} title={artist._id}/>
        <h5 className="w-50">{artist.title}</h5>
      </div>
    </NavLink>
  );
};

export default ArtistCard;