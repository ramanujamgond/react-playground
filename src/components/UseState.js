import React, { useState } from 'react';

const UseState = () => {
    const [initial, setInitial] = useState(0);
    const [userName, setUserName] = useState("");
    return (
        <>
            <button onClick={() => setInitial(initial + 1)}>{initial}</button>
            <div>{userName}</div>
            <input type="text" value={userName} placeholder="Enter your name" onChange={(u) => setUserName(u.target.value)} />
        </>
    )
}

export default UseState;