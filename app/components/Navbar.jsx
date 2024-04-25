"use client"

import { useState } from "react"; 
import Link from "next/link";
import {AiOutlineMenu,AiOutlineClose} from "react-icons/ai";// burada menüyü açıp kapatmak için kullanılan react iconlarını içe aktardım oluşturduğum componentler


export default function Navbar() {

  const  [menuIcon ,setIcon ] = useState(false)// burada menü iconu yaptım sayfa küçülünce side menu olacak şekilde 
  const hangleSmallerScreenNavigation= () => {
    setIcon(!menuIcon); // üsteki icona tıklama özelliği katart
  }

  return (
  
    <header className="bg-white text-[#e10514] w-full ease-in duration-300 fixed top-10 left-0 z-10 ">  {/**burada navbarın içindeki renk nereye yaklaşacağı belirlendi */}

          <nav className="max-w-[1366px] mx-auto h-[100px] flex justify-between items-center p-4 ">
            <div className="flex items-center">
              <div className="rounded-full overflow-hidden ">
                 <img src="/logo.svg" alt="logo" className="h-20 rounded-full  "></img>
                
              </div>
              <span className="text-xl lg:text-2xl text-slate-800 font-bold hover:text-[#e10514]"> 
              <Link href="/">LEGENDS</Link>
              </span>
                
              </div>
              <div>

                  <Link  href='/' onClick={hangleSmallerScreenNavigation}>
                  </Link>
              </div>
              {/**larger screens navigations */}
              <ul className="hidden md:flex uppercase font-semibold text-1xl lg:text-[20px] text-slate-800 "> {/** navbardaki Bireysel  üzerine gelince rengini değişiy0  */}
                

                <li className="mr-4 lg:mr-8 hover:text-[#e10514]  hover:underline"> {/**değişen  mr-4 ve lg:mr-8 sağ kenara (right margin) birer boşluk ekler. mr-4 normal boyutlarda, lg:mr-8 ise büyük ekranlarda (large) daha büyük bir boşluk ekler. */}
                      <Link href="/Screens/bireysel">Bireysel</Link>
                  </li> 
                
                 <li className="mr-4 lg:mr-8 hover:text-[#e10514]"> 
                    <Link href="/Screens/contact">Contact</Link>
                </li>  
                
                <li className="mr-4 lg:mr-8 hover:text-[#e10514]"> 
                    <Link href="/Screens/about">About</Link>
                </li> 
                
                 <li className="mr-4 lg:mr-8 hover:text-[#e10514]"> 
                    <Link href="/">Legends</Link>
                </li>

              </ul>

              <div className="hidden md:flex">

                <div className="flex">
                    <Link href="/Screens/login">{/** bu altaki iki button signUp ve login renk boyut round vb tüm şeylerini veriyor üzerine gelince hangi renk olacağını da yazıyor */}
                      <button className="mr-5 bg-white border-2 border-[#e10514] text-slate-800 hover:bg-white hover:text-[#e10514] rounded-full upercase font-bold px-8 py-2">Login</button>
                    </Link>

                    <Link href="/Screens/signup">
                      <button className="border-2 border-[#e10514] text-slate-800 hover:text-[#e10514] rounded-full upercase font-bold px-8 py-2">Sign Up</button>
                    </Link>
                </div>
              </div>   

              {/**Smaller Screens - Navigation icons */}
              {/**OnClick Change the icon */}    

              <div onClick={hangleSmallerScreenNavigation} className="flex md:hidden">
                
                  {menuIcon ? 
                  (<AiOutlineClose size={25} className="text-[#e10514]"/> )// burada küçük ekranda menü kapatma iconu eklendi 
                  : 
                  (<AiOutlineMenu size={25} className="text-[#e10514]" />)// burada ise küçük ekranın menusü açma iconu eklendi 
                  }
                
              </div>  
              {/*Smaller Screen Navbar */}
              <div className={menuIcon ? 
              "md:hidden absolute top-[100px] right-0 bottom-0 left-flex justfy-center items-center w-full h-screen bg-slate-800 text-white text-center ease-in duration-300"
              : 
              "md:hidden absolute top-[100px] right-0 left-[100%] flex justfy-center items-center w-full h-screen bg-slate-800 text-white text-center ease-in duration-300"
              }>
                {/*Smaller Screen - Navbar*/}
                <div className="w-full">
                  <ul className="uppercase font-bold  text-2xl">
                    <li onClick={hangleSmallerScreenNavigation} className="py-5  hover:text-[#e10514] cursor-pointer">
                      <Link href="/"> Legends</Link>
                    </li>
                    <li onClick={hangleSmallerScreenNavigation} className="py-5 hover:text-[#e10514] cursor-pointer">
                      <Link href="/Screens/bireysel"> Bireysel</Link>
                    </li>
                    <li onClick={hangleSmallerScreenNavigation} className="py-5 hover:text-[#e10514] cursor-pointer">
                      <Link href="/Screens/about"> About</Link>
                    </li>
                    <li onClick={hangleSmallerScreenNavigation} className="py-5 hover:text-[#e10514] cursor-pointer">
                      <Link href="/Screens/contact"> Contact</Link>
                    </li>
                    
                  </ul>
                  <div className="flex flex-col justify-center items-center mt-16">

                    <Link href="/Screens/login" onClick={hangleSmallerScreenNavigation}>
                    <button className="bg-[#e10514] text-slate-800 rouded-full uppercase font-bold py-3 w-[250px] mb-5">
                    Login
                    </button>
                    </Link> 
                    
                    <Link href="/Screens/signup" onClick={hangleSmallerScreenNavigation}>
                    <button className="border-2 border-[#e10514]  rouded-full uppercase font-bold py-3 w-[250px] mb-5">
                    Sign Up
                    </button>
                    </Link>
                    
                  </div>

                </div>
              </div>
          </nav>
    </header>
  )
}
