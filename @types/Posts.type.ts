export interface Posts {
  $id: string;
  title: string;
  thumbnail: string;
  video: string;
  creator: PostCreator;
}

export interface PostCreator {
  username: string;
  avatar: string;
}

export interface FileMedia {
  mimeType?: string;
  name?: string;
  size?: number;
  uri?: string;
}
