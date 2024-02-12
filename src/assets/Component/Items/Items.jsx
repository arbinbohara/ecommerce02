import React from 'react'
import './Items.scss'
import { Link } from 'react-router-dom'

function Items(props) {
  return (
    <div className='item'>
      
        <Link  to={`/product/${props.id}`}><img onClick={window.scroll(0,0)} src={props.image} alt=''/></Link>
       
      <p>{props.name}</p>
      <div className="item-price">
        <div className="item-price-new">
          ${props.new_price}
        </div>
        <div className="item-price-old">
          ${props.old_price}
        </div>
      </div>

    </div>
  )
}

export default Items



