import React from 'react'

const Header = () => {
  return (

    <div className="container m-3  relative top-8 left-40 w-2xl">
            <div className="header flex flex-direction-column ">
                <a href="/">
                    <span className="mr-1 text-gray-600 text-sm font-normal">Home</span>
                    <span className="text-gray-300 mr-1">/</span>
                </a>
                <a href="/" >
                    <span className="mr-1 text-gray-600 text-sm font-normal">Necklaces</span>
                    <span className="text-gray-300 mr-1  ">/</span>
                </a>
                <a href="/" >
                    <span className="mr-1 text-gray-600 text-sm font-normal">Pendant Necklaces</span>
                </a>
            </div>
        </div>
  )
}

export default Header