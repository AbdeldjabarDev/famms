import Image from 'next/image'
import Link from 'next/link'

function Nav(props)
{
    return (<div className="bg-white h-20 flex flex-row w-full  border-violet-400 font-bold font-serif">  
        <ul className="flex flex-row text-lg font-sans ml-72">
        <img  className="mr-44 h-8 mt-5" src="/images/logo.png" width="250"></img>
            <li className="m-6 hover:text-orange-500"><Link href="/">Home</Link></li>
            <li className="m-6 hover:text-orange-500">PAGES</li>
            <li className="m-6 hover:text-orange-500"><Link href="/products">Products</Link></li>
            <li className="m-6 hover:text-orange-500">BLOG</li>
            <li className="m-6 hover:text-orange-500"><Link href="/contact">CONTACT US</Link></li>
        </ul>
    </div>)
}
export default Nav;