import Head from 'next/head'
import Image from 'next/image'

import Nav from '../components/Nav'
import SliderCont from '../components/SliderCont'
import QualityCont from '../components/QualityCont'
import ProductCont from '../components/ProductCont'
import Testimonial from '../components/Testimonial'
import Link from 'next/link'
import Footer from '../components/Footer'
import React from 'react'

export default function Home() {
 
  
  console.log();
  return (
    <div className="w-full h-full flex flex-col">
      <Head>
        <title>Famms</title>
        <meta name="description" content="Famms : an e-commerce website template" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>

<Nav
/>
<section className='relative w-full h-full border border-red-800' id='Home'>
  
<div  style={{zIndex:"-1",top:"0",left:"0",width:"100%",height:"100%",position:"absolute"}}><img src='/images/slider-bg.jpg'></img>
</div>
<div className='w-[80%] mr-auto border border-green-500 h-fit mt-36 ml-60 overflow-hidden'>
  <div className='h-full w-full transition-all animate-slide-x'>
  <div className='flex flex-row flex-wrap overflow-hidden border border-red-800 w-[502px] h-[502px]  '>
<SliderCont text="Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi."></SliderCont>
<SliderCont text="Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fui."></SliderCont>
<SliderCont text="Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugia"></SliderCont>
</div>
  </div>
</div>

  </section>
<h1 className='mr-auto ml-auto mt-72 mb-24 text-5xl font-semibold font-serif'>Why Shop with us</h1>
<div className='flex flex-row  gap-10 ml-auto mr-auto mt-5'>
<QualityCont text="This some text to show off services" src="/images/shipping-truck-vehicle-svgrepo-com.svg" title="Shipping"></QualityCont>
<QualityCont text="This some text to show off services" src="/images/free-tag-for-commerce-svgrepo-com(1).svg" title="Free"></QualityCont>
<QualityCont text="This some text to show off services" src="/images/quality-svgrepo-com.svg" title="Best Quality"></QualityCont>
</div>
<section className=' h-[30%] relative bg-[#d4ced0] mt-14 mb-10 overflow-hidden' >
<div className='flex flex-row  w-fit h-fit'>
  <img className="w-[60%] h-[490px] object-cover ml-80 mt-10 " src="/images/arrival-bg.jpg" ></img>
<div className=' flex flex-col w-96 mt-28 ml-[-250px]'>
  <p className='text-6xl text-blue-900 font-semibold'>New Arrivals</p>
  <p className='text-zinc-800 text-base mt-8 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dolor illo eius saepe quaerat deserunt laborum magni praesentium itaque asperiores dolore voluptates quod, suscipit optio explicabo. Sint quos soluta doloribus?
  </p>
</div>
</div>
 

</section>
<section id="Products"
>
<h1 className='mr-auto ml-auto mt-20 mb-20 text-5xl w-fit font-semibold font-serif'>Our Products</h1>
  <div className='flex flex-row flex-wrap w-[1200px] ml-auto mr-auto'>
 <ProductCont src="/images/p1.png" name="Men's shirt" price = "7.65$"/>
 <ProductCont  src="/images/p2.png" name="Men's shirt" price = "7.65$"/>
 <ProductCont  src="/images/p3.png" name="Men's shirt" price = "7.65$"/>
 <ProductCont  src="/images/p4.png" name="Men's shirt" price = "7.65$"/>
 <ProductCont  src="/images/p5.png" name="Men's shirt" price = "7.65$"/>
 <ProductCont  src="/images/p6.png" name="Men's shirt" price = "7.65$"/>
  </div>
  <div className='w-fit bg-red-500 shadow-md rounded-sm active:shadow-none px-8 py-2 text-base text-white mt-14 mr-auto ml-auto' ><Link href="/products">View all products</Link></div>
</section>
<section>
  <div className='text-5xl font-semibold font-serif w-fit mr-auto ml-auto mt-10 mb-10 '>Customers{" ' "} Testimonial</div>
 <div className='flex flex-row gap-16 w-fit ml-auto mr-auto'>
  <Testimonial name="Olivia Daamsguard" position="CEO at lorem ipsum"></Testimonial>
  <Testimonial name="Cynthia D'Alembert" position="Designer at lorem ipsum" ></Testimonial>
  <Testimonial name="Cynthia D'Alembert" position="Designer at lorem ipsum" ></Testimonial>

 </div>
</section>
<section className=' bg-[#d4ced0] mt-10'>
  <div className='w-fit h-72 p-10 mt-10 mb-10 ml-auto mr-auto flex flex-col content-center gap-8'>
    <h2 className='text-blue-800 text-6xl font-serif'> Subscribe to get discount offers</h2>
    <input type="email" className='w-96 rounded-full border-none h-9 ml-auto mr-auto pl-4 ' placeholder='Email '></input>
   <button className='w-40 h-fit bg-red-500 pt-3 pb-3 pl-3 rounded-full text-center text-white ml-auto mr-auto shadow-md active:shadow-none font-medium'>Subscribe</button>
  </div>
</section>

<Footer></Footer>
</div>   

)
}
