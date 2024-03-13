import React from 'react'
import style from "./newsItem.module.scss"

const NewsItem = ({item}) => {
  return (
    <div className={style.item} >
        <div className={style.image} style={
            {
                backgroundImage : `url(${item.image})`,
            }
        } >

        </div>
        <div className={style.info}>
            <div className={style.date}>
            {item.date}
            </div>
            <div className={style.title}>
            {item.title}
            </div>
        </div>
    </div>
  )
}

export default NewsItem