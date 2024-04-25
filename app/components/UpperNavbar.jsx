import  React from "react";
import Link from "next/link";


function UpperNavbar() {
  
  return(

    <header className="bg-[#e10514] text-white py-2 px-4 text-center"style={{ position: "fixed", top: 0, left: 0, right: 0 }}>
      
      <nav>
          <div>

        <ul className="flex uppercase justify-end">

        <li className="mr-4 lg:mr-8  hover:underline "> {/*burada Ürün ve hizmetlerin konumu ve üzerine gelince altı çiziliyor */}
                    <Link href="/Screens/urunvehizmetler">Ürün ve Hizmetler</Link>
          </li>
          <li className="mr-4 lg:mr-8  hover:underline  "> {/*burada Ürün ve hizmetlerin konumu ve üzerine gelince altı çiziliyor */}
                    <Link href="/Screens/Kampanyalar">Kampanyalar</Link>
          </li> 
          <li className="mr-4 lg:mr-8  hover:underline "> {/*burada Ürün ve hizmetlerin konumu ve üzerine gelince altı çiziliyor */}
                    <Link href="/Screens/dijital-bankacilik">Dijital Bankacılık</Link>
          </li> 


        </ul>
          

          </div>
      </nav>
    </header>

  );
}

export default UpperNavbar;



