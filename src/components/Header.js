import React from 'react'
import {MdArrowBack} from 'react-icons/md'

const Header=({title,back,history})=>{
    return (
            <div className="header">
               
                {back &&(
                 <div className="go-back" onClick={()=>{history.goBack()}}>
                     <MdArrowBack className="arrow-back-icon"/>
                     <h6>Voltar</h6>
                </div>
                )}
                <h4 className="title">{title}</h4>
            </div>
    );
}

export default Header;