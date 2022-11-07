// Write your JS code here
import './index.css'
import BlogItem from '../BlogItem'

const BlogList = props => {
  const {blogsList} = props

  return (
    <ul className="unorderd-list">
      {blogsList.map(each => (
        <BlogItem details={each} key={each.id} />
      ))}
    </ul>
  )
}

export default BlogList
