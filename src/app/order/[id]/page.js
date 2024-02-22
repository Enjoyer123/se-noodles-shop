import React from 'react'
import Image from 'next/image'

function Order() {
  return (
    <div className='p-[50px]'>
        <div className='left flex-2'>
            <div className='row'>
            <table className="w-full border-separate border-spacing-1 text-center">
          <tr className="w-10">
            <th>Id</th>
            <th>Customer</th>
            <th>Table</th>
            <th>Total</th>
          </tr>
          <tr>
            <td>
    
              <span className='text-lg font-medium text-red-500'>eiei</span>
            </td>
            <td>
              <span className=''>123546</span>
            </td>
            <td>
              <span className=''>John</span>
            </td>
            <td>
              <span className=''>1</span>
            </td>
            <td>
              <span className='text-lg font-medium'>50</span>
            </td>
            </tr>
            
        </table>
            </div>
            <div className='row flex'>
                <div className=''>
                
                    <img className="w-[30px] h-[30px]"src="/1.jpg"></img>
                <span>Payment</span>
                <div className=''>
                    <spam>checked</spam>
                </div>
                </div>
                <div className=''>
                
                <img className="w-[30px] h-[30px]"src="/1.jpg"></img>
            <span>Payment</span>
            <div className=''>
                <spam>checked</spam>
            </div>
            
            </div>
            <div className=''>
                
                <img className="w-[30px] h-[30px]"src="/1.jpg"></img>
            <span>Payment</span>
            <div className=''>
                <spam>checked</spam>
            </div>
            
            </div>
            <div className=''>
                
                <img className="w-[30px] h-[30px]"src="/1.jpg"></img>
            <span>Payment</span>
            <div className=''>
                <spam>checked</spam>
            </div>
            
            </div>
            </div>
        </div>
        <div className='rightflex-1'>
        <div className="bg-gray-600 flex flex-col justify-between text-white items-center">
          <h2 className="text-lg font-bold">CART TOTAL</h2>
          <div className="">
            <b className="mr-10">Subtotal:</b>$5
          </div>
          <div>
            <b className="mr-10">Discount:</b>$5
          </div>
          <div>
            <b className="mr-10">Total:</b>$5
          </div>
          <button className="h-[30px] text-orange-600 font-bold cursor-pointer mt-20">PAID</button>
        </div>
        </div>
    </div>
  )
}

export default Order