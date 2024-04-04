import React from 'react'
import ResponsiveDrawer from '../../components/Navigation/ResponsiveDrawer.jsx.jsx'
import CardsGrid from '@/app/components/ProposalCards/CardsGrid.jsx'

export default function Marketplace() {

  return (
    <ResponsiveDrawer>
        <CardsGrid />    
    </ResponsiveDrawer>    
  )
}
