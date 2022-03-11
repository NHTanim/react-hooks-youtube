import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const UseHistoryOne = () =>{

    const history = useHistory();

    return (
        <div className='mx-10'>
           <div className='mx-40'>
                <h1 className='font-bold'>This is useHistory Hooks</h1>
                <br/>
                <p>এই  button এ  ক্লিক করলে  UseHistoryTwo এই পেজ এ চলে যাবে </p>
                <br/>
                <button className='bg-green-500 text-white text-sm rounded py-3 px-6 mt-3 ml-3 font-medium'
                onClick={() => history.push('/sixteen')}>
                Go To UseHistory Two page
                </button>
            </div>
             {/* ---------------main code end------------------- */}




            
             <br/> 
            <br/>
            <br/>
            <div>
                <h1 className='font-bold'>useHistory Hook / Page Change hit Button</h1>
                <br/>
                <p>ধরি আমরা একটা পেজ এ আছি আর ওই পেজ এ একটা button আছে ওই  button এ ক্লিক করার পরে পিছনের পেজ এ আসবে অথবা সামনের পেজ এ যাবে বা ওই button অন্য একটা পেজ এর link করা আছে যে এই button ক্লিক করলে এই পেজ এ চলে যাবে এটার জন্য useHistory Hook লাগবে ।</p>

                <br/>
                <p>creat account নামে একটা button আছে এই button ক্লিক করলে অন্য একটা পেজ এ নিয়ে যাবে যেখানে account creat করার জন্য যে from গুলো লাগবে ।</p>
                <br/>

                <p>এখানে /sixteen এই পেজ এ  push করা হয়েছে তাই UseHistoryTwo এই পেজ এ চলে যাবে ।</p>
                <br/>

                <p>এই  button এ  ক্লিক করলে  UseHistoryTwo এই পেজ এ চলে যাবে ।</p>
                
                <br/>
                <br/>
                    <p className='font-bold'>Youtube link :</p>
                    <a href="https://www.youtube.com/watch?v=fREGzpLf1Pw&list=PLwGdqUZWnOp0ningKFp1aslpZkCDAzML8&index=22">
                    useHistory Hook / Page Change hit Button</a>

            </div>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
    )
}

export default UseHistoryOne;