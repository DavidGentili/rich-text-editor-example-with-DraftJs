import React from 'react'

const ModalContainer = ({children, title, closeModal, extraClassName}) => {
    return (
        <section className='modalContainer'>
            <div className={`modalWindow ${extraClassName ? extraClassName : ''}`}>

                <div className="headerModal">
                    <h4>{title}</h4>
                    <button onClick={closeModal}> x </button>
                </div>

                { children }
            </div>
        </section >
    )
}

export default ModalContainer