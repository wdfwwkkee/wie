import React from 'react'
import NewsItem from '../NewsItem/NewsItem'
const NewsList = (props) => {
  console.log(props.item)
  return (
    <div>
      {props.item.map(item=> (
        <NewsItem key={item.id} item={item} />
      ))}
    </div>
  )
}

export default NewsList