import React from "react";
import { Stack, Typography } from "@mui/material";
import styles from "./BlogDetailedPage.module.scss";
import { BlogCommentList } from "./components/BlogCommentList/BlogCommentList";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Link from "next/link";
import { BlogCommentType, BlogType } from "@/types/BlogType";

type BlogDetailedPageProps = {
  blogDetails: BlogType;
  blogComments: BlogCommentType[];
};

export const BlogDetailedPage: React.FC<BlogDetailedPageProps> = ({
  blogDetails,
  blogComments,
}) => {
  return (
    <Stack gap="40px" className={styles.blogDetailsPage}>
      <Link href="/" className={styles.backButtonWrapper}>
        <Typography color="textPrimary" className={styles.backButton}>
          <ArrowBackIcon />
          Back to blogs
        </Typography>
      </Link>

      <Stack gap="12px">
        <Typography className={styles.blogTitle} variant="h4">
          {blogDetails.title}
        </Typography>
        <Typography className={styles.blogDescription} variant="body1">
          {blogDetails.body}
        </Typography>
      </Stack>

      <Stack gap="12px">
        <Typography className={styles.commentsTitle} variant="h4">
          Comments:
        </Typography>
        <BlogCommentList blogComments={blogComments} />
      </Stack>
    </Stack>
  );
};
