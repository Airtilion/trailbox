import React, { useEffect, useState } from 'react'
import BackTo from '../../components/sandwich/configurator/BackTo'
import ImageSection from '../../components/sandwich/configurator/ImageSection';
import Type from '../../components/sandwich/configurator/Type';
import Configurator from '../../components/sandwich/configurator/Configurator';
import Description from '../../components/sandwich/configurator/Description';
import superPlusDefault from '../../assets/images/sandwich/panels/super-plus/super-plus.webp'

import fillings from '../../data/fillingsSuperPlus'

const aboutPanel = {
  title: "Super Plus",
  desc: "Płyta warstwowa do zabudowy nadwozi, w skład której wchodzi laminat poliestrowy wzmacniany włóknem szklanym oraz wysokiej jakości wypełnienie.",
  standardThickness: "Standardowa grubość laminatu to 1 mm, 1.5 mm oraz 2 mm.",
  maxSize: "Maksymalna możliwa wielkość panela to 3 m x 9.5 m.",
  outerCoating: [
    {
      content: "Laminat poliestrowo-szklany ma zastosowanie wewnątrz oraz na zewnątrz zabudów."
    },
    {
      content: "Posiada bardzo estetyczną powierzchnię pod względem optycznym."
    },
    {
      content: "Zewnętrzna warstwa żelkotu pokrywająca laminat zabezpiecza produkt przed wpływem promieniowania UV, oddziaływaniem czynników atmosferycznych oraz chemikaliami."
    },
    {
      content: "Dodatkowo powierzchnia żelkotowa może zostać wzbogacona o efekt antybakteryjny."
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

const SuperPlus = () => {
  const [selectedFilling, setSelectedFilling] = useState(null);
  const [selectedCore, setSelectedCore] = useState(null);

  const selectedFillingObject = fillings.find(filling => filling.title === selectedFilling);

  const selectedImage = selectedFillingObject
    ? selectedCore
      ? selectedFillingObject.cores.find(core => core.thickness === selectedCore)?.imgFull || superPlusDefault
      : selectedFillingObject.imgFull || superPlusDefault
    : superPlusDefault;

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

export default SuperPlus