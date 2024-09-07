import React from "react";


const Card = (props) => (
<div className="shadow-lg bg-blue-500">
<img c src={`/image/${props.image}`} alt={props.name} className="w-full h-72 object-cover"/>
<div className="px-2">
<h3 className="card-title">{props.name}</h3>
<p className="card-price">ระยะเวลา (วัน) {props.time} วัน</p>
<span className="card-price">{props.price}</span>
</div>
</div>
);
export default Card;