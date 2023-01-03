import { Link } from 'react-router-dom';

export default function SignUp() {
  return (
    <main className='container flex h-screen flex-col items-center justify-center'>
      <h1 className='m-10 text-2xl'>Sign Up</h1>
      <form className='flex w-80 flex-col items-center justify-center'>
        <input
          className='auth-input'
          type='text'
          placeholder='Email*'
          id='email'
          name='email'
          required
        />
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
        <input
          className='auth-input'
          type='password'
          placeholder='Password Confirm*'
          id='passwordConfirm'
          name='passwordConfirm'
          required
        />
        <button
          className='m-5 w-full rounded-md bg-blue-500 p-3 text-white shadow-md hover:bg-blue-600'
          type='submit'
        >
          Sign Up
        </button>
        <Link
          className='m-5 text-blue-500 underline hover:text-blue-600'
          to='/'
        >
          Already have an account? Login
        </Link>
      </form>
    </main>
  );
}
