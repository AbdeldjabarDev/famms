export default function Footer(props)
{
    return(
    <section className="bg-[#002c3e] text-white p-10 w-full">
        <div className='flex flex-row mt-10 ml-40 w-fit'>
      <ul className='flex flex-col ml-10 mr-10 w-40 h-72'>
        <li className='font-bold text-xl font-sans'><img className="bg-white" src='/images/logo.png'></img></li>
        <li></li>
        <li></li>
        <li></li>  
        </ul>
      <ul className='flex flex-col ml-10 mr-10 w-40 h-72 gap-3 '>
        <li className=' font-bold text-xl font-sans mb-4'>Menu</li>
        <li className="hover:text-red-500 cursor-pointer">Home</li>
        <li className="hover:text-red-500 cursor-pointer">About</li>
        <li className="hover:text-red-500 cursor-pointer">Services</li>
        <li className="hover:text-red-500 cursor-pointer">Testimonial</li>  
        <li className="hover:text-red-500 cursor-pointer">Blog</li>
        <li className="hover:text-red-500 cursor-pointer">Contact</li>
        </ul>
      <ul className='flex flex-col ml-10 mr-10 w-40 h-72 gap-3 mb-4'>
        <li className=' font-bold text-xl font-sans'>Account</li>
        <li className="hover:text-red-500 cursor-pointer">Account</li>
        <li className="hover:text-red-500 cursor-pointer">Login</li>
        <li className="hover:text-red-500 cursor-pointer">Checkout</li>  
        <li className="hover:text-red-500 cursor-pointer">Register</li>
        <li className="hover:text-red-500 cursor-pointer">Shopping</li>
        <li className="hover:text-red-500 cursor-pointer">Wigdet</li>
        </ul>
      <ul className='flex flex-col ml-10 mr-10 w-72 h-72 gap-5 mb-4'>
        <li className=' font-bold text-xl font-sans'>News Letter</li>
        <li>Subscribe by our news letter and get fresh updates</li>
        <li className='flex flex-row h-10'><input className='w-52 border pl-2 border-slate-300 ' placeholder='email'></input><div className='w-20 h-10 bg-red-500 pl-2 pr-2 pt-2 content-start text-white cursor-pointer'>Subscribe</div></li>
        <li></li>  
      </ul>
        </div>
      </section>
      )
}