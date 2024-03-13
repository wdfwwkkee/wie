import React from 'react'
import style from './footerList.module.scss'

const FooterList = (props) => {
  return (
    <div className={style.item}>
        <div className={style.title}>{props.title}</div>
        <div className={style.list}>
            <div className={style.listItem}><a href="/">О нашей компании</a></div>
            <div className={style.listItem}><a href="/">О нашей компании</a></div>
            <div className={style.listItem}><a href="/">О нашей компании</a></div>
            <div className={style.listItem}><a href="/">О нашей компании</a></div>
        </div>
    </div>
  )
}

export default FooterList