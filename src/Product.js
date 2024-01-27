export default function Product(props) {
    return (
         <div id="box" className="flex flex-col items-center justify-between hover:scale-110 hover:shadow-2xl shadow-black transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 mr-5 rounded-xl ">
      <div>
        <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">{props.title}</p>
      </div>
      <div>
        <p className="w-40 font-normal text-[10px] text-left text-gray-500 " >{props.description.split(" ").slice(0,10).join(" ") + "..." }</p>
      </div>
      <div className="h-[250px]">
        <img src={`${props.image}`} className="h-full w-full"></img>
        </div>
        
        <button className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white  transition duration-300 ease-in " >VIEW</button>
    
</div>

      

    )
}
