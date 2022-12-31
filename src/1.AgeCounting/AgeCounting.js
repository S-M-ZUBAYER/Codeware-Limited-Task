import React, { useEffect, useState } from 'react';

const AgeCounting = () => {
    const [allAges, setAllAges] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/ages')
            .then(res => res.json())
            .then(data => {
                setAllAges(data);

            });

    }, [])
    const ageKey = allAges[0]?.data;
    const ageKeyInString = ageKey + '';
    const age30Key = ageKeyInString.split(',');
    const keyWithAge30 = [];


    for (let i = 0; i < age30Key.length; i++) {
        if (age30Key[i].includes("=30")) {
            keyWithAge30.push((age30Key[i - 1]).split('='))
        };
    }

    return (
        <div>
            <h1 className="text-2xl font-bold mt-10">
                1. Age counting
            </h1>
            <h3 className="text-xl font-semibold text-lime-900 text-left lg:ml-48 my-5">
                Available keys in array where age's value is equal to 30:-
            </h3>
            {
                keyWithAge30.map(element => <div key={element} className="my-3 font-semibold text-lg">

                    {element}

                </div>
                )
            }
        </div>
    );
};

export default AgeCounting;