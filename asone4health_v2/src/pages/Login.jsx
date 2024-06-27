// rfce
import React from 'react'
import '../App.css'
import InputBox from '../components/InputBox'
import Button from '../components/Button'

function Login() {

  return (

    <div className='w-screen h-screen sm:grid grid-rows-2 md:grids grid-cols-2'>

        {/* color column */}
        <div className='w-full  centered-flex bg-color-main lg:h-screen md:h-screen sm:h-auto h-1/5 '>
            <h1>nothing here</h1>
        </div>

        {/* login column */}
        
        

        <div className='w-full flex items-center justify-center relative  lg:h-screen md:h-screen '>
        <div className='p-8  w-full max-w-md '>
          <h1 className='text-center mb-8 font-bold text-xl '>S'identifier</h1>

          {/* input section */} 
          <section className='flex flex-col w-full items-center relative '>
          <div className='mb-6 w-full flex flex-col items-center'>
            <h2 className='text-center mb-2'>Adresse Email</h2>
            <InputBox type='email' />
          </div>
          
          <div className='mb-6 w-full flex flex-col items-center'>
            <h2 className='text-center mb-2'>Mot de Passe</h2>
            <InputBox type='password'  />
          </div>

          <Button color='color-main' text='Continuer' />
          </section>

          <br />

          {/* New Section */}
          <section className='flex flex-col w-full items-center relative bottom-10 top-20 mt-24'>
            
            
            <div className='flex flex-col w-full items-center justify-center mt-4'>
              <h3 className='mb-2'>Mot de passe oublié ?</h3>
              <button className='w-full h-9  text-text-color-text border-solid border border-color-text rounded-xl'>Nouveau mot de passe</button>
            </div>
            
            
            <div className='flex flex-col w-full items-center justify-center mt-4 '>
              <h3 className='mb-2'>Nouveau chez AsOne4Health ?</h3>
              <button className='w-full h-9  text-color-text border-solid border border-color-text rounded-xl'>Créer votre compte AsOne4Health</button>
            </div>
            
          </section>

        </div>
      </div>

    </div>


  )
}

export default Login