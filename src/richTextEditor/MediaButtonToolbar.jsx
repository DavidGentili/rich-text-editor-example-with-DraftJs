import React, { useState } from 'react'
import useModal from '../hooks/useModal'

const MediaButtonToolbar = ({ icon, type, addMedia }) => {


    const setModal = useModal();

    const openModal = () => {
        const callback = (url, text) => {
            addMedia(type, url, text)
        }
        
        setModal({
            type,
            callback,
        })
    }

    return (
        <>
            <button onClick={openModal} >{icon}</button>

        </>
        
    )
}

export default MediaButtonToolbar