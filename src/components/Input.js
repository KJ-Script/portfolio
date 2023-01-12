import React from 'react'

function Input({handleKeyDown}) {
  return (
    <div className="flex pt-2 text-white font-mono text-[90%] font-semibold">
    <p className="ml-2 flex">
      <p className="text-green-700">
        #ireallyneedajob@ketiyohannes-potato-2001pc
      </p>
      <p className="text-blue-800">~</p>$
    </p>
    <input
      onKeyDown={handleKeyDown}
      className="bg-black focus:outline-none ml-1"
    />
  </div>
  )
}

export default Input