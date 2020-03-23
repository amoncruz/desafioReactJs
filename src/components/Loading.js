import React,{useState, useEffect} from 'react'
import {
    Modal,
    ModalBody,
    Spinner
    } from 'reactstrap'
import { useSelector } from 'react-redux';

const Loading=(props)=>{

    const {
        className
      } = props;
    
      const loading = useSelector(state=>state.loading.loading);

      useEffect(()=>{
          
      },[])

    return(
        <>
        <Modal isOpen={loading}  className={className}>
            <ModalBody>
                <h4>Por favor aguarde</h4>
                <Spinner color="primary" />                    
            </ModalBody>
        </Modal>
        </>
    );
}

export default Loading;