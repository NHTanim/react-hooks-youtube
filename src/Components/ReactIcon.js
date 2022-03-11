import React from 'react';
import { FcApproval } from "react-icons/fc";

const ReactIcon = () => {
    return (
        <div className='mx-10'>
            <div className='mx-40'>
                <h1 className='font-bold'>React Icons</h1>
                <p>This is React Icon <FcApproval/></p>
            </div>
  {/* ----------------main code end ------------------- */}

            <br/> 
            <br/>
            <br/>
            <div>
                <h1 className='font-bold'>React Icon Use</h1>
                <br/>
                <p className='font-bold'>React Icon website Link :</p>
                <a className='text-sky-500 underline underline-offset-8' href="https://react-icons.github.io/react-icons">
                React ICON Package Click Here</a>

                <br/>
                <br/>
                <p>website এ গিয়ে  react-icons install করতে হবে । </p>
                <p>npm install react-icons</p>

                <br/>
                <p>যে  icon category use হবে  ওইটাতে  click করে  link ওপরে input করতে হবে </p>
                <p>ex : import {  } from "react-icons/fa";</p>
                <p> যে খানে use হবে ওই খানে closing tag এর মধ্যে বশালেই হবে </p>

                <br/>

                <br/>
                <p className='text-xl'></p>
                
                <br/>
                    <p className='font-bold'>Youtube link :</p>
                    <a className='text-sky-500 underline underline-offset-8' href="https://www.youtube.com/watch?v=uXwRSTyp30I&list=PLwGdqUZWnOp0ningKFp1aslpZkCDAzML8&index=17">
                    React ICON Package</a>
                <br/>
                <br/>

            </div>
            <br/>
            <br/>
            <br /><br /><br />

        </div>
    );
};

export default ReactIcon;