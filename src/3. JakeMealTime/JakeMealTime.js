import React from 'react';

const JakeMealTime = () => {

    const timeToEat = (currentTime) => {

        let timeInHour = currentTime.split(':')[0];

        let timeInMin = currentTime.split(':')[1].split(' ')[0];
        if (currentTime.split(':')[1].split(' ')[1] === 'p.m.') {
            timeInHour = timeInHour * 1 + 12;
        }
        currentTime = 60 * timeInHour + timeInMin * 1;
        const allMealTime = [420, 720, 1140];
        let DurationForNextMeal;
        if (currentTime <= allMealTime[0]) {
            DurationForNextMeal = allMealTime[0] - currentTime;
        }
        else if (currentTime <= allMealTime[1]) {
            DurationForNextMeal = allMealTime[1] - currentTime;
        }
        else if (currentTime <= allMealTime[2]) {
            DurationForNextMeal = allMealTime[2] - currentTime;
        }
        else {
            DurationForNextMeal = allMealTime[0] + 1440 - currentTime;
        }
        const min = (DurationForNextMeal * 1) % 60
        const hour = Math.floor((DurationForNextMeal * 1) / 60)//60
        const durationUntilMeal = [hour, min];
        console.log(durationUntilMeal)
        return durationUntilMeal;

    }


    const handleSubmit = (event) => {
        event.preventDefault();
        const time = event.target.time.value;
        const duration = timeToEat(time);
        const meal = document.getElementById('nextMeal');
        meal.value = `[${duration}]`
        console.log(duration)
    }

    return (
        <div>
            <h1 className="text-2xl font-bold my-10">
                3. Jake's Meal Time
            </h1>
            <div className="lg:mx-48 p-5 rounded-lg border-8 text-slate-700 bg-slate-100 shadow-2xl my-12">
                <h3 className="text-2xl font-semibold text-cyan-600 text-left">
                    Put your current Time to get the duration for next meal....
                </h3>
                <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-3 mt-10'>
                    <input name="time" type="text" placeholder="Enter Current Time" className="input w-full input-bordered" />
                    <input className='btn btn-accent w-full ' type="submit" value="Press To got duration" />
                    <h3 className="text-2xl font-semibold text-amber-400 text-left">
                        Duration for next meal [Hour, Minute]
                    </h3>
                    <input name="duration" type="Textarea" id='nextMeal' placeholder="Duration" className="input  w-full input-bordered" />

                </form>
            </div>
        </div>
    );
};

export default JakeMealTime;



