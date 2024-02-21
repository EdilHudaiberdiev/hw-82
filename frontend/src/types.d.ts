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