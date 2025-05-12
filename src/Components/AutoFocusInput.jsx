import React, { useEffect, useRef } from 'react'
import Container from './Container';

const AutoFocusInput=() => {
    const inputRef = useRef(null);
    useEffect(()=>{
        inputRef.current.focus();

    },[]);
  return (
   <>
   <Container>
   <input ref={inputRef} type="text" placeholder='Focus on Load' className='bg-red-400' />
   </Container>
   </>
  )
}

export default AutoFocusInput