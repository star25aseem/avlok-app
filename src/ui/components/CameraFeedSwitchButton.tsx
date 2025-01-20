import React from 'react'

const CameraFeedSwitchButton = () => {
  return (
      <button type='button' className='absolute z-10 rounded-3xl btn bg-white hover:bg-gray-200 focus:ring-black top-20 left-20 !outline-none border-none focus:ring-0'>
      <img src="src/ui/assets/cameraIcon.png" alt="" width={60}/>
    </button>
  )
}

export default CameraFeedSwitchButton