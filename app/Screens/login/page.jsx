import React from 'react';

export const metadata = {
  title: "Login",
  description: "description for the login page"
}

export default function Login() {
  return (
    
    <div className="mt-[300px] flex min-h-screen flex-col items-center  justify-between p-24">
      <div className=" p-8 rounded  shadow-md w-200 ">
        <h1 className="text-4xl text-white text-center font-semibold mb-8">Login</h1>
        <form>
          <input
            type="text"
            className="w-full border-2 border-[#e10514]  hover:text-[#e10514] rounded-full upercase font-bold px-8 py-2"
            placeholder="Email"
            required
          />
              <div className="flex items-center">
        <input type="checkbox" id="remember-me" className="mr-2" />
        <label htmlFor="remember-me" className="text-white">Beni Hatırla</label>
      </div>
          <input
            type="password"
            className="w-full border-2 border-[#e10514] text-slate-800 hover:text-[#e10514] rounded-full upercase font-bold px-8 py-2"
            placeholder="Şifre"
            required
          />
              <div className="flex items-center">
        <input type="checkbox" id="remember-me" className="mr-2" />
        <label htmlFor="remember-me" className="text-white">Beni Hatırla</label>
      </div>
          <button 
          type='submit'
          className='w-full border-2 border-[#e10514]  rounded-full bg-slate-700 text-white py-2 px-8 font-semibold rounded hover:bg-white hover:text-slate-700 '>
            submit


          </button>
        </form>
      </div>
    </div>
  );
}
