import React from 'react';
import './CustomModal.scss';

const CustomModal = (props: any) => {
    return (
        <div className="masterOverlay">
            <div className='overlay' />
            <div className='modalContainer'>
                <div className="modalHeader">
                    <h3>{props.title}</h3>
                    <span onClick = {() => props.callback(false)}>close</span>
                </div>
                <div className="modalBody">
                    {props.children}
                </div>
                <div className="modalFooter">
                    <span></span>
                </div>
            </div>
        </div>
        
    );
}

export default CustomModal;