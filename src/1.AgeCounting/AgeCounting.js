import React, { useEffect, useState } from 'react';

const AgeCounting = () => {
    const [age, setAge] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/ages')
            .then(res => res.json())
            .then(data => {
                setAge(data);
                console.log(data);
            });

    }, [])

    return (
        <div>

            <p>{age}</p>
        </div>
    );
};

export default AgeCounting;