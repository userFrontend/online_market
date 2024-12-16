import BlogCardBig from "../../components/Cards/BlogCardBig/BlogCardBig";

import "./Blogs.scss"

const Blogs = () => {
  return (
    <main>
      <section className="blogs">
        <div className="container blogs__container">
          <BlogCardBig />
          <BlogCardBig type={true} />
          <BlogCardBig />
          <BlogCardBig type={true} />
        </div>
      </section>
    </main>
  );
};

export default Blogs;
