import React, { useState } from 'react';

import './App.css'
import ModalContext from './context/ModalContext';
import RichTextEditor from './richTextEditor/RichTextEditor';
import Modal from './Modal';
import { useEffect } from 'react';

const initialValue = '<p>that´s a message</p><p>lorem ipsum</p><blockquote>Una cita muy elegante</blockquote><p>lalalalala</p><p>otherrrrscas</p><ul><li dir = "auto">Elemento 1</li><li dir = "auto">Elemento 2</li><li dir = "auto">Elemento 3</li></ul><p><strong>ESTA ES LA ULTIMA LINEA DEL TEXTO</strong></p><p>Mentira</p><p>&nbsp;</p><p></p><img src="https://c4.wallpaperflare.com/wallpaper/586/603/742/minimalism-4k-for-mac-desktop-wallpaper-preview.jpg" style="width : 100%; heigth: auto;"  /><p></p><p></p><video src="https://static.pexels.com/lib/videos/free-videos.mp4" style="width : 100%; heigth: auto;" controls> </video><p></p><p></p><p></p><p></p><audio src="https://cdn.videvo.net/videvo_files/audio/premium/audio0137/watermarked/mi_explosion_03_hpx_preview.mp3" style="width : 100%; heigth: auto;" controls> </audio><p></p><p></p><a href="https://google.com/" target="_blank" rel="noopener noreferrer">https://google.com/</a><p></p><p>FIN</p>'



const initialModal = {
    type : undefined,
    callback : undefined,
}

function App() {

    const [value, setValue] = useState(initialValue);
    const [message, setMessage] = useState('');
    const [modal, setModal] = useState(initialModal)

    const canOpenModal = () => modal.callback && modal.type; 


    const copyOutput = () => {
        navigator.clipboard.writeText(value)
        .then(() => {
            setMessage('Texto copiado con exito')
            setTimeout(() => { setMessage('') }, 5000);
        })
    }   

    const closeModal = (e) => {
        setModal({callback : undefined, type : undefined});
    }

    
    const messageClassName = `message ${message.length > 0 ? 'show' : ''}`;


    return (
        <div className="App">
            <ModalContext.Provider value={setModal} >
                <RichTextEditor {...{value, setValue}}/>
                <p className={messageClassName}>{message}</p>
                <div className='output' onClick={copyOutput}>{ value }</div> 
                { canOpenModal() && <Modal {...{closeModal, ...modal}}/>}
            </ModalContext.Provider>
        </div>
    )
}

export default App
