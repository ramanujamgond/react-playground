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
            setAddItem("");
        } else {
            alert("Numbers are not allowed")
        }
    }

    const deleteItem = (e) => {
        const name = e.target.getAttribute("name")
        setArrayData(arrayData.filter(item => item.item !== item))
        console.log(item)
    }

    return (
        <>
            <div className="todo__list__wrapper">
                <div className="heading">List Creator</div>
                <div className="add__input__box">
                    <div className="input__wrapper">
                        <input placeholder="Enter item names" value={addItem} onChange={handleChange} />
                    </div>
                    <div className="input__button" onClick={handleSubmit}>+</div>
                </div>

                <div className="list__item__wrapper">
                    <ul>
                        {arrayData.map((item, index) => {
                            return (
                                <Fragment key={index}>
                                    <span className="item__list__wrapper mt-3">
                                        <li> {index + 1} {item}</li>
                                        <span><i className='bi bi-trash me-2' onClick={deleteItem}></i></span>
                                    </span>
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