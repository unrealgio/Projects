import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return <section className='flex items-center'>

  <div className='mx-auto max-w-7x1 flex flex-col gap-4 items-center w-full max-w-96'>
    <h1 className='text-3xl font-bold'>Faça seu login</h1>
    <form className='flex flex-col gap-2 w-full'>
      <input type="email" placeholder='Digite seu e-mail' className='w-full border border-gray-300 px-4 py-2 rounded-full' />
      <input type="password" placeholder='Digite sua senha' className='w-full border border-gray-300 px-4 py-2 rounded-full' />
      <button className='cursor-pointer text-white font-bold bg-primary-400 w-full rounded-full border border-gray-300 px-4 py-2'>Login</button>
    </form>

    <p>Ainda não tem uma conta? <Link to="/register" className='underline font-semibold'>Cadastre-se aqui!</Link></p>
   
  </div>

</section>
}

export default Login