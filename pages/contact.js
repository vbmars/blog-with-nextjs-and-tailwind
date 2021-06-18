import Head from 'next/head';
import Link from 'next/link';
export default function contact(){

    return(

        <div className='bg-gray-100 rounded-xl'>
            <div className='w-full flex justify-center items-center'>
                <div className='flex flex-col space-y-6 bg-blue-200 p-8 rounded-xl shadow-lg w-full'> 
                  <div className='flex flex-col justify-between text-orange'>
                  text todo
                  </div>
                
                </div>
                <div>
                    <div className='bg-white rounded-lg shadow-lg p-8'>
                        <form className='flex flex-col space-y-4'>
                            <input type='area' placeholder='the word u wanna say'></input>

                        </form>
                        
                        
                         form todo </div>
               
                </div>
            </div>
        </div>
    )
}