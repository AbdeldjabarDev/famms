export default function QualityCont(props)
{
    return(<div className='w-96 h-64 rounded-md flex flex-col border bg-[#002c3e] text-white'>
    <img src={props.src} width="60" height="60" className='mt-4 ml-auto mr-auto'></img>
    <h3 className='font-bold text-2xl ml-auto mr-auto mt-6 font-serif'>{props.title}</h3>
    <p className='ml-10 mr-10 text-center'>{props.text}</p>
    
  </div>)
}