import React from 'react'
import Box from './Box'
import containers from '../../data/containers'
import nonStandardBox from '../../assets/icons/containers/nonstandard-box.svg'

const Boxes = () => {
    return (
        <section className='mt-[32px]'>
            {containers.map((element, index) => (
                <Box element={element} index={index} key={index} />
            ))}

            <article className='mt-[48px] bg-[#F3F7F8] py-[48px]'>

            </article>
            
        </section>
    )
}

export default Boxes