import React, { useState } from 'react';

const TodoList = () => {
    const [addItem, setAddItem] = useState("");
    let toDoList = [];

    const handleChange = (event) => {
        setAddItem(event.target.value);
    }

    const handleSubmit = () => {
        toDoList.push(addItem);
        console.log(toDoList)
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
                        {toDoList.map((item) => {
                            <li> 1. {item}</li>
                        })}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default TodoList;