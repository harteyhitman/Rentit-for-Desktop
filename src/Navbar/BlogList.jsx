import React from 'react'
import Button from '../components/Button'

const BlogList = () => {

    const ClickBlogList = () => {
    console.log("Button clicked!");
  };

  return (
    <div>
        <Button onClick={ClickBlogList} className="bloglist" label="Blog Listings"/>
    </div>
  )
}

export default BlogList