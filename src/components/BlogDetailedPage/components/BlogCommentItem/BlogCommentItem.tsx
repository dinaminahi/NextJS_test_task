import React from "react";
import { BlogCommentType } from "@/types/BlogType";
import { Card, CardContent, Stack, Typography } from "@mui/material";

type BlogCommentItemProps = {
  comment: BlogCommentType;
};

export const BlogCommentItem: React.FC<BlogCommentItemProps> = ({
  comment,
}) => {
  return (
    <Card variant="outlined">
      <CardContent>
        <Stack gap="8px" className="userItem">
          <Typography>By {comment.email}</Typography>
          <Typography>{comment.body}</Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};
