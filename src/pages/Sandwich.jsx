import React from 'react'
import Cards from '../components/sandwich/Cards'
import Precision from '../components/sandwich/Precision'
import { Outlet, useOutlet } from 'react-router-dom'

const Sandwich = () => {
  const outlet = useOutlet();
  return (
    <>
      {!outlet ?
        <>
          <Cards />
          <Precision />
        </>
        :
        <Outlet />
      }
    </>
  )
}

export default Sandwich