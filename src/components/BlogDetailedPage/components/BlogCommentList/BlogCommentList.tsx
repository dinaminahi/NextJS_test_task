import { Stack } from "@mui/material";
import React from "react";
import { BlogCommentItem } from "../BlogCommentItem/BlogCommentItem";
import { BlogCommentType } from "@/types/BlogType";

type BlogCommentListProps = {
  blogComments: BlogCommentType[];
};

export const BlogCommentList: React.FC<BlogCommentListProps> = ({
  blogComments,
}) => {
  return (
    <Stack gap="12px">
      {blogComments.map((comment: any) => (
        <BlogCommentItem key={comment.id} comment={comment} />
      ))}
    </Stack>
  );
};
