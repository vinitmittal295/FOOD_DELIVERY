import React from 'react'

export default function Card(props) {
  let options=props.options
  let priceOptions=Object.keys(options)
  return (
    <div>
      
      <div>
      <div className="card mt-3"  style={{"width": "18rem","maxHeight":"360px"}}>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdtiYeQq82-HVJyUPwtunX9sjyW867mTdKvg&s" className="card-img-top" alt="..." style={{height:"120px",objectFit:"fill"}}/>
  <div className="card-body"> 
    <h5 className="card-title">{props.foodName}</h5>
   <div className='container w-100'>
    <select className='m-2 h-100  bg-success rounded text-white '>
      {
        Array.from(
          Array(6),(e,i)=>{
            return (
              <option key={i+1} value={i+1}>{i+1}</option>
            )
          }
        )
      }
    </select>

    <select className='m-2 h-100  bg-success rounded text-white '>
      {priceOptions.map((data)=>{
        return <option key={data} value={data}>{data}</option>
      })}
    </select>
    <div className='d-inline h-100 fs-5'>
      total price
    </div>
    </div> 
  </div>
</div>
      </div>

    </div>
  )
}
