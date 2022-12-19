import React from 'react'
import ModalContainer from './ModalContainer'


const ModalLink = ({ callback, closeModal }) => {

    const eventSubmit = (e) => {
        e.preventDefault
        const {link, text} = Object.fromEntries(new FormData(e.target))
        closeModal();
        callback(link, text);
    }

    return (
        <form onSubmit={eventSubmit}>
            <p>Ingrese un link</p>
            <input type="text" name='link' placeholder='Url...'/>
            <input type="text" name='text' placeholder='Texto a mostar' />
            <button type='submit'> Agregar </button>
        </form>
    )
}

const ModalMedia = ({ callback, type, closeModal }) => {

    const eventSubmit = (e) => {
        e.preventDefault
        const {link, text} = Object.fromEntries(new FormData(e.target))
        closeModal();
        callback(link, text);
    }

    return (
        <form onSubmit={eventSubmit}>
            <p>Ingrese el link del {type}</p>
            <input type="text" name='link' placeholder='Url...'/>
            <input type="text" name='text' placeholder='Texto alternativo...' />
            <button type='submit'> Agregar </button>
        </form>
    )
}

const Modal = ({ closeModal, type, callback }) => {

    let children = undefined;

    if(type === 'link') children = <ModalLink {...{callback, closeModal}} />
    if(type === 'image' || type === 'audio' || type === 'video') children = <ModalMedia {...{callback, type, closeModal}} />
    

    return (
        <ModalContainer closeModal={closeModal} title={`Agregar ${type}`}>
            {children}
        </ModalContainer>
    )
}

export default Modal