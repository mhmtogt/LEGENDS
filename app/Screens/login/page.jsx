import Link from 'next/link';
import React from 'react';
import User from '../user/page';

export const metadata = {
  title: "Login",
  description: "description for the login page"
}

export default function Login() {
  const redirectToUserPage = () => {
    history.push('/Screens/user');
};

  
  return (
    
    <div className="mt-[300px] flex min-h-screen flex-col items-center  justify-between p-24">
      <div className=" p-8 rounded   w-200 ">
        <h1 className="text-4xl text-white text-center font-semibold mb-8">LOGİN</h1>
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
            LOGİN
            <Link className='text-sm mt-3  text-white text-right' href={"/Screens/user"}>
              
           <span className='undeline font-semibold '></span>
        </Link>
        </button>

        <div className='bg-slate-700  text-white w-fit text-sm py-1 px-3 rounded-full ho mt-2'>
          HATA MESAJI
        </div>
        <Link className='text-sm mt-3  text-white text-right' href={"/Screens/signup"}>
          Hesap Oluştur <span className='undeline font-semibold '>Sign Up</span>
        </Link>
        </form>
      </div>
    </div>
  );
}
