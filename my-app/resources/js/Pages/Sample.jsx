import { useEffect } from 'react';

const Sample = () => {
   useEffect(() => {
      console.log('Component mounted');
      return () => {
         console.log('Component unmounted');
      };
   }, []);

   return (
      <>
      <div className='flex justify-center items-center h-screen bg-gray-300'>
         <div className="p-4 flex flex-col justify-center items-center bg-white shadow-lg">
            <h1 className="text-2xl font-bold text-green-800">これはサンプルです</h1>
            <p className='text-pink-500 text-lg font-bold'>バッチリ、tailwindcssが使えてるよ！</p>
         </div>
      </div>
      </>
   )
}
export default Sample;
