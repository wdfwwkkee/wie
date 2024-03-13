import React from 'react'
import style from './event.module.scss'
import AllSmth from '../UI/AllSmth/AllSmth'
import EventList from './EventList/EventList'

const Event = (props) => {
  return (
    <div className={style.Event}>
        <div className="wrapper">
            <div className="EventContent">
                <div className={style.EventHeader}>
                    <div className={style.title}>
                    Текущие и будущие мероприятия
                    </div>
                    <AllSmth text={"Все мероприятия"} />
                </div>
                <EventList items={props.items} />
            </div>
        </div>
    </div>
  )
}

export default Event