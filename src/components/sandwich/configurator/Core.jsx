import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'

const Core = ({ core, setSelectedCore, selectedCore }) => {
    return (
        <div className='w-[160px] relative cursor-pointer' onClick={() => setSelectedCore(selectedCore === core.thickness ? null : core.thickness)}>
            <img src={core.imgSmall} alt={`Zdjęcie przedstawiające rdzeń o grubości ${core.thickness}mm`} width={160} height={100} loading="lazy" className={`object-cover rounded-[10px] ${selectedCore === core.thickness ? "outline-black outline-[1px]" : ""}`} />
            <p className='mt-[8px] text-[14px] text-center'>{core.thickness}mm</p>

            {selectedCore === core.thickness &&
                <div className='bg-black rounded-full w-[15px] h-[15px] absolute top-[-7.5px] right-[-7.5px]'>
                    <Icon icon="material-symbols:check" width="15" height="15" className='text-white' />
                </div>
            }
        </div>
    )
}

export default Core