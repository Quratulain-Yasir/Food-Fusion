import React from 'react'
import { createPortal } from 'react-dom';
import styled from 'styled-components'

const Model = ({ isOpen, children, onClose }) => {
  return createPortal(
    <>
      {isOpen && (
        <>
          <Box1 />
          <Box0>
            {children}
            <div className='d-flex justify-content-end'>
              <span className='fw-medium' onClick={onClose}>Close</span>
            </div>
          </Box0>
        </>
      )}
    </>,
    document.getElementById('model-root')
  )
}

export default Model

const Box0 = styled.div`
  height: 390px;
  width: 400px;
  background :#fdce9e;
  position: fixed;
  z-index: 10; /* Ensure it is above the blur background */
  padding: 19px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  margin: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* Center the modal vertically and horizontally */
  @media(max-width: 768px){

  }
  span{
    &:hover{
      cursor:pointer;
    }
  }
`

const Box1 = styled.div`
  z-index: 5; /* Ensure this stays behind the modal */
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent dark background */
  backdrop-filter: blur(10px); /* Apply blur to the background */
  `

//   [Key Changes
//     Positioning:
    
//     I’ve set both Box0 and Box1 to position: fixed. This ensures they stay in place when scrolling and cover the entire screen when the modal is open.
//     Centering the Modal:
    
//     Box0 (the modal box) is centered on the screen using top: 50%, left: 50%, and transform: translate(-50%, -50%). This ensures that the modal box will always appear in the center of the viewport.
//     Z-Index:
    
//     The z-index of Box0 is set to 10 to ensure that the modal appears above the blurred background (Box1), which has a z-index of 5. You can adjust these values further if needed, but this should now ensure the correct stacking order.
//     Styling:
    
//     The background of Box1 (background-color: rgba(0, 0, 0, 0.5)) creates the semi-transparent dark effect, and the backdrop-filter: blur(10px) applies a blur effect to whatever is behind it (e.g., the page content).
//     Outcome:
//     The blurred background will cover the entire screen with a dark, semi-transparent overlay (Box1).
//     The modal box will be centered and appear on top of the blurred background with the correct z-index (Box0).
//     This setup should now work as you intended.]