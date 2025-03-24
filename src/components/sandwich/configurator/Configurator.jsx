import React, { useState } from 'react'
import Filling from './Filling'
import Core from './Core'
import RequestButton from './RequestButton'
import { Icon } from '@iconify/react/dist/iconify.js'

const Configurator = ({ fillings, selectedFilling, setSelectedFilling, selectedCore, setSelectedCore, selectedFillingObject, openDialog }) => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const handleToggleCollapse = () => {
        setIsCollapsed(prev => !prev);
    };
    return (
        <article className='w-[415px] rounded-[20px] px-[36px] py-[10px] bg-white shadow-[4px_4px_20px_rgba(0,0,0,0.4)] absolute top-[95px] max-lg:relative max-lg:top-0 max-lg:mt-[32px] max-lg:w-full'>
            <div className='flex items-center justify-between text-[#696969] cursor-pointer' onClick={handleToggleCollapse}>
                <p className='text-[18px]'>Konfiguracja</p>
                <Icon icon="mingcute:down-line" width="20" height="20" className={`transition-transform duration-500 ${isCollapsed ? 'rotate-180' : ''}`} />
            </div>
            <hr className='mt-[8px] w-full border-[#D4D4D4]' />

            <div className={`duration-700 overflow-hidden ${isCollapsed ? "max-h-0" : "max-h-[845px] overflow-y-auto mr-[-16px] max-xl:mr-[0px] max-xl:max-h-max"}`}>

                <div className='mt-[8px]'>
                    <p className='text-[16px] text-[#696969] max-lg:text-center'>Wypełnienie</p>

                    <div className='mt-[8px] flex flex-wrap w-[340px] gap-[16px] ml-[1px] max-xl:ml-0 max-xl:w-full max-xl:justify-center'>
                        {fillings.map((filling, index) => (
                            <Filling filling={filling} key={index} selectedFilling={selectedFilling} setSelectedFilling={setSelectedFilling} />
                        ))}
                    </div>
                </div>

                {selectedFillingObject && (
                    <div className='mt-[16px] pb-[8px]'>
                        <p className='text-[16px] text-[#696969] max-lg:text-center'>Grubość rdzenia ({selectedFilling})</p>

                        <div className='mt-[8px] flex flex-wrap w-[340px] gap-[16px] ml-[1px] max-xl:ml-0 max-xl:w-full max-xl:justify-center'>
                            {selectedFillingObject.cores.map((core, index) => (
                                <Core core={core} key={index} selectedCore={selectedCore} setSelectedCore={setSelectedCore} />
                            ))}
                        </div>
                    </div>
                )}

            </div>

            <RequestButton openDialog={openDialog} selectedFilling={selectedFilling} selectedCore={selectedCore} />
        </article>
    )
}

export default Configurator