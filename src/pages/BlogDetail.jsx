import PageLayout from "../components/layout/PageLayout";
import SectionHeading from "../components/common/SectionHeading";
import { RELATED_BLOGS } from "../config/data/blogsData";
import BlogCard from "../components/common/BlogCard";
import { BlogDetailArticle } from "../components/sections/OurBlog/BlogDetailArticle";
import { BlogDetailSidebar } from "../components/sections/OurBlog/BlogDetailSidebar";
import SectionLayout from "../components/layout/SectionLayout";
import Container from "../components/layout/Container";

const BlogDetail = () => {
  return (
    <PageLayout>
      {/* Container wrapper matching Figma (1240px wide) */}
      <SectionLayout className="!overflow-visible">
        <Container className="pt-40">
          {/* Main 2-column layout (Left: 817px content, Right: 393px sidebar, Gap: 30px) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-[30px] w-full">
            {/* LEFT COLUMN: Main Blog Post Content (817px wide on 1240px container) */}
            <div className="lg:col-span-8">
              <BlogDetailArticle />
            </div>

            {/* RIGHT COLUMN: Sidebar Widgets (393px wide on 1240px container) */}
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-28">
                <BlogDetailSidebar />
              </div>
            </div>
          </div>
        </Container>
      </SectionLayout>

      {/* Related Blogs Section divider (w: 1240px) */}
      <div className="max-w-7xl mx-auto h-[1px] bg-slate-200 dark:bg-white/15 my-[100px]"></div>

      {/* RELATED BLOGS BOTTOM SECTION */}
      <SectionLayout>
        <Container>
          {/* Section Title */}
          <div className="max-w-4xl mx-auto text-center mb-10">
            <SectionHeading
              mainText="Related"
              italicText="Blogs"
              align="center"
              italicOnNextLine={false}
              subtitleClass="mx-auto max-w-2xl opacity-80"
            />
          </div>

          {/* 3-column Vertical Related Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full justify-items-center">
            {RELATED_BLOGS.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </Container>
      </SectionLayout>
    </PageLayout>
  );
};

export default BlogDetail;
