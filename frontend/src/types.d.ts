export interface IArtist {
  _id: string;
  title: string;
  description: string;
  image: string;
}

export interface IAlbum {
  _id: string;
  artist: IArtist;
  title: string;
  release: string;
  image: string;
}


export interface ITrack {
  _id: string;
  album: string;
  title: string;
  duration: string;
  number: number;
}

export interface RegisterMutation {
  username: string;
  password: string;
}

export interface User {
  _id: string;
  username: string;
  token: string;
}

export interface RegisterResponse {
  user: User;
  message: string;
}

export interface ValidationError {
  errors: {
    [key: string]: {
      name: string;
      message: string;
    }
  },
  message: string;
  name: string;
  _message: string;
}

export interface LoginMutation {
  username: string;
  password: string;
}

export interface GlobalError {
  error: string;
}

export interface ITrackHistory{
  id: string;
  user: User;
  datetime: string;
  track: ITrack;
}