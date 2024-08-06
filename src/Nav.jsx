import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
        
        <div className="nav">
       <div className='imgmain'> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzFcuWyvhOFSxmi5iPoYY7Ym98yyhMwORjlg&s" alt="" className="src" /></div>

                <div className="mainlist">
                    <Link to='./Home'>
                    <div className="list">
button
                    </div>
                    </Link>
                    <Link to='./Home'>
                    <div className="list">
login
                    </div>
                    </Link>
                    <Link to='./Home'>
                    <div className="list">
register
                    </div>
                    </Link>
                    <Link to='./Home'>
                    <div className="list">
home
                    </div>
                    </Link>
                
                </div>
            </div>
    </div>
  )
}

export default Nav