import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'

const Filling = ({ filling, selectedFilling, setSelectedFilling }) => {
    return (
        <div className='w-[160px] relative cursor-pointer' onClick={() => setSelectedFilling(selectedFilling === filling.title ? null : filling.title)}>
            <img src={filling.imgSmall} alt={filling.imgAlt} width={160} height={100} loading="lazy" className={`object-cover rounded-[10px] ${selectedFilling === filling.title ? "outline-black outline-[1px]" : ""}`} />
            <p className='mt-[8px] text-[14px] text-center'>{filling.title}</p>

            {selectedFilling === filling.title &&
                <div className='bg-black rounded-full w-[15px] h-[15px] absolute top-[-7.5px] right-[-7.5px]'>
                    <Icon icon="material-symbols:check" width="15" height="15" className='text-white' />
                </div>
            }
        </div>
    )
}

export default Filling