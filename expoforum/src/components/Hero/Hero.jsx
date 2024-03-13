import React from 'react'
import style from './hero.module.scss'
import About from '../UI/About/About'
const Hero = () => {
    return (
        <div className={style.hero} >
            <div className="wrapper">
                <div className={style.heroContent}>
                    <div className={style.heroDesc}>
                        <div className={style.title}>
                            ЭКСПОФОРУМ
                        </div>
                        <div className="desc">
                            конгрессно-выставочный центр Санкт-Петербурга
                        </div>
                        <About text={"О комплексе"} />
                    </div>
                    <div className={style.cardList}>
                        <div className={style.cardItem}>
                            <div className={style.CardText}>Календарь мероприятий</div>
                            <About text={"Подробнее"} />
                        </div>
                        <div className={style.cardItem}>
                            <div className={style.CardText}>
                                Как добраться до Экспофорума
                            </div>
                            <About text={"Подробнее"} />
                        </div>
                        <div className={style.cardItem}>
                            <div className={style.CardText}>
                                Онлайн-заявка на организацию мероприятия
                            </div>
                            <About text={"Подробнее"} />
                        </div>
                        <div className={style.cardItem}>
                            <div className={style.CardText}>
                                План и инфраструктура комплекса
                            </div>
                            <About text={"Подробнее"} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero