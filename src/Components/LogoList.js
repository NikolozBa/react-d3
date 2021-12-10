import React from 'react'
import '../Styles/LogoList.css'
import binator from '../img/binator.svg'
import buyme from '../img/buyme.svg'
import loogipsum from '../img/loogipsum.svg'
import umbrella from '../img/umbrella.svg'
import square from '../img/square.svg'


function LogoList() {
    return (
        <div className='logolist'>
            <img  src={binator}/>
            <img  src={buyme}/>
            <img  src={loogipsum}/>
            <img  src={umbrella}/>
            <img  src={square}/>
        </div>
    )
}

export default LogoList
