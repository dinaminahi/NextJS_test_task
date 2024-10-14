export type BlogType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
export type BlogCommentType = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};
