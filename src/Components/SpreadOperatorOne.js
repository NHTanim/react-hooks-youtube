import React, { useState } from 'react';

const SpreadOperatorOne = () => {

    const product = [
        {brand: 'Lenovo', country: 'China'},
        {brand: 'HP', country: 'United States'},
        {brand: 'Dell', country: 'United States'}
    ]

    const [laptop, setLaptop] = useState(product);

    const addHandle = () =>{
        setLaptop([...laptop, 
            {brand: 'Apple', country: 'United States'},
            {brand: 'DCL', country: 'BanglaDesh'},
        ]);
    };

    return (
        <div className='mx-10'>
            <div className='mx-40'>
                {
                    laptop.map((allProduct) => {
                        return(
                            <h1>Laptop Brand: {allProduct.brand} &  Country: {allProduct.country}</h1>
                        )
                    })
                }

                <button className='bg-green-500 font-bold text-white rounded py-2 px-4 mt-3'
                 onClick={addHandle}>Add Laptop</button>
            </div>
             {/* ---------------main code end------------------- */}






               
                <br/>
                <br/>
                <br/>
                <div>
                <h1 className='font-bold'>Spread Operator One use : </h1>
                    <br/>
                    <p>Spread Operator এর মাধমে আমরা খুব সহজে array or object কে  অন্য জায়গায়  three dots (...) এর মাধমে  call করতে পারি ।</p>
                    <br/>
                    <p>যদি আমারা আগের array or object এর সাথে নতুন কিছু  add করতে চাই তাহলে  useState এর ভিতরে function এর মধ্যে  three dots আর নতুন array or object add করে দিলেই হবে ।</p>
                    <br/>
                    <p>button এ click করলে State পরিবর্তন হবে and add হয়ে নুতন গুলো দেখাবে । </p>
                
                    <br/>
                    <p className='font-bold'>Youtube link :</p>
                    <a className='text-sky-500 underline underline-offset-8' href="https://www.youtube.com/watch?v=q67xf_F_qwA&t=775s">
                    Handle Array with Three Dots (...) using useState Hook In React</a>
                </div>
                <br/>
                <br/>
                <br/>
                <br /><br /><br />
        </div>
    );
};

export default SpreadOperatorOne;