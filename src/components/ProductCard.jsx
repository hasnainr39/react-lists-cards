import { useState } from "react";

function ProductCard(props){
  const [liked, setliked] = useState(false);
  const [hovered, sethovered] = useState(false);


return(

   <div className="bg-white shadow-lg rounded-xl p-4 hover:shadow-2xl transition-shadow">
      
<img src={props.imageLink} alt="Product Image" className="h-35"/>
<p className="text-lg font-semibold mb-2">{props.name}</p>
<p className="text-sm text-gray-500 italic">{props.price}</p>
<p className="text-sm text-gray-500 italic">{props.description}</p>
<button onClick={props.onBuy} className="bg-blue-600 text-white rounded-sm p-1 hover:bg-blue-950">Buy Now</button>

<button onClick={()=>setliked(!liked)} onMouseEnter={()=> sethovered(true)} onMouseLeave={()=> sethovered(false)} className="text-2xl transition-transform hover:scale-110">{liked ? "❤️":"🤍"}</button>

</div>
)
}

export default ProductCard;