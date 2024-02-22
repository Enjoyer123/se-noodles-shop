import styles from "./cart.module.css"

function cart() {
  return (
    <div className=" p-[50px]">
      <div className='flex'>
        <table className="w-full border-separate border-spacing-1 text-center">
          <tr className="w-10">
            <th className="w-10">Product</th>
            <th>Name</th>
            <th>Extras</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
          <tr>
            <td>
              
                <img
                className="m-auto w-[200px] h-auto"
                  src="/2.jpg"     
                  alt=""
                  /> 
             
            </td>
            <td>
    
              <span className='text-lg font-medium text-red-500'>eiei</span>
            </td>
            <td>
              <span className=''>veget</span>
            </td>
            <td>
              <span className=''>5</span>
            </td>
            <td>
              <span className=''>1</span>
            </td>
            <td>
              <span className='text-lg font-medium'>5</span>
            </td>
            </tr>
            <tr>
            <td>
              
                <img
                className="m-auto w-[200px] h-auto"
                  src="/2.jpg"     
                  alt=""
                  /> 
             
            </td>
            <td>
    
              <span className='text-lg font-medium text-red-500'>eiei</span>
            </td>
            <td>
              <span className=''>veget</span>
            </td>
            <td>
              <span className=''>5</span>
            </td>
            <td>
              <span className=''>1</span>
            </td>
            <td>
              <span className='text-lg font-medium'>5</span>
            </td>
            </tr><tr>
            <td>

                <img
                className="m-auto w-[200px] h-auto"
                  src="/2.jpg"     
                  alt=""
                  /> 
             
            </td>
            <td>
    
              <span className='text-lg font-medium text-red-500'>eiei</span>
            </td>
            <td>
              <span className=''>veget</span>
            </td>
            <td>
              <span className=''>5</span>
            </td>
            <td>
              <span className=''>1</span>
            </td>
            <td>
              <span className='text-lg font-medium'>5</span>
            </td>
            </tr>
        </table>
      </div>
      <div className="flex-1">
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
          <button className="h-[30px] text-orange-600 font-bold cursor-pointer mt-20">CHECKOUT NOW</button>
        </div>
      </div>
    </div>
    
  )
}

export default cart