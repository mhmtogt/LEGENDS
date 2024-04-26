export const metadata = {
    title:"user",
    description:"description for the User page"
}


export default function User() {
    return (
        <div className="gird place-item-center  h-screen">
        <div className="shadow-lg p-8 bg-zince-300/10  flex flex-col gap-2 my-6">
             <div>
               Name: <span className="font-simebold">Mehmet</span>

             </div>
             <div>
                Email: <span className="font-simebold">mehmet@gmail.com</span>
             </div>
             <button className="bg-slate-700 text-white hover:bg-white hover:text-bg-slate-700 font-simebold ">

             </button>
             
        </div>
        

    </div>
    )
  }


