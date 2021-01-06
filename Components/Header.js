import React from 'react';
import './Header.css'
import {Link} from 'react-router-dom';


function Header() {
    return (
        <div className="header">
            <h1 className='header_logo'>logo</h1>
            <ul>
                    <li className='nav_links'><Link className='link'>Home</Link></li>
                    <li className='nav_links'><Link className='link'>portfolio</Link></li>
                    <li className='nav_links'><Link className='link'>contact</Link></li>
                    <li className='nav_links'><Link className='link'>about</Link></li>
                    <li className='nav_links'><Link className='link log'>login</Link></li>
             </ul>

            
        </div>
    )
}

export default Header
