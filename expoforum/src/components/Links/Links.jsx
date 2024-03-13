import React from 'react'
import style from './Links.module.scss'
import LinkList from './LinkList'

const Links = () => {
  return (
    <div className={style.links}>
        <div className="wrapper">
            <div className={style.linksContent}>
                <LinkList style={style} title={"Организаторам"} />
                <LinkList style={style} title={"Экспонентам "} />
                <LinkList style={style} title={"Посетителям"} />
                <LinkList style={style} title={"Прессе"} />
            </div>
        </div>
    </div>
  )
}

export default Links