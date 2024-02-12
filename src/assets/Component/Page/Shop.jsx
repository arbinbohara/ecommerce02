import React from 'react'
import HeroA from '../Hero/HeroA'
import Popular from '../Popular/Popular'
import Offers from '../Offers/Offers'
import NewCollections from '../NewCollections/NewCollections'
import Newsletter from '../NewsLetter/Newsletter'

function Shop() {
  return (
    <div>
      <HeroA/>
      <Popular/>
      <Offers/>
      <NewCollections/>
      <Newsletter/>
    </div>
  )
}

export default Shop
