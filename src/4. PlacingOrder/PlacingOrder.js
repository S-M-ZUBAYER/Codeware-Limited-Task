import React from 'react';

const PlacingOrder = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        const product = event.target.name.value;
        const quantity = event.target.quantity.value;
        const phone = event.target.phone.value;
        const placementOrder = {
            OrderItems: {
                quantity,
                product
            },
            phone
        }

        fetch(`https://simple-node-server-nine.vercel.app/order/${phone}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(placementOrder)
        })
            .then(res => res.json())
            .then(result => {
                // toast.success(`product added successfully`)
                // setLoading(false)
                // navigate('/dashboard/myProducts')
                console.log('placement completed')
            })

    }


    return (
        <div className='my-12'>
            <h1 className="text-2xl font-bold my-5">
                4. Placing Order
            </h1>
            <div className="lg:mx-48 p-5 rounded-lg border-8 text-slate-700 bg-slate-100 shadow-2xl">
                <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-3 mt-10'>
                    <input name="name" type="text" placeholder="Enter order name" className="input w-full input-bordered" />
                    <input name="quantity" type="number" placeholder="Please Enter order quantity" className="input w-full input-bordered" />
                    <input name="phone" type="number" placeholder="Enter Your phone number" className="input w-full input-bordered" />
                    <input className='btn btn-accent w-full ' type="submit" value="Add Product" />
                </form>
            </div>
        </div>
    );
};

export default PlacingOrder;