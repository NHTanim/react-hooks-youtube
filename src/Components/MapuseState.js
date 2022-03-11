import React, { useState } from 'react';

const MapuseState = () => {

    const bioData = [
        {id: 0, name:'Tanim', age: 26},
        {id: 1, name:'Niloy', age: 27},
        {id: 2, name: 'Meem', age: 28}
    ]

    const [myData, setMyData] =  useState(bioData)

    const deleteArray = () =>{
        setMyData([]);
    }

    return (
        <div className='mx-10'>
            <div className='mx-40'>
                {
                    myData.map(allData =>{
                        return(
                            <h1 className='text-xl' >Name: {allData.name} & Age: {allData.age}</h1>
                        )
                    })
                }
                <button className='bg-green-500 font-bold text-white rounded py-2 px-4 mt-3'
                 onClick={deleteArray}>Delete</button>
            </div>
          {/* ---------------main code end------------------- */}






                <br/>
                <br/>
                <br/>
                <div>
                    <h1 className='font-bold'>Map useState use :</h1>
                    <br/>
                    <p> এখানে button এ  click করার পরে setdata empty করে দেয়া হয়েছে যার জন্য এটি delete   হয়ে যাবে । </p>
                    <br/>
                    <p>এখানে  map এর মাধ্যমে  object data  কে  call করা হয়েছে আর    useState এর মাধ্যমে   button এ   click করা হলে এটা remove হয়ে যাবে ।</p>
                    <br/>
                    <p>আমরা যদি   button এর  মাধ্যমে   কিছু  remove করতে  চাই  তাহলে  useState ব্যাবহার করতে হবে । </p>
                
                    <br/>
                    <p className='font-bold'>Youtube link :</p>
                    <a className='text-sky-500 underline underline-offset-8' href="https://www.youtube.com/watch?v=MQ7H4TpgXsQ&list=PLwGdqUZWnOp0ningKFp1aslpZkCDAzML8&index=4">
                    work with Array using UseState</a>
                </div>
                <br/>
                <br/>
                <br/>
                <br /><br /><br />
        </div>
    );
};

export default MapuseState;