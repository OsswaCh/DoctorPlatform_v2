import React from 'react'
import InputBox from '../components/InputBox';

function TestPage() {
  return (
    <div className='bg-blue-gray-600 w-screen h-screen'>
      <div className='flex flex-col justify-center items-center h-full'>
        <InputBox />
      </div>
    </div>
  )
}

export default TestPage;