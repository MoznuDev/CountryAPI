import React,{ useRef, useEffect, useState } from 'react'
import Container from './Container';


const FocusBall = () => {
    const ballRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    ballRef.current.focus(); // auto focus on mount
  }, []);

  const handleKeyDown = (e) => {
    setPosition((prev) => {
      let { x, y } = prev;
      if (e.key === 'ArrowRight') x += 20;
      if (e.key === 'ArrowLeft') x -= 20;
      if (e.key === 'ArrowUp') y -= 20;
      if (e.key === 'ArrowDown') y += 20;
      return { x, y };
    });
  };
  return (
   <>
   <Container>
   <div
    ref={ballRef}
    tabIndex={0} // makes div focusable
    onKeyDown={handleKeyDown}
    className="ball"
    style={{
      transform: `translate(${position.x}px, ${position.y}px)`,
    }}
  >
⚽
  </div> 
   </Container>
   </>
    
  )
}

export default FocusBall