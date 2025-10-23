import React from 'react'

function Dashcard() {
  return (
    <div>
        <div className='right-side w-full bg-[#F9FAFB]'>
          <div className=''>
            <h3 className='font-semibold'>Overview</h3>
            <div className='grid grid-cols-5 gap-5 mt-3 mb-5 '>
              <div className='bg-white rounded-sm p-4'>
                <p className='text-[18px] font-medium'>Total Doctors</p>
                <h3 className='text-[#EA5B5B] text-[44px] font-semibold'>245</h3>
                <p className='text-[#666666] font-medium'><span className='text-[#0D9D00] font-semibold'>+12.5%</span> from last month</p>
              </div>
              <div className='bg-white rounded-sm p-4'>
                <p className='text-[18px] font-medium'>Total Doctors</p>
                <h3 className='text-[#EA5B5B] text-[44px] font-semibold'>245</h3>
                <p className='text-[#666666] font-medium'><span className='text-[#0D9D00] font-semibold'>+12.5%</span> from last month</p>
              </div>
              <div className='bg-white rounded-sm p-4'>
                <p className='text-[18px] font-medium'>Total Doctors</p>
                <h3 className='text-[#EA5B5B] text-[44px] font-semibold'>245</h3>
                <p className='text-[#666666] font-medium'><span className='text-[#0D9D00] font-semibold'>+12.5%</span> from last month</p>
              </div>
              <div className='bg-white rounded-sm p-4'>
                <p className='text-[18px] font-medium'>Total Doctors</p>
                <h3 className='text-[#EA5B5B] text-[44px] font-semibold'>245</h3>
                <p className='text-[#666666] font-medium'><span className='text-[#0D9D00] font-semibold'>+12.5%</span> from last month</p>
              </div>
              <div className='bg-white rounded-sm p-4'>
                <p className='text-[18px] font-medium'>Total Doctors</p>
                <h3 className='text-[#EA5B5B] text-[44px] font-semibold'>245</h3>
                <p className='text-[#666666] font-medium'><span className='text-[#0D9D00] font-semibold'>+12.5%</span> from last month</p>
              </div>
              <div className='bg-white rounded-sm p-4'>
                <p className='text-[18px] font-medium'>Total Doctors</p>
                <h3 className='text-[#EA5B5B] text-[44px] font-semibold'>245</h3>
                <p className='text-[#666666] font-medium'><span className='text-[#0D9D00] font-semibold'>+12.5%</span> from last month</p>
              </div>
              <div className='bg-white rounded-sm p-4'>
                <p className='text-[18px] font-medium'>Total Doctors</p>
                <h3 className='text-[#EA5B5B] text-[44px] font-semibold'>245</h3>
                <p className='text-[#666666] font-medium'><span className='text-[#0D9D00] font-semibold'>+12.5%</span> from last month</p>
              </div>
              <div className='bg-white rounded-sm p-4'>
                <p className='text-[18px] font-medium'>Total Doctors</p>
                <h3 className='text-[#EA5B5B] text-[44px] font-semibold'>245</h3>
                <p className='text-[#666666] font-medium'><span className='text-[#0D9D00] font-semibold'>+12.5%</span> from last month</p>
              </div>
              <div className='bg-white rounded-sm p-4'>
                <p className='text-[18px] font-medium'>Total Doctors</p>
                <h3 className='text-[#EA5B5B] text-[44px] font-semibold'>245</h3>
                <p className='text-[#666666] font-medium'><span className='text-[#0D9D00] font-semibold'>+12.5%</span> from last month</p>
              </div>
              <div className='bg-white rounded-sm p-4'>
                <p className='text-[18px] font-medium'>Total Doctors</p>
                <h3 className='text-[#EA5B5B] text-[44px] font-semibold'>245</h3>
                <p className='text-[#666666] font-medium'><span className='text-[#0D9D00] font-semibold'>+12.5%</span> from last month</p>
              </div>
 
            </div>
          </div>
          <div className='flex justify-between gap-5'>
            <div className='w-1/2 bg-white rounded-sm px-10 py-8 h-[24rem]'>
              <div className='flex justify-between'>
                <p className='font-semibold text-[20px]'>Revenue Trend</p>
                <select className='border border-[#E5E7EB] rounded-full p-1'>
                  <option value="volvo">Last 6 months</option>
                  <option value="saab">Last 6 months</option>
                  <option value="mercedes">Last 6 months</option>
                  <option value="audi">Last 6 months</option></select>
              </div>
            </div>
            <div className='w-1/2 bg-white rounded-sm px-10 py-8 rounded-sm h-[24rem]'>
            <div className='flex justify-between'>
            <p className='font-semibold text-[20px]'>Monthly Orders</p>
            <select className='border border-[#E5E7EB] rounded-full p-1'>
                  <option value="volvo">Last 6 months</option>
                  <option value="saab">Last 6 months</option>
                  <option value="mercedes">Last 6 months</option>
                  <option value="audi">Last 6 months</option></select>
            </div>
 
            </div>
          </div>
         
          <div className='my-8'>
          <div className='w-full bg-white rounded-sm py-8 px-6 rounded-6xl '>
            <h2 className='text-black text-[20px] font-semibold'>Recent Activity</h2>
            <input type="text" placeholder="Search.." className='border-[#cdcdcd] border-1 mt-6 px-3 py-2 rounded-full w-2/5'></input>
            <table className='mt-6 w-full text-left text-lg border-1 border-[#cdcdcd]'>
              <tbody>
                <tr className='bg-[#f9fafb]'>
                <th className='font-medium p-3 text-lg'>User Type</th>
                <th className='font-medium p-3 text-lg'>Customer</th>
                <th className='font-medium p-3 text-lg'>Amount</th>
                <th className='font-medium p-3 text-lg'>Date & Time</th>
                <th className='font-medium p-3 text-lg'>Transaction ID</th>
                <th className='font-medium p-3 text-lg'>Actions</th>
              </tr>
 
              <tr className='border-b-1 border-[#CDCDCD]'>
                <td className='font-normal text-[16px] p-3'>Seller</td>
                <td className='font-normal text-[16px] p-3'>John Smith john@example.com</td>
                <td className='font-normal text-[16px] p-3'>₹1,621</td>
                <td className='font-normal text-[16px] p-3'>Jan 15, 2024, 04:00 PM</td>
                <td className='font-normal text-[16px] p-3'>#PE-202509041245300001</td>
                <td className='font-normal text-[16px] p-3'>View</td>
              </tr>
 
                <tr className='border-b-1 border-[#CDCDCD]'>
                <td className='font-normal text-[16px] p-3'>Seller</td>
                <td className='font-normal text-[16px] p-3'>John Smith john@example.com</td>
                <td className='font-normal text-[16px] p-3'>₹1,621</td>
                <td className='font-normal text-[16px] p-3'>Jan 15, 2024, 04:00 PM</td>
                <td className='font-normal text-[16px] p-3'>#PE-202509041245300001</td>
                <td className='font-normal text-[16px] p-3'>View</td>
              </tr>
 
              <tr className='border-b-1 border-[#CDCDCD]'>
                <td className='font-normal text-[16px] p-3'>Seller</td>
                <td className='font-normal text-[16px] p-3'>John Smith john@example.com</td>
                <td className='font-normal text-[16px] p-3'>₹1,621</td>
                <td className='font-normal text-[16px] p-3'>Jan 15, 2024, 04:00 PM</td>
                <td className='font-normal text-[16px] p-3'>#PE-202509041245300001</td>
                <td className='font-normal text-[16px] p-3'>View</td>
              </tr>
 
              <tr className='border-b-1 border-[#CDCDCD]'>
                <td className='font-normal text-[16px] p-3'>Seller</td>
                <td className='font-normal text-[16px] p-3'>John Smith john@example.com</td>
                <td className='font-normal text-[16px] p-3'>₹1,621</td>
                <td className='font-normal text-[16px] p-3'>Jan 15, 2024, 04:00 PM</td>
                <td className='font-normal text-[16px] p-3'>#PE-202509041245300001</td>
                <td className='font-normal text-[16px] p-3'>View</td>
              </tr>
             
              <tr className='border-b-1 border-[#CDCDCD]'>
                <td className='font-normal text-[16px] p-3'>Seller</td>
                <td className='font-normal text-[16px] p-3'>John Smith john@example.com</td>
                <td className='font-normal text-[16px] p-3'>₹1,621</td>
                <td className='font-normal text-[16px] p-3'>Jan 15, 2024, 04:00 PM</td>
                <td className='font-normal text-[16px] p-3'>#PE-202509041245300001</td>
                <td className='font-normal text-[16px] p-3'>View</td>
              </tr>
 
              <tr className='border-b-1 border-[#CDCDCD]'>
                <td className='font-normal text-[16px] p-3'>Seller</td>
                <td className='font-normal text-[16px] p-3'>John Smith john@example.com</td>
                <td className='font-normal text-[16px] p-3'>₹1,621</td>
                <td className='font-normal text-[16px] p-3'>Jan 15, 2024, 04:00 PM</td>
                <td className='font-normal text-[16px] p-3'>#PE-202509041245300001</td>
                <td className='font-normal text-[16px] p-3'>View</td>
              </tr>
 
              <tr className='border-b-1 border-[#CDCDCD]'>
                <td className='font-normal text-[16px] p-3'>Seller</td>
                <td className='font-normal text-[16px] p-3'>John Smith john@example.com</td>
                <td className='font-normal text-[16px] p-3'>₹1,621</td>
                <td className='font-normal text-[16px] p-3'>Jan 15, 2024, 04:00 PM</td>
                <td className='font-normal text-[16px] p-3'>#PE-202509041245300001</td>
                <td className='font-normal text-[16px] p-3'>View</td>
              </tr>
 
              <tr className='border-b-1 border-[#CDCDCD]'>
                <td className='font-normal text-[16px] p-3'>Seller</td>
                <td className='font-normal text-[16px] p-3'>John Smith john@example.com</td>
                <td className='font-normal text-[16px] p-3'>₹1,621</td>
                <td className='font-normal text-[16px] p-3'>Jan 15, 2024, 04:00 PM</td>
                <td className='font-normal text-[16px] p-3'>#PE-202509041245300001</td>
                <td className='font-normal text-[16px] p-3'>View</td>
              </tr>
 
              <tr className='border-b-1 border-[#CDCDCD]'>
                <td className='font-normal text-[16px] p-3'>Seller</td>
                <td className='font-normal text-[16px] p-3'>John Smith john@example.com</td>
                <td className='font-normal text-[16px] p-3'>₹1,621</td>
                <td className='font-normal text-[16px] p-3'>Jan 15, 2024, 04:00 PM</td>
                <td className='font-normal text-[16px] p-3'>#PE-202509041245300001</td>
                <td className='font-normal text-[16px] p-3'>View</td>
              </tr>
 
              <tr className='border-b-1 border-[#CDCDCD]'>
                <td className='font-normal text-[16px] p-3'>Seller</td>
                <td className='font-normal text-[16px] p-3'>John Smith john@example.com</td>
                <td className='font-normal text-[16px] p-3'>₹1,621</td>
                <td className='font-normal text-[16px] p-3'>Jan 15, 2024, 04:00 PM</td>
                <td className='font-normal text-[16px] p-3'>#PE-202509041245300001</td>
                <td className='font-normal text-[16px] p-3'>View</td>
              </tr>
              </tbody>
            </table>
          </div>
          </div>
 
        </div>
    </div>
  )
}

export default Dashcard