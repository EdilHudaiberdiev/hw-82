import {ITrackHistory} from '../../types';
import React from 'react';
import playerPic from '../../assets/player-pic.jpg';
import dayjs from 'dayjs';

interface Props {
  trackFromHistory: ITrackHistory;
}

const TrackHistoryCard: React.FC<Props> = ({trackFromHistory}) => {
  return (
    <div className="col mb-2 mx-auto cursor-card" style={{width: '300px'}}>
      <div className="d-flex align-items-center border border-black mb-2 rounded-4 text-black text-decoration-none p-3">
        <div className="text-start">
          <img className="block w-100 opacity-50" src={playerPic} alt={trackFromHistory.track._id}/>
          <div>
            <p className="opacity-75 text-end mb-0">Track: {trackFromHistory.track.album.title}</p>
            <p className="opacity-75 text-end mb-0">Singer: {trackFromHistory.track.album.artist.title}</p>
            <p className="opacity-75 text-end mb-0">Date: {dayjs(trackFromHistory.datetime).format('YYYY-MM-DD HH:mm:ss')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackHistoryCard;