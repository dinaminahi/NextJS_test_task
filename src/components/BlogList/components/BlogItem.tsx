import React from "react";
import { Card, CardContent, Stack, Typography } from "@mui/material";
import styles from "./BlogItem.module.scss";
import Link from "next/link";
import { BlogType } from "@/types/BlogType";

type BlogItemProps = {
  blog: BlogType;
};

const MAX_TEXT_LENGTH = 70;

const BlogItem: React.FC<BlogItemProps> = ({ blog }) => {
  return (
    <Link className={styles.blogItem} href={`/blog/${blog.id}`}>
      <Card>
        <CardContent>
          <Stack gap="8px">
            <Typography variant="h6" className={styles.blogTitle}>
              {blog.title}
            </Typography>
            <Typography variant="body1" className={styles.blogDescription}>
              {blog.body.slice(0, MAX_TEXT_LENGTH)}
              {blog.body.length > MAX_TEXT_LENGTH && "..."}
            </Typography>
          </Stack>
        </CardContent>
      </Card>
    </Link>
  );
};

export default BlogItem;
