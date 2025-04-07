import React from 'react'

const Description = ({ aboutPanel }) => {
    return (
        <article className='w-[650px] max-xl:w-[500px] max-lg:w-full'>
            <h3 className='text-[25px] font-semibold max-sm:text-[20px]'>Panel {aboutPanel.titleAbout}</h3>
            <p className='mt-[8px] text-[16px] max-sm:text-[14px]'>{aboutPanel.desc}</p>
            <div className='mt-[8px] text-[16px] max-sm:text-[14px]'>
                <p>{aboutPanel.standardThickness}</p>
                <p>{aboutPanel.maxSize}</p>
            </div>

            <div className='mt-[16px]'>
                <h4 className='text-[20px] font-semibold max-sm:text-[18px]'>Powłowka zewnętrzna</h4>
                <ul className='mt-[16px] list-disc pl-[24px] max-sm:text-[14px]'>
                    {aboutPanel.outerCoating.map((element, index) => (
                        <li key={index}>{element.content}</li>
                    ))}
                </ul>
            </div>

            <div className='mt-[16px]'>
                <h4 className='text-[20px] font-semibold'>Wypełnienie</h4>
                <ul className='mt-[16px] list-disc pl-[24px] max-sm:text-[14px]'>
                    {aboutPanel.filling.map((element, index) => (
                        <li key={index}>{element.content}</li>
                    ))}
                </ul>
            </div>
        </article>
    )
}

export default Description