import React from 'react'
import style from './style.module.scss'
const CustomCard = (props) => {
  const { title, img, blog, history } = props;
  const handleView = () => {
    history(`blogDetail/:${blog.id}`, { state: blog })
  }
  return (
    <div className={style.cardCustom} onClick={() => handleView()}>
      <img top width="100%" src={img} alt="Card image cap" />
      <div className={style.cardMain}>
        <div className={style.badge}>
          <span>RHYME</span>
        </div>
        <h2>{title}</h2>
        <h4>{title}</h4>
      </div>
    </div >
  )
}
export default CustomCard