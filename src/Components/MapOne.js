import React from 'react';

const MapOne = () => {

    const bioData = [
        {id: 0, name: 'Tanim', age: 26},
        {id: 1, name: 'Niloy', age: 27},
        {id: 2, name: 'Meem', age: 28}
    ]
    return (
        <div className='mx-10'>
            <div className='mx-40'>
                {
                    bioData.map((allData) =>{
                        return(
                            <h1 className='text-xl'>Name: {allData.name} & Age: {allData.age}</h1>
                        )
                    })
                }
            </div>
   {/* ---------------main code end------------------- */}






                <br/>
                <br/>
                <br/>
                <div>
                    <h1 className='font-bold'>Map use :</h1>
                    <br/>
                    <p>map use করে অনেক গুলো object/array কে এক বার call করে display করানো যায় ।</p>
                    <br/>
                    <p>যদি আমরা array এর ভিতরে data রাখি বা server থেকে  data load করি  তাহলে আমরা একবার jsx এর ভিতরে call করলেই সব গুলো data display হবে ।</p>
                    <br/>
                    <p>back end থেকে data আনার জন্য আমরা  map use করি ।</p>

                    <br/>
                    <p className='font-bold'>Youtube link :</p>
                    <a className='text-sky-500 underline underline-offset-8' href="https://www.youtube.com/watch?v=GP3yAqyMRZw&list=PLwGdqUZWnOp0ningKFp1aslpZkCDAzML8&index=3">
                    React Hooks Rules</a>
                </div>
                <br/>
                <br/>
                <br /><br /><br />
        </div>
    );
};

export default MapOne;