import React, { useState } from 'react';

const UseStateOne = () => {

const [name, setName] = useState('Nazmul Hossain')

const changeName = () => {
    setName('Tanim');
}
    return (
        <div className='mx-10'>
        {/* -------------------main code start---------------- */}
            <div className='mx-40'>
                <h1 className='font-bold'>{name}</h1>
                <button className='bg-green-500 font-bold text-white rounded py-2 px-4 mt-3'
                 onClick={changeName}>Change</button>
            </div>
    {/* ---------------main code end------------------- */}







            <br/> 
            <br/>
            <br/>
            <div>
                <h1 className='font-bold'>useState State change :</h1>
                <br/>
                <p>project এ  state chnage করার জন্য useState করা হয় ।  state chnage বলতে  page এর এক জায়গা থকে অন্য জায়গায় যাওয়া বুজায় । যেমন যদি কোন  button e click করি তাহলে অন্য  page যাব এটা  useState এর state chnage এর জন্য হয়েছে । মানে কোন state chnage হলেই টা useState এর জন্য হয়েছে ।</p>

                <br/>
                <p>const [initialValue, function] useState( ) ;</p>

                <br/>
                <p>1:- initialValue : যে Value সেট করা থাকে ।</p>
                <p>2:- function : যেটা return হবে ।</p>
                <p>3:- ( ) : initial value চাইলে সেট করা যাবে অথবা খালি ও রাখা যাবে ।</p>

                <br/>
                <p>ex : const [name, setName] useState( ) ;</p>

                <br/>
                <p className='text-xl'>button এ click করলে state এর পরিবর্তন হবে যেটা initial name আছে এটা change হয়ে setname চলে আসবে ।</p>
                
                <br/>
                    <p className='font-bold'>Youtube link :</p>
                    <a className='text-sky-500 underline underline-offset-8' href="https://www.youtube.com/watch?v=CABs284dEpQ&list=PLwGdqUZWnOp0ningKFp1aslpZkCDAzML8&index=1">
                    When & Why to use useState() Hook in React</a>
                <br/>
                <br/>

            </div>
            <br/>
            <br/>
            <br /><br /><br />





        </div>
    );
};

export default UseStateOne;