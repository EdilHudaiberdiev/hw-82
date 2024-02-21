import React from 'react';
import {ITrack} from '../../types';
import playerPic from '../../assets/player-pic.jpg';

interface Props {
  track: ITrack;
}

const TrackCard: React.FC<Props> = ({track}) => {
  return (
    <div className="col mb-2">
      <div className="d-flex align-items-center border border-black mb-2 rounded-4 text-black text-decoration-none p-3">
        <div className="text-start">
          <h5>#{track.number} -  {track.title}</h5>
          <img className="block w-100 opacity-50" src={playerPic} alt={track._id}/>
          <p className="opacity-75 text-end mb-0">Duration: {track.duration}</p>
        </div>
      </div>
    </div>
  );
};

export default TrackCard;