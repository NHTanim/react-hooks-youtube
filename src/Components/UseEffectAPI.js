import React, { useEffect, useState } from 'react';

const UseEffectAPI = () => {

    const [user, setUser] = useState ([]);

    const getUsers = async () =>{

        const response = await fetch ('https://jsonplaceholder.typicode.com/photos');
        setUser (await response.json());
        //----------error check----------
        // try{
        //     const response = await fetch ('https://jsonplaceholder.typicode.com/photos');
        //     setUser (await response.json());
        // } catch (error) {
        //     console.log('My error is'  + error);
        // }
    }

    useEffect (() =>{
            getUsers();
    }, []);


    return (
        <div className='mx-10'>
            <div>
                <h1 className='font-bold'>Data fetching with API</h1>
                <div className='
                flex items-center justify-center flex-col'>

                {
                    user.map((allData) => {
                        return(
                            <div className='bg-slate-300 py-4 px-4 m-9'>
                                <h1 className='text-zinc-900 font-bold'>Nazmul Hossain Tanim</h1>
                                <p className='text-zinc-900'>{allData.title}</p>
                                <br/>
                                <img className='h-20 w-20 m-auto' src= {allData.thumbnailUrl} alt="" />
                            </div>
                        )
                    })
                }

                </div>
            </div>

            {/* ---------------main code end------------------- */}




            
            <br/> 
            <br/>
            <br/>
            <div>
                <h1 className='font-bold'>Get Github Users Data using useEffect Hook with Fetch API :</h1>
                <br/>
                <p>এখানে API থেকে ডাঁটা call করা হয়েছে । </p>

                <br/>
                <br/>
                
                <br/>
                    <p>Error Handling, Loading Error Handling, Loading এই  problem গুলোর  সমাধান করা হয়েছে কি ভাবে error solve করা যায় কি  error হয়েছে  তা বের করা যায়  ।</p>
                    <p className='font-bold'>Youtube link :</p>
                    <a href="https://www.youtube.com/watch?v=dm1qy5BcaJ0&list=PLwGdqUZWnOp0ningKFp1aslpZkCDAzML8&index=15">
                    Code-Refactor and Adding Error Handling, Loading</a>

                <br/>
                
                <br/>
                    <p className='font-bold'>Youtube link :</p>
                    <a className='text-sky-500 underline underline-offset-8' href="https://www.youtube.com/watch?v=tB0OT9sfSug&list=PLwGdqUZWnOp0ningKFp1aslpZkCDAzML8&index=14">
                    Get Github Users Data using useEffect Hook with Fetch API</a>

            </div>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
    );
};

export default UseEffectAPI;