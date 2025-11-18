import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import './Blog.scss';

function Blog() {
  return (
    <div className="blog-page">
      <section className="blog-header">
        <h1>Blog</h1>
        <p>Thoughts on software development, cybersecurity, and technology</p>
      </section>

      <section className="blog-content">
        <div className="blog-posts">
          {blogPosts.map((post) => (
            <article key={post.id} className="blog-post-preview">
              <div className="post-meta">
                <span className="post-category">{post.category}</span>
                <span className="post-date">{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                <span className="post-read-time">{post.readTime}</span>
              </div>

              <h2>
                <Link to={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>

              <p className="post-excerpt">{post.excerpt}</p>

              <div className="post-tags">
                {post.tags.map((tag, index) => (
                  <span key={index} className="tag">{tag}</span>
                ))}
              </div>

              <Link to={`/blog/${post.slug}`} className="read-more">
                Read Article →
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Blog;
