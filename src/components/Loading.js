import React,{useState, useEffect} from 'react'
import {
    Modal,
    ModalBody,
    Spinner
    } from 'reactstrap'
import { useSelector, useDispatch } from 'react-redux';
import * as Action from '../redux/actions/constants'

const Loading=(props)=>{

    const {
        className
      } = props;
    
      const loading = useSelector(state=>state.loading.loading);
      const dispatch =useDispatch();

      useEffect(()=>{

        setTimeout(()=>{

            if(loading===true){
                dispatch({type:Action.TOGGLE_LOADING});
            }

        },8000)
         
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