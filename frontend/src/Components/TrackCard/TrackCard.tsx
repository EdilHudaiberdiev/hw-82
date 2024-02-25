import React from 'react';
import {ITrack} from '../../types';
import playerPic from '../../assets/player-pic.jpg';
import {AppDispatch} from '../../app/store';
import {useDispatch} from 'react-redux';
import {postTrackToHistoryById} from '../../Features/trackHistory/TrackHistoryThunk';
import {useAppSelector} from '../../app/hooks';
import {selectUser} from '../../Features/users/UsersSlice';

interface Props {
  track: ITrack;
  onClick: (id: string) => void;
}

const TrackCard: React.FC<Props> = ({track}) => {

  const dispatch: AppDispatch = useDispatch();
  const user = useAppSelector(selectUser);
  const clickHandler = async (id: string) => {

    if (user) {
      try {
        await dispatch(postTrackToHistoryById(id))
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="col mb-2" onClick={() => clickHandler(track._id)}>
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