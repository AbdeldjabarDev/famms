import Nav from "../components/Nav";
import Footer from "../components/Footer";
export default function Contact(props)
{
    return(
        <div>
            <Nav></Nav>
              <div className="flex flex-col gap-10">
<div className="w-full h-40 bg-red-500 flex flex-col ">
    <p className="text-white w-fit mr-auto ml-auto mb-auto mt-auto text-5xl font-bold">Contact Us</p>
</div>
<div className="flex flex-col w-fit gap-10 ml-auto mr-auto content-center pb-20">
    <input  className="w-[500px] h-16 border border-slate-500 rounded-sm pl-3"    type="text" placeholder="Enter your full name"></input>
    <input  className="w-[500px] h-16 border border-slate-500 rounded-sm pl-3"    type="email" placeholder="Enter your email"></input>
    <input  className="w-[500px] h-16 border border-slate-500 rounded-sm pl-3"    type="text" placeholder="Enter the subject"></input>
    <textarea className="w-[500px] h-[300px] resize-none border border-slate-500 pl-3" placeholder="Write your message here"></textarea>



</div>
    </div>  
    <Footer></Footer>
        </div>
)
}