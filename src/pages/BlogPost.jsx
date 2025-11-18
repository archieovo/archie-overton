import { useParams, Link, Navigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { blogPosts } from '../data/blogPosts';
import './BlogPost.scss';

function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="blog-post-page">
      <article className="blog-post-full">
        <Link to="/blog" className="back-link">← Back to Blog</Link>

        <header className="post-header">
          <div className="post-meta">
            <span className="post-category">{post.category}</span>
            <span className="post-date">
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </span>
            <span className="post-read-time">{post.readTime}</span>
          </div>



          <div className="post-tags">
            {post.tags.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))}
          </div>
        </header>

        <div className="post-content">
            <h1>{post.title}</h1>
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>

        <footer className="post-footer">
          <Link to="/blog" className="back-link-bottom">← Back to All Articles</Link>
        </footer>
      </article>
    </div>
  );
}

export default BlogPost;
