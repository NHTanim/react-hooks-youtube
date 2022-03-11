import React, { useContext } from 'react';
import noteContext from '../Contex/notes/noteContext';

const UseContextTwo = () => {

    const Two = useContext(noteContext)

    return (
        <div className='mx-40'>
            <h1 className='font-bold'>OutPut</h1>
            <h1 className='font-semibold'>My Name is {Two.name}</h1>
            <h1 className='font-semibold'>University {Two.vrcty}</h1>

             {/* ---------------main code end------------------- */}


             <br/>
                <br/>
                <br/>
                <div>
                    <h1 className='font-bold'>useContext :</h1>
                    <br/>
                    <p>React's use context hook makes it easy to pass data throughout your app without manually passing props down the tree.</p>
                    <br/>
                    <p>useContex এর মাধ্যমে যখন যার ইচ্ছা সে ওই comnent এর data সহজে receive করতে পারবে ।</p>
                    <br/>
                    <p>useContex এর জন্য একটা note আর একটা contextState create করতে হবে । আর একটা state বানাইতে হবে যাতে ওইটা সবাই যে কোন component চাইলেই access করতে পারে । আর notecontext কে contextState এর সাথে link আর props করাতে হবে ।</p>

                    <br/>
                    <p>এখানে Contex নামে একটা folder নেয়া হয়েছে তার ভিতরে ২টি  file এই  file থেকে যখন যার ইচ্ছা data access করতে পারবে ।
</p>


                    <br/>
                    <p>আমরা যদি এক component থেকে অন্য component এ  data pass করি  তার পরে আবার ওই component থেকে অন্য component data pass করি ।</p>


                    <br/>
                    <p>মানে  tree আকারে যদি চিন্তা করি যে সবার নিচের component এ data pass করবো তাহলে  main component থেকে সবার নিচের component এ data সরাসরি pass করার জন্য useContext use করে সহজে করা যায় ।</p>


                    <br/>
                    <p>useContext এর জন্য ৩ টা পার্ট দারকার </p>

                    <br/>
                    <p>contex -  simple contex</p>
                    <p>provider -  আর এক জন এর কাছে  delivary করার জন্য ।</p>
                    <p>consumer - get/ পাওয়ার জন্য consumer ।</p>

                    <br/>
                    <p>useContex এর জন্য  1st need to create contex ।  const দরে আর ওপরে creatContex link করাতে হবে ।</p>

                    <br/>
                    <p>contex এর ভিতরে ২ টি power থাকে  provider আর consumer ।</p>

                    <br/>
                    <p>variable name নিচে export করে দিতে হবে যাতে অন্য জায়গায় use করা যায়  ।</p>

                    <br/>
                    <p className='font-bold'>Youtube link :</p>
                    <a className='text-sky-500 underline underline-offset-8' href="https://www.youtube.com/watch?v=coM0JK6o3mo&t=735s">
                    useContext</a>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
        </div>
    );
};

export default UseContextTwo;