import React from 'react'

const Loading = () => {
  return (
    <div className='flex items-center justify-center min-h-screen'>
      <div className='animate-spin h-16 w-16 rounded-full border-4 border-blue-500 border-b-transparent'></div>
    </div>
  )
}

export default Loading
