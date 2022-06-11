import React, { Fragment, useEffect, useState } from 'react';

const TodoList = () => {
    const [addItem, setAddItem] = useState("");
    const [arrayData, setArrayData] = useState([]);

    const handleChange = (event) => {
        setAddItem(event.target.value);
    }

    useEffect(() => {
    }, [arrayData]);

    const handleSubmit = () => {
        if (isNaN(addItem)) {
            setArrayData([...arrayData, addItem]);
        } else {
            alert("Numbers are not allowed")
        }
    }

    return (
        <>
            <div className="todo__list__wrapper">
                <div className="heading">List Creator</div>
                <div className="add__input__box">
                    <div className="input__wrapper">
                        <input placeholder="Enter item names" onChange={handleChange} />
                    </div>
                    <div className="input__button" onClick={handleSubmit}>+</div>
                </div>

                <div className="list__item__wrapper">
                    <ul>
                        {arrayData.map((item, index) => {
                            return (
                                <Fragment key={index}>
                                    <li> {index + 1} {item}</li>
                                </Fragment>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default TodoList;