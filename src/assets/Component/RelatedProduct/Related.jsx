import React from 'react'
import "./Related.scss";
import data_product from '../../Gallery/data'
import Items from '../Items/Items';
function Related() {
  return (
    <div className='Related-Product'>
    <h1>Related Products</h1>
    <hr/>
    <div className="related-items">
      {data_product.map((item,i)=>{
        return <Items key={i}
        id={item.id}
        name={item.name}
        image={item.image}
        new_price={item.new_price}
        old_price={item.old_price}/>

      })}

    </div>
    </div>
  )
}

export default Related