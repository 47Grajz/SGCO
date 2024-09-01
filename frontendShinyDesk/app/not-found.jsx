"use client"
import React from 'react'

function notfound() {
  return (
    <div
      className='flex justify-center items-center w-screen h-screen bg-gradient-to-br from-zinc-100 to-sky-200'
    >
      <div className='flex justify-center items-center flex-col gap-2'>
        <h1 className='text-9xl text-slate-600'>404</h1>
        <h2 className='text-4xl text-slate-600'>Pagina no encontrada</h2>
        <p className='mt-10 '>Lo sentimos pero al parecer esta pagina no existe</p>
        <button onClick={() => window.history.back()} class="rounded-md bg-principalBlue mt-5 px-3.5 py-2.5 text-sm font-semibold transform transition duration-500 ease-in-out text-white shadow-sm hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Pagina Anterior</button>
      </div>
    </div>
  )
}

export default notfound

