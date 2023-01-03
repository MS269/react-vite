import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <main className='container flex h-screen flex-col items-center justify-center'>
      <h1 className='m-10 text-2xl'>Login</h1>
      <form className='flex w-80 flex-col items-center justify-center'>
        <input
          className='auth-input'
          type='text'
          placeholder='Username*'
          id='username'
          name='username'
          required
        />
        <input
          className='auth-input'
          type='password'
          placeholder='Password*'
          id='password'
          name='password'
          required
        />
        <button
          className='m-5 w-full rounded-md bg-blue-500 p-3 text-white shadow-md hover:bg-blue-600'
          type='submit'
        >
          Login
        </button>
        <Link
          className='m-5 text-blue-500 underline hover:text-blue-600'
          to='/sign-up'
        >
          Don&apos;t have an account? Sign Up
        </Link>
      </form>
    </main>
  );
}
