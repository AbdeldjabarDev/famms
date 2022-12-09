import { createRef, useEffect, useRef, useState } from "react"

export default function Carousel(props)
{
    let parentRef = useRef();
    let dotListRef = useRef();
    let [x,setX] = useState(0);
  let slideRight = ()=>{
    if(x == 2)
    {
setX(0)
return;
    }
setX(x+1);
  }
  let slideLeft = ()=>{
    if(x == 0)
    {
setX(0)
return;
    }
setX(x-1);
  }
   // setTimeout(setInterval(slideRight,3000),1000);
   /* setTimeout(()=>{setInterval(()=>
        {
            let x)
    parentRef.current.style.transition ="transform" +props.delay + "s";
    parentRef.current.style.transform = "translateX(100%)";
    let x)
        },props.interval)},1000);*/
   
    return(
        <div className="flex flex-col">
 <div className="w-[60%] overflow-hidden mr-auto ml-auto">
<div className="w-[300%] h-[25vh] flex flex-row overflow-hidden mr-auto ml-auto mt-10 mb-10 border border-black" ref={parentRef} style={{
      width: `${3 * 100}%`,
      display: "flex",
      transform: `translateX(-${x * (1 / 3) * 100}%)`,
      transition: "transform .4s ease-out"
    }}>
    <div className="bg-red-500   w-[100%] h-full" onMouseEnter={(e)=>{}}></div>
    <div className="bg-green-500 w-[100%] h-full" onMouseEnter={(e)=>{}}></div>
    <div className="bg-blue-500  w-[100%] h-full" onMouseEnter={(e)=>{}}></div>

    </div>
    </div>
    <div className="flex flex-row gap-10" >
    <div className="w-4 h-4 bg-zinc-900"    onClick={()=>slideLeft()}></div>
    <div className="w-4 h-4 bg-orange-800"  onClick={()=>slideRight()}></div>
    <div>{x}</div>
    </div>
   </div>
    
   )
}