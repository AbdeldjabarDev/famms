import Footer from "../components/Footer";
import Nav  from "../components/Nav";
import ProductCont from "../components/ProductCont";
export default function Products(props)
{
    return(
    <div>
<Nav></Nav>
<div className="w-full h-40 bg-red-500 flex flex-col">
    <p className="text-white w-fit mr-auto ml-auto mb-auto mt-auto text-5xl font-bold">Products Grid</p>
</div>
<div className="w-[90%] ml-[5%] mr-[5%] flex flex-wrap">
<ProductCont src="/images/p1.png" name="Men's shirt" price = "7.65$"/>
<ProductCont src="/images/p2.png" name="Men's shirt" price = "7.65$"/>
<ProductCont src="/images/p3.png" name="Men's shirt" price = "7.65$"/>
<ProductCont src="/images/p4.png" name="Men's shirt" price = "7.65$"/>
<ProductCont src="/images/p5.png" name="Men's shirt" price = "7.65$"/>
<ProductCont src="/images/p6.png" name="Men's shirt" price = "7.65$"/>
<ProductCont src="/images/p7.png" name="Men's shirt" price = "7.65$"/>
<ProductCont src="/images/p8.png" name="Men's shirt" price = "7.65$"/>
<ProductCont src="/images/p9.png" name="Men's shirt" price = "7.65$"/>
<ProductCont src="/images/p10.png" name="Men's shirt" price = "7.65$"/>
<ProductCont src="/images/p11.png" name="Men's shirt" price = "7.65$"/>
<ProductCont src="/images/p12.png" name="Men's shirt" price = "7.65$"/>
</div>
<div className="w-full h-[400px] bg-[#002c3e] flex mt-20 ">
    <div className="flex flex-row w-fit mr-auto ml-72 mt-20">
<ul className="w-60 h-fit mr-20 ">

<li className="font-semibold text-white text-3xl mb-10"><p>Reach at ...</p></li>
<li className="mb-5 hover:text-red-500 text-white"><a className="flex flex-row gap-3"><img className="color-white" src="/images/location-svgrepo-com.svg" width="20" height="20s" ></img><p>location</p></a></li>
<li className="mb-5 hover:text-red-500 text-white"><a className="flex flex-row gap-3"><img className="color-white" src="/images/phone-svgrepo-com.svg"    width="20" height="20s"></img> <p>Contact</p></a></li>
<li className="mb-5 hover:text-red-500 text-white"><a className="flex flex-row gap-3"><img className="color-white" src="/images/email-svgrepo-com.svg"    width="20" height="20s"></img> <p>Email</p></a></li>

</ul>
<ul className="w-96 h-full gap-10">
<li className="text-3xl text-white font-serif font-semibold mb-10">Famms</li>
<li className="text-white">
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima, aliquid qui. Ipsa sit, quibusdam tempora nostrum molestias, consequatur laudantium reprehenderit mollitia explicabo porro similique ea accusantium quos assumenda dolor nemo.
</li>
<li><ul className="flex flex-row gap-8 mt-6  w-fit">
    <li><a><img className="cursor-pointer" src="/images/facebook-svgrepo-com.svg"  alt="social media" width="65" height="65"></img></a></li>
    <li><a><img className="cursor-pointer" src="/images/instagram-svgrepo-com.svg" alt="social media" width="65" height="65"></img></a></li>
    <li><a><img className="cursor-pointer" src="/images/twitter-svgrepo-com.svg"   alt="social media" width="65" height="65"></img></a></li>
    <li><a><img className="cursor-pointer" src="/images/linkedin-svgrepo-com.svg"  alt="social media" width="65" height="65"></img></a></li>
    <li><a><img className="cursor-pointer" src="/images/pinterest-svgrepo-com.svg" alt="social media" width="65" height="65"></img></a></li>

    </ul></li>
</ul>
</div>
<div className="h-1 bg-slate-500 w-[40%] ml-auto mr-auto"></div>
</div>
<Footer></Footer>
</div>)
}