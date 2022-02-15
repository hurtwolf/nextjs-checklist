import React from 'react'

type Props = {}

function Spinner({}: Props) {
  return (
    <div className="w-12 h-12 border-4 border-white rounded-full border-r-transparent animate-spin ease-in-out"></div>
  )
}

export default Spinner