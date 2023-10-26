import React from 'react'

type Props = {
    label: string;
}

const Button = ({label}: Props) => {
  return (
    <button className='px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-300 hover:bg-indigo-700 hover:text-white'>
    {label}
    </button>
  )
}

export default Button