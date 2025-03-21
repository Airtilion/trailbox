import React, { useEffect, useState } from 'react'
import ImageSection from '../../components/sandwich/configurator/ImageSection'
import BackTo from '../../components/sandwich/configurator/BackTo'
import Type from '../../components/sandwich/configurator/Type'
import Configurator from '../../components/sandwich/configurator/Configurator'

import waterRainDefault from '../../assets/images/sandwich/panels/water-rain/water-rain.webp'
import fillings from '../../data/fillingsWaterRain'
import Description from '../../components/sandwich/configurator/Description'

const aboutPanel = {
  title: "Water Rain Drop Effect",
  desc: "Płyta warstwowa do zabudowy nadwozi, w skład której wchodzi laminat poliestrowy w połysku, wzmacniany włóknem szklanym, oraz wysokiej jakości wypełnienie.",
  standardThickness: "Standardowa grubość laminatu to 1.7 mm.",
  maxSize: "Maksymalna możliwa wielkość panela to 3 m x 9.5 m.",
  outerCoating: [
    {
      content: "Laminat poliestrowo-szklany ma zastosowanie wewnątrz oraz na zewnątrz zabudów."
    },
    {
      content: "Materiał ten posiada strukturę przypominającą krople wody."
    },
    {
      content: "Cechuje się wysoką odpornością na uderzenia."
    }
  ],
  filling: [
    {
      content: "XPS 16-100mm, 30 - 40 kg/m3",
    },
    {
      content: "PET 10-50mm, 70 - 250kg kg/m3",
    },
    {
      content: "Plaster miodu 5-25mm, 60 - 80kg kg/m3",
    },
    {
      content: "PP 15-50mm, 80kg kg/m3",
    }
  ]
}

const WaterRain = () => {
  const [selectedFilling, setSelectedFilling] = useState(null);
  const [selectedCore, setSelectedCore] = useState(null);

  const selectedFillingObject = fillings.find(filling => filling.title === selectedFilling);

  const selectedImage = selectedFillingObject
    ? selectedCore
      ? selectedFillingObject.cores.find(core => core.thickness === selectedCore)?.imgFull || waterRainDefault 
      : selectedFillingObject.imgFull || waterRainDefault 
    : waterRainDefault ;

  useEffect(() => {
    setSelectedCore(null);
  }, [selectedFilling]);

  return (
    <>
      <section>
        <div className='w-[1130px] mx-auto max-xl:w-[1000px] max-lg:w-[90%] max-lg:mb-[87px]'>
          <div className='max-w-max'>
            <BackTo />
          </div>

          <div className='mt-[32px] flex gap-[64px] max-lg:flex-col max-lg:items-center'>

            <ImageSection selectedImage={selectedImage} />

            <div className='relative w-[415px] max-lg:w-full'>

              <Type title={aboutPanel.title} />
              <Configurator fillings={fillings} selectedFilling={selectedFilling} setSelectedFilling={setSelectedFilling} selectedCore={selectedCore} setSelectedCore={setSelectedCore} selectedFillingObject={selectedFillingObject} />

            </div>

          </div>

        </div>
      </section>

      <section className='mt-[32px] py-[64px] bg-[#F3F7F8]'>
        <div className='w-[1130px] mx-auto max-xl:w-[1000px] max-lg:w-[90%]'>
          <Description aboutPanel={aboutPanel} />
        </div>
      </section>
    </>
  )
}

export default WaterRain