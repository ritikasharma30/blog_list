import React, { useEffect, useState } from 'react'
import { ApiCall } from '../components/common/Api/ApiCall'
import 'regenerator-runtime/runtime'
const useBlogList = () => {
  const [blogs, setBlogs] = useState([])
  const [page, setPage] = useState(1)
  
  async function fetchApi() {
    try {
      const resp = await ApiCall('get',  `photos?_page=${page}&_limit=12`);
      setBlogs([...blogs, ...resp.data])
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    fetchApi()
  }, [page])

  const fetchData = () => {
    setPage(page + 1)
  }

  return {
    blogs,
    setBlogs,
    setPage,
    page,
    fetchData
  }
}

export default useBlogList