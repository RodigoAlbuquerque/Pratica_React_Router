import React from 'react'
import { Link } from 'react-router-dom';
import './index.css'

export default function Header(){
    return(
            <div className='containerSecundario'>
                <nav>
                    <ul className='linkContainer'>
                        <li type='none'><Link className='lnk' to="/vector">Vector</Link></li>
                        <li type='none'><Link className='lnk' to="/photos">Photos</Link></li>
                        <li type='none'><Link className='lnk' to="/psd">PSD</Link></li>
                        <li type='none'><Link className='lnk' to="/videos">Vídeos</Link></li>
                    </ul>
                </nav>
                <button className='sub'>+ Submit</button>
            </div>
        
        
    );
}