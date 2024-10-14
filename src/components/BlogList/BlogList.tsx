"use client";
import React from "react";
import { Stack, Typography } from "@mui/material";
import BlogItem from "./components/BlogItem";
import { BlogType } from "@/types/BlogType";

type BlogListProps = {
  blogs: BlogType[];
};

const BlogList: React.FC<BlogListProps> = ({ blogs }) => {
  return (
    <Stack gap="20px">
      <Typography variant="h3" textAlign="center">
        Blogs
      </Typography>
      {blogs.map((blog: any) => (
        <BlogItem key={blog.id} blog={blog} />
      ))}
    </Stack>
  );
};

export default BlogList;
