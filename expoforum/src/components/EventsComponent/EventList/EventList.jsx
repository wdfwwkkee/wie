import React from 'react'
import EventItem from '../EventItem/EventItem'
import style from "./eventList.module.scss"
const EventList = ({items}) => {
  return (
    <div className={style.List} >
        {items.map((item => (
            <EventItem item={item} />
        ) ))}
    </div>
  )
}

export default EventList