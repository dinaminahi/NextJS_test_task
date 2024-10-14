import BlogList from "@/components/BlogList/BlogList";
import { BlogType } from "@/types/BlogType";
import { getBlogListData } from "@/utils";

export default async function Main() {
  const blogsStaticData: BlogType[] = await getBlogListData();
  return <BlogList blogs={blogsStaticData} />;
}
