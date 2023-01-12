import React from 'react'

function DeadInput({command}) {
  return (
    <div className="flex pt-2 text-white font-mono text-[90%] font-semibold">
    <p className="ml-2 flex">
      <p className="text-green-700">
        #ireallyneedajob@ketiyohannes-potato-2001pc
      </p>
      <p className="text-blue-800">~</p>$
    </p>
         <p> &nbsp;{command}</p>
  </div>
  )
}

export default DeadInput