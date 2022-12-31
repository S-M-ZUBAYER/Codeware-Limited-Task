import React from 'react';

const SimpleButtonClickEvent = () => {
    let count = 0;
    const handleToBang = (e) => {
        count++;
        console.log(count)

        count % 3 === 0 ?
            e.target.innerText = "Bang" :
            e.target.innerText = "Click me";

        count % 3 === 0 ?
            e.target.style.background = "red" :
            e.target.style.background = "";
    }
    return (
        <div>
            <h1 className="text-2xl font-bold">
                5. Simple Button Click Event
            </h1>
            <button onClick={(e) => handleToBang(e)} className="btn btn-outline btn-success bg-green-900 my-20">Click me</button>
        </div>
    );
};

export default SimpleButtonClickEvent;