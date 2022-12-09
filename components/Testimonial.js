export default function Testimonial(props)
{
return(
    <div className="w-80 h-60 bg-white shadow-lg rounded-md border border-slate-400">
        <div className="w-full ml-2 mr-2 text-black mb-4 mt-8 ">{'"'}Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima, aliquid qui. Ipsa sit, quibusdam tempora nostrum molestia{""}</div>
<div className="flex flex-row gap-10 mt-8 ml-6">
    <img className="rounded-full w-20 h-20" src="/images/client.jpg"></img>
    <div className="flex flex-col mt-4">
<p className="text-slate-700">{props.name}</p>
<p className="text-slate-500">{props.position}</p>
    </div>

</div>

    </div>
)
}