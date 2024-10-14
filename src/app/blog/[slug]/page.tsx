import { BlogDetailedPage } from "@/components/BlogDetailedPage/BlogDetailedPage";
import { getBlogCommentsData, getBlogData } from "@/utils";

type BlogPageProps = {
  params: {
    slug: string;
  };
};

export default async function BlogPage({ params }: BlogPageProps) {
  const blogStaticData = await getBlogData(params.slug);
  const blogCommentsStaticData = await getBlogCommentsData(params.slug);

  return (
    <BlogDetailedPage
      blogDetails={blogStaticData}
      blogComments={blogCommentsStaticData}
    />
  );
}
