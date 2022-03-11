import React, {useState} from 'react';
import Menu from '../ImageApi/Menu';


const ImageCall = () => {

    const [items, setItems]  = useState(Menu)

    const filterItems = (cateItems) =>{
        const updatedItems = Menu.filter((currentElement) => {
            return currentElement.category === cateItems
        });

        setItems(updatedItems);
    }
    console.log(setItems)
    return (
        <>
            <h1 className='flex items-center justify-center font-semibold'>Order Our Favourite Dish</h1>
            <hr />

            <div className=''>
                <div className='flex items-center justify-center space-x-20 mt-10'>
                    <button onClick={() => filterItems('breakfast')} className='bg-green-500 font-bold text-white rounded py-2 px-4'>Break Fast</button>
                    <button onClick={() => filterItems('lunch')} className='bg-green-500 font-bold text-white rounded py-2 px-4'>Lunch</button>
                    <button onClick={() => filterItems('evening')} className='bg-green-500 font-bold text-white rounded py-2 px-4'>Evening</button>
                    <button onClick={() => filterItems('dinner')} className='bg-green-500 font-bold text-white rounded py-2 px-4'>Dinner</button>
                    <button onClick={() => setItems(Menu)} className='bg-green-500 font-bold text-white rounded py-2 px-4'>All Items</button>
                </div>

                {/* -------------items here------------- */}
                <div className='mt-16 grid grid-flow-row grid-cols-3 space-x-12 container mx-auto space-y-8'>


                   {
                       items.map( (element) => {
                            const {image, name, category, price, description} = element;

                            return( 
                                <div className= 'flex flex-row space-x-8 p-8 rounded-xl bg-yellow-100 mx-auto items-center justify-center'>
                                    <div className=''>
                                        <img className='' src={image} alt="" />
                                    </div>
                                    <div className='space-y-2'>
                                        <h1 className='font-bold text-gray-900'>{name}</h1>
                                        <p className=''>{description}</p>
                                        <div className='flex flex-row space-x-9'>
                                            <p className='font-medium'>{price}</p>
                                            <button className='bg-orange-500 text-white rounded py-1 px-3 font-medium'>Order</button>
                                        </div>
                                        <p>{category}</p>
                                    </div>
                                </div>
                            )
                       })
                   }
                </div>
            </div>
            <br /><br /><br /><br />
      {/* -------------main code end here------------ */}


               <div className='flex items-center justify-center flex-col'>
                    <p className='font-bold'>Youtube link :</p>
                    <a className='text-sky-500 underline underline-offset-8' href="https://www.youtube.com/watch?v=FIcIFNeOOSY&list=PLwGdqUZWnOp0ningKFp1aslpZkCDAzML8&index=29&ab_channel=ThapaTechnical">
                    Create Awesome Portfolio Filter Image Gallery</a>
                <br/>
                <br/>
                <p className='font-bold'>Youtube link :</p>
                    <a className='text-sky-500 underline underline-offset-8' href="https://www.youtube.com/watch?v=1cNJdu0wTXw&list=PLwGdqUZWnOp0ningKFp1aslpZkCDAzML8&index=31&ab_channel=ThapaTechnical">
                    Master React by Creating Dynamic Filter Photo Gallery with React & Hooks</a>
                </div>
                <br/>
                <br/>
                <br /><br /><br />

        </>
    );
};

export default ImageCall;