import React, { Fragment } from 'react'
import './index.css'
export default function Square ({ value }) {
  return (
    <>
      <button className='square'>
        {value}
      </button>
    </>
  )
}
