import React, { useState } from 'react';

const UseStateTwo = () => {

    const [name, setName] = useState('Nazmul Hossain')

    const changeName = () =>{
        const exChangeName = name;
        (exChangeName === 'Nazmul Hossain') ?
        setName('Tanim') : setName('Nazmul Hossain');
    }

    return (
        <div className='mx-10'>
            <div className='mx-40'>
                <h1 className='font-bold'>{name}</h1>
                <button className='bg-green-500 font-bold text-white rounded py-2 px-4 mt-3'
                 onClick={changeName}>Click</button>
            </div>
   {/* ----------------main code end ------------------- */}



            <br/>
            <br/>
            <br/>
            <div>
            <h1 className='font-bold'>useState State change Two :</h1>
                <br/>
                <p className=''>এটা like button এর মত একবার click করলে state change হবে আবার  click করলে state change হয়ে আগের জায়গায় চলে আসবে ।</p>

                <br/>
                <br/>
                <p className='text-xl'>Main Code এ  if else এর  short rules comment করে দেয়া আছে ।</p>
                <br/>

                <p>?  ----- এটা if </p>
                <p>:  ----- এটা else </p>



                {/* ---------------if else rules-----------

                const changeName = () =>{
                    const name = myName;
                    if(name === 'Nazmul Hossain'){
                        setName('Tanim')
                    } else {
                        setName ('Nazmul Hossain')
                    }
                }

                ---------------if else short rules-----------

                const changeName = () =>{
                    const name = myName;
                    (name === 'Nazmul Hossain') ?
                    setName ('Tanim') : setName ('Nazmul Hossain');
                } */}




                <br/>
                    <p className='font-bold'>Youtube link :</p>
                    <a className='text-sky-500 underline underline-offset-8' href="https://www.youtube.com/watch?v=9z1RKfbRuO8&list=PLwGdqUZWnOp0ningKFp1aslpZkCDAzML8&index=2">
                    How to Toggle the Data onClick using Hook </a>
            </div>
            <br/>
            <br/>
            <br /><br /><br />


        </div>
    );
};

export default UseStateTwo;