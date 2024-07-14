import React from 'react'
import Sidebar from './Sidebar'
import Menubar from './Menubar'

export default function Board() {
  return (
    <div className="flex bg-green-board-100 flex-row items-start relative w-full h-screen pt-8">
      <Sidebar />
      <div className="">
        <Menubar />
        {/* <Content /> */}
      </div>
    </div>
  )
}
