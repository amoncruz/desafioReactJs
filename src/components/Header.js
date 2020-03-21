import React from 'react'
import {MdArrowBack} from 'react-icons/md'

const Header=({title,back})=>{
    return (
            <div className="header">
               
                {back &&(
                 <div className="go-back">
                     <MdArrowBack className="arrow-back-icon"/>
                     <h6>Voltar</h6>
                </div>
                )}
                
                
                <h4 className="title">{title}</h4>
            </div>
    );
}

export default Header;