import React, { useEffect, useState } from 'react'
import { Icon } from '@iconify/react/dist/iconify.js';

const ImageSection = ({selectedImage, altImg}) => {
    const [zoomPos, setZoomPos] = useState({ x: 50, y: 50 });
    const [isZoomed, setIsZoomed] = useState(false);
    const [isFullScreen, setIsFullScreen] = useState(false);
    const [isImageZoomed, setIsImageZoomed] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const [startPos, setStartPos] = useState({ x: 0, y: 0 });
    const [offset, setOffset] = useState({ x: 0, y: 0 });

    useEffect(() => {
        if (isFullScreen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };

    }, [isFullScreen])

    const handleMouseMove = (e) => {
        const { left, top, width, height } = e.target.getBoundingClientRect();
        const x = ((e.clientX - left) / width) * 100;
        const y = ((e.clientY - top) / height) * 100;
        setZoomPos({ x, y });
        setIsZoomed(true);
    };

    const handleMouseLeave = () => {
        setIsZoomed(false);
    };

    // const handleImageClick = () => {
    //     if (!isImageZoomed) {
    //         setIsImageZoomed(true);
    //     }
    // };

    // const handleMouseDown = (e) => {
    //     if (isImageZoomed) {
    //         setIsDragging(true);
    //         setStartPos({ x: e.clientX, y: e.clientY });
    //     }
    // };

    // const handleMouseMoveDrag = (e) => {
    //     if (isDragging) {
    //         const dx = e.clientX - startPos.x;
    //         const dy = e.clientY - startPos.y;
    //         const newX = Math.min(Math.max(offset.x + dx, -250), 250);
    //         const newY = Math.min(Math.max(offset.y + dy, -250), 250);
    //         setOffset({ x: newX, y: newY });
    //         setStartPos({ x: e.clientX, y: e.clientY });
    //     }
    // };

    return (
        <div className='w-[650px] h-[405px] rounded-[40px] overflow-hidden relative max-xl:w-[550px] max-lg:w-full'>
            <img src={selectedImage} alt={altImg} loading='lazy' className='w-full h-full object-cover transition-transform duration-300'
                style={{ transformOrigin: `${zoomPos.x}% ${zoomPos.y}%`, transform: isZoomed ? "scale(2.5)" : "scale(1)", }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave} />

            <button className='text-[#353432] bg-white rounded-full p-[10px] absolute top-[22px] right-[22px] cursor-pointer shadow-[4px_4px_10px_rgba(0,0,0,0.25)] duration-700 hover:bg-[#898989] hover:text-white' aria-label="Kliknij aby powiększyć zdjęcie"
                onClick={() => setIsFullScreen(true)}
            >
                <Icon icon="ic:baseline-search" width="30" height="30" />
            </button>

            {isFullScreen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 z-80"
                    // onMouseMove={handleMouseMoveDrag}
                    // onMouseDown={handleMouseDown}
                >

                    <img
                        src={selectedImage} alt={altImg}
                        // style={{
                        //     transform: `scale(${isImageZoomed ? 1.5 : 1}) translate(${offset.x}px, ${offset.y}px)`,
                        //     cursor: isImageZoomed ? 'grabbing' : 'zoom-in'
                        // }}
                        // onClick={handleImageClick}
                    />

                    <button onClick={() => { setIsFullScreen(false);}}
                        // setIsImageZoomed(false); setIsDragging(false); setOffset({ x: 0, y: 0 }); }} 
                        aria-label="Kliknij aby zamknąć zdjęcie" className='text-[#353432] bg-white rounded-full p-[10px] absolute top-[16px] right-[16px] cursor-pointer duration-700 hover:bg-[#898989] hover:text-white'>
                        <Icon icon="material-symbols:close-rounded" width="24" height="24" />
                    </button>
                </div>
            )}

        </div>
    )
}

export default ImageSection