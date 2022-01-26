export interface Album {
  id: number;
  title: string;
  userId: number;
}

export interface Photo {
  albumId: number;
  id: number;
  thumbnailUrl: string;
  title: string;
  url: string;
}
