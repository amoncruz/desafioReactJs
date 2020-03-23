import React from 'react';
import { ToastContainer} from 'react-toastify';
import Routes from './routes';
import Loading from './components/Loading';

const App=()=>{
    return(
        <>
            <Routes/>
            <ToastContainer autoClose={2000}/>
            <Loading/>
        </>
    )
}

export default App;