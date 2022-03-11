import React, { useState, useEffect } from 'react';
import images from '../Images/todo.png';
import { BiEdit } from 'react-icons/bi';
import { BiTrash } from 'react-icons/bi';
import {FiPlus} from 'react-icons/fi';



//-------- To get Data From Local 
const getLocalItems = () =>{
    let list = localStorage.getItem('lists');

    if (list) {
        return(
            JSON.parse (localStorage.getItem('lists'))
        );
    } else {
        return [];
    }
}



const TodoApp = () => {

    const [inputData, setInputData] = useState('');

    const [items, setItems] = useState( getLocalItems() );

    const [toggleSubmit, setToggleSubmit] = useState(true);

    const [isEditItems, setIsEditItems] = useState(null);

    const addItems = () =>{

        if(!inputData) {
            alert('check');
        } else if (inputData && !toggleSubmit) {
            setItems(
                items.map((element) => {
                    if(element.id === isEditItems) {
                        return{...element, name:inputData}
                    }
                    return element;
                })
            )
            setToggleSubmit(true);

            setInputData('');

            setIsEditItems(null);

        }else{
            const allInputData = {id: new Date().getTime().toString(), name:inputData}
            setItems([...items, allInputData]);
            setInputData('');
        }
    }

    // ------Delete id one data
    const deleteItems = (index) =>{
        const updateItems = items.filter((element) => {
            return(
                index !== element.id
            )
        });
        setItems(updateItems)
    }

    // ---------Edit Items
    const editItems = (id) =>{
        let newEditItem = items.find((element) =>{
            return(
                element.id === id
            )
        });
        console.log(newEditItem)
        setToggleSubmit(false);

        setInputData(newEditItem.name);

        setIsEditItems(id);
    }


// --------Remove All Data
    const removeAll = () =>{
        setItems([]);
    }


// -------Add Data Local Storage save 
    useEffect(() => {
        localStorage.setItem('lists', JSON.stringify(items))
    }, [items])
    



    return (
        <div className='h-screen w-screen bg-cyan-900'>
            <div className='flex item-center justify-center flex-col'>
                <br/>
                {/* --------------header image------------ */}
                <figure className='mx-auto mt-36'>
                    <img className='h-24 w-24 mx-auto' src={images} alt="todoImage" />
                    <figcaption className='text-white mx-auto'>Add Your List Here ✌️</figcaption> 
                </figure>
                {/* --------------header image end------------ */}
                <br />



                {/* ------------input field---------------- */}
                <div className='mx-auto relative flex item-center justify-center'>
                     <input
                     value={inputData}
                     onChange={(e) => setInputData(e.target.value)}

                     className='p-2.5 outline-none block w-52'
                      type="text" placeholder='✍ Add items...'/>


                      {
                          toggleSubmit ?
                            <i onClick={addItems}
                            className='absolute mt-3.5 ml-40 cursor-pointer hover:text-green-600'
                            title='Add Items'>
                            <FiPlus/>
                            </i> :
                            <i onClick ={editItems}
                            title='edit Item' 
                            className='absolute mt-3.5 ml-40 cursor-pointer hover:text-blue-600'><BiEdit/></i>

                     }

                </div>
                {/* ------------input field end--------------- */}



                {/* -----------input data field--------------- */}
                <div>

                    {
                        items.map((element) =>{
                            return(
                             <div key={element.id} className='mx-auto flex flex-row bg-white px-4 py-2 mt-4 w-52 hover:bg-green-500 hover:text-white'>
                               <h3>{ element.name }</h3>

                               <div className='flex flex-row mt-1.5 ml-20 relative'>
                                    <i
                                    onClick ={() => editItems(element.id)}
                                    title='edit Item' 
                                    className='absolute cursor-pointer hover:text-blue-600 px-4'><BiEdit/></i>

                                    <i
                                    onClick ={() => deleteItems(element.id)} 
                                    title='delete Item'
                                    className='absolute cursor-pointer hover:text-red-600'><BiTrash/></i>
                               </div>
                             </div>
                            )
                        })
                    }
                </div>
                {/* ------------input data field end------------- */}



                {/* -----------Button-------------- */}
                <div className='mx-auto bg-green-600 px-3 py-2 text-white mt-5 font-light font-sans rounded hover:bg-red-600'>
                    <button onClick={removeAll}>Remove</button>
                </div>
                {/* -----------Button end-------------- */}

                <div className='mx-auto'>
                <br/>
                <br/>
                    <p className='font-bold text-white'>Youtube link :</p>
                    <a className='text-white underline underline-offset-8' href="https://www.youtube.com/watch?v=wLZTaRySN4Y&t=1513s&ab_channel=ThapaTechnical">
                    Todo App</a>
                <br/>
                <br/>
                </div>
                
            </div>
            <br /><br /><br /><br />

        </div>
    );
  }

export default TodoApp;