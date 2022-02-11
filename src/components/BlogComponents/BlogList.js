import React from 'react'
import CustomNavbar from '../common/Navbar/CustomNavbar'
import { Container, Row } from 'reactstrap';
import CustomCard from '../common/card/CustomCard';
import useBlogList from '../../hooks/useBlogList';
import { useNavigate } from "react-router-dom";
import InfiniteScroll from 'react-infinite-scroll-component';

const BlogList = () => {
  const history = useNavigate();
  const { blogs, fetchData } = useBlogList()
  return (
    <>
      <CustomNavbar title="Blog List" />
      <Container className='marginTop30'>
        <InfiniteScroll
          dataLength={blogs.length}
          next={fetchData}
          hasMore={true}
          loader={<div className='flex justifyCenter'><h4>Loading...</h4></div>}
          endMessage={
            <p className='textAlignCenter'>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <Row id="card-list" className='justifyCenter'>
            {blogs && blogs?.map((blog) => {
              return <CustomCard title={blog.title} img={blog.thumbnailUrl} blog={blog} history={history} key={blog.id} />
            })}

          </Row>
        </InfiniteScroll>

      </Container>
    </>
  )
}
export default BlogList