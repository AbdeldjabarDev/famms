import { useRef } from "react";

export default function ProductCont(props)
{
    const ImageRef = useRef();
    return (<div className="relative flex flex-row flex-wrap w-72 h-80 ml-8 mr-8 mt-8 shadow-md rounded-md overflow-hidden bg-zinc-100"
    onMouseEnter={(e)=>{
        let l = e.currentTarget.childElementCount;
        e.currentTarget.children[l-1].style.transition = "transform .7s";
        ImageRef.current.style.transition = "transform .5s"
        ImageRef.current.style.transform = "scale(1.25)"
        e.currentTarget.children[l-1].style.transform = "translateY(-100%)"
        e.currentTarget.children[l-1].style.backgroundColor = "rgba(255,255,255,0.6)"
        }}
    onMouseLeave={(e)=>{
    let l = e.currentTarget.childElementCount;
    ImageRef.current.style.transition = "transform .5s"
    ImageRef.current.style.transform = "scale(1)"
    e.currentTarget.children[l-1].style.transform = "translateY(0%)";
   
}}
    >
        <div className="w-72 h-[88%] ">
        <img className="mr-auto ml-auto mt-10 w-44 h-[75%]"   src={props.src} ref={ImageRef}></img>
        </div>
        <div className="flex flex-row w-fit h-fit gap-16 ml-auto text-lg font-semibold mr-auto bg-zinc-100">
        <p >{props.name}</p>
        <p >{props.price}</p>
        </div>
        
        <div className="flex w-72 h-80 bg-[rgba(ff,fa,fc,0.6)]  flex-col rounded-md" style={{zIndex:"3"}}>
            <div className="mt-auto mb-auto self-center">
            <div 
className="cursor-default border border-red-600 rounded-full w-fit h-fit bg-red-600 hover:bg-transparent hover:text-red-600 text-white ml-auto mr-auto mb-3 p-2">
Add to Cart
</div>
<div className="cursor-default border border-zinc-900 rounded-full w-fit h-fit bg-zinc-900 hover:bg-transparent text-white hover:text-black ml-auto mr-auto  mb-2 p-2">
Buy Now
</div>
            </div>

  </div>
    </div>)
}