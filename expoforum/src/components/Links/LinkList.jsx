import React from 'react'
import LinkItem from './LinkItem';

const LinkList = (props) => {
    const style = props.style;
    return (
        <div>
            <div className={style.List}>
                <div className={style.title}>
                    {props.title}
                </div>
                <div className={style.listItems}>
                    <div className="listItem">
                        <LinkItem text={"Документы организаторам"} />
                    </div>
                    <div className="listItem">
                        <LinkItem text={"Услуги организаторам"} />
                    </div>
                    <div className="listItem">
                        <LinkItem text={"Выставочные площади"} />
                    </div>
                    <div className="listItem">
                        <LinkItem text={"Рестораны и кафе"} />
                    </div>
                    <div className="listItem">
                        <LinkItem text={"Конгресс-центр"} />
                    </div>
                    <div className="listItem">
                        <LinkItem text={"Спорт-центр"} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LinkList