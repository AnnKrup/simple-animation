export type Post = {
  id: number;
  title: string;
  body: string;
};

export type ButtonsSlice = {
  buttonSimple: string;
  buttonReanimated: {color: string; index: number};
  buttonStyled: string;
  posts: Post[];
  loading: boolean;
  error: any;
};
