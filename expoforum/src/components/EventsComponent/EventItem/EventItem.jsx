import React from 'react'
import style from './eventItem.module.scss'

const EventItem = (props) => {
  return (
    <a href='/' className={style.EventItem}>
      <div className={style.image} style={
        {
          backgroundImage : `url(${props.item.image})`,
          backgroundSize : "cover",
          backgroundPosition : "center",
          backgroundRepeat : "no-repeat",
          width : "350px",
          height : "240px",
        }
      }>
        
      </div>
      <div className={style.date}>
        {props.item.date}
      </div>
      <div className={style.title}>
        {props.item.title}
      </div>
      <div className={style.desc}>
        {props.item.desc}
      </div>
    </a>
  )
}

export default EventItem