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
