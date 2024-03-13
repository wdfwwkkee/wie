import React from 'react'
import style from "./news.module.scss"
import AllSmth from '../UI/AllSmth/AllSmth'
import NewsList from './NewsList/NewsList'
const News = (props) => {
  return (
    <div className={style.news}>
      <div className="wrapper">
        <div className={style.newsContent}>
          <div className={style.add}>
            <div className={style.addItem} style={{
              backgroundImage : "url('https://s3-alpha-sig.figma.com/img/69cb/613d/3f93deecad4b83d720d79469c6db63cf?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AWGJs7g6GJP4FcAECPzx5H9nFvLGdMWzWv~JQnB4uZciR10Mu550wnbTP96onRB~CUFMCDRAPIm8PsAENvN6brmUjeHKbUeM-60wwrtqvgFB1VLUo8RKPUcfOKlPrWqoIE2YHmKKStQ1Et7r01T3Gyual5758dTCjqZvSmpoTZqbmnXlKGP-k1CIbd4G6Yysa-NnrWth9JO~bSR6zyJurVxisQwyZ4ZmhdQDoZOdmX0FEMfHYZfzlaGq9MUey4LA~1O~4lYEry-zH1~j4NqHgj-rkQETNO7Ekv9Scu9oe1amT3ESt3aCh3NoaZjSZoCdlw~6B69Mz2XSCfU1UwsYgQ__')",
              width : "450px",
              backgroundSize : "cover",
              height : "220px",
            }}>
              
            </div>
            <div className={style.addItem} style={{
              backgroundImage : "url('https://s3-alpha-sig.figma.com/img/8d15/9d16/82f979696753cc327c0640be5a025859?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TTtDmULrQD0s3fKqZ5bFXcXXqermXc1ykH7-JdPsHJ-utjF7xNRmlyE5OThsBipKvjTOPndmOQm1IjvnS-G~wGLVSpRcr1OK6EShekLL3ke3QolqPTzhwMiyJhgTyhWY954r9AgwKw7ptqHmJJ6lsv6UMdKgH5-hw34X1izppUmoyD7Py3I4n0OMcY3WbsH9wCHUCBToUMT6JxsZKx4aattu7Vt55ktZ2-CDI4XfF-YggH2XEpVQsISc0Xuq8vpVtQWJbGRL0YkX5PHreKIQRjSqKbksyegzPBV2Q8czfmUSqYKoOAueeAUUpkSRfK1Fh0bbdRI0LvD4dIyj4IGOxg__')",
              width : "450px",
              backgroundSize : "cover",
              height : "220px",
            }}>
              
            </div>
          </div>
          <div className="newsList">
              <div className={style.header}>
                <div className={style.title}>
                Новости
                </div>
                <AllSmth text={"Все новости"} />
              </div>
              <NewsList item={props.items} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default News