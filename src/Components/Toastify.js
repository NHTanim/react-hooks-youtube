import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Toastify = () => {

    const TostAlert = () =>{
        toast.success("LogIn Successfully", {
            position:"top-center"
        })
    }

    return (
        <>
            <div className='mx-40'>
                <h1 className='font-bold'>React Toastify :</h1>
                <br/>
                <br/>

                <h1>Welcome to SignIn Page</h1>
                <br/>
                <br/>
                <button
                onClick={TostAlert}
                className='bg-green-500 text-white text-sm rounded py-3 px-6 mt-3 ml-3 font-extrabold'>
                Login
                </button>
            </div>
            <br/>
            <br/>
            {/* ---------- */}
            <ToastContainer />


            {/* ----------------main code end ------------------- */}

            <br/> 
            <br/>
            <br/>
            <div className='mx-40'>
                <h1 className='font-bold'>React Toastify :</h1>
                <br/>
                <p >এটা javascript alert system এর মত কাজ করে । </p>
                <br/>
                <p >Toastify use করার জন্য প্রথমে Toastify package install করতে হবে Toastify import & Toastify css file include করতে হবে </p>
                <br/>
                <p className='font-bold'>Toastify website link:</p>
                <a className='text-sky-500 underline underline-offset-8' href="https://www.npmjs.com/package/react-toastify">
                React Toastify website here</a>

                <br/>
                <br/>
                <p className='font-bold'>Toastify github link:</p>
                <a className='text-sky-500 underline underline-offset-8' href="https://fkhadra.github.io/react-toastify/introduction">
                React Toastify github here</a>

                <br/>
                <br/>
                <br/>
                
                <br/>
                    <p className='font-bold'>Youtube link :</p>
                    <a className='text-sky-500 underline underline-offset-8' href="https://www.youtube.com/watch?v=k70cqeQGrHQ&list=PLwGdqUZWnOp0ningKFp1aslpZkCDAzML8&index=23">
                    React-Toastify</a>
                <br/>
                <br/>

            </div>
            <br/>
            <br/>
            <br /><br /><br />

        </>
    );
};

export default Toastify;