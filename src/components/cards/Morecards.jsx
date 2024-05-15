import React from 'react'
import eyewear from '../../assets/Eeyewear.png'
import casualstyles from '../../assets/casualstyles.png'
import watch from '../../assets/watch.png'
import workwear from '../../assets/workwear.png'
import sleepwear from '../../assets/sleepwear.png'
import mensworkwear from '../../assets/mensworkwear.png'
const Morecards = () => {
  return (
    <div className='flex flex-col justify-around gap-3'>

    <div className='flex justify-around mt-1' >
      <div><img className='h-36 w-32' src={eyewear}/></div>
      <div><img className='h-36 w-32' src={casualstyles}/></div>
      <div><img className='h-36 w-32' src={watch}/></div>
    </div>

    <div className='flex justify-around' >
      <div><img className='h-36 w-32' src={workwear}/></div>
      <div><img className='h-36 w-32' src={sleepwear}/></div>
      <div><img className='h-36 w-32' src={mensworkwear}/></div>
    </div>

    </div>
  )
}

export default Morecards
