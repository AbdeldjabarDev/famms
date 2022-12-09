export default function SliderCont(props)
{
    return(
        <div className='w-full h-full flex flex-col '>
        <span className='text-red-500 text-6xl font-semibold font-serif' >Sale 20% Off</span>
        <br></br>
        <span className='text-blue-900 text-6xl font-semibold font-serif'>On Everything</span>
        <p className='text-base mt-8 mb-4'> {props.text}
       </p>
        <button className='w-36 bg-red-500 shadow-md rounded-sm active:shadow-none px-8 py-2 text-base mr-auto ml-auto' >Shop now</button>
        <div className='flex flex-row mt-8'>
          <div className='w-6 h-6 rounded-full bg-red-800 m-1'></div>
          <div className='w-6 h-6 rounded-full bg-white m-1'></div>
          <div className='w-6 h-6 rounded-full bg-white m-1'></div>
        </div>
      </div>)
}