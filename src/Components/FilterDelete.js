import React, { useState } from 'react';

const FilterDelete = () => {

    const bioData = [
        { id : 1, name: 'Tanim', age: 25},
        { id : 2, name: 'Niloy', age: 26},
        { id : 3, name: 'Meem', age: 27}
    ]

    const [myData, setMyData] = useState(bioData);

    // ------all delete button
    const allDelete = () =>{
       setMyData ([]);
    }

    // ------one remove button
    const removeElement = (id) =>{
        const myNewData = myData.filter((allData) =>{
            return allData.id !== id;
        })
        setMyData(myNewData)
    }
    return (
        <div className='mx-10'>
            <div className='mx-40'>
                {
                    myData.map((allData =>{
                        return(
                            <h1 className='text-xl'>
                                Name: {allData.name} &
                                Age: {allData.age}
                                <button className='bg-red-500 text-white text-sm rounded py-1 px-2 mt-3 ml-3'
                                 onClick={() => removeElement(allData.id)}>Remove</button>
                            </h1>
                        )
                    }))
                }

                <button className='bg-green-500 font-bold text-white rounded py-2 px-4 mt-3'
                onClick={allDelete}>All Clear</button>
            </div>
             {/* ---------------main code end------------------- */}






                <br/>
                <br/>
                <br/>
                <div>
                    <h1 className='font-bold'>Filter Delete Map useState use :</h1>
                    <br/>
                    <p className='font-bold'>Youtube link :</p>
                    <a className='text-sky-500 underline underline-offset-8' href="https://www.youtube.com/watch?v=oKZYa_DCVMs&list=PLwGdqUZWnOp0ningKFp1aslpZkCDAzML8&index=6">
                    React Hook Challenge #2: Create a Basic TODO List</a>
                </div>
                <br /><br /><br /><br />
        </div>
       
    );
};

export default FilterDelete;