// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {details} = props
  const {title, description, publishedDate} = details
  return (
    <li className="blog-item-container">
      <div className="blog-item-top-section">
        <h1 className="blog-title">{title}</h1>
        <p className="published">{publishedDate}</p>
      </div>
      <p className="blog-des">{description}</p>
    </li>
  )
}

export default BlogItem
