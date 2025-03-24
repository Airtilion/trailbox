import React, { useEffect, useRef, useState } from 'react'
import ImageSection from '../../components/sandwich/configurator/ImageSection'
import BackTo from '../../components/sandwich/configurator/BackTo'
import Type from '../../components/sandwich/configurator/Type'
import Configurator from '../../components/sandwich/configurator/Configurator'

import highStrengthExtremeDefault from '../../assets/images/sandwich/panels/high-strength-extreme/high-strength-extreme.webp'
import fillings from '../../data/fillingsHighStrengthExtreme'
import Description from '../../components/sandwich/configurator/Description'
import CallToAction from '../../components/CallToAction'
import Dialog from '../../components/sandwich/configurator/Dialog'

const aboutPanel = {
  title: "High Strength Extreme",
  desc: "Płyta warstwowa do zabudowy nadwozi, w skład której wchodzi najwydajniejszy laminat poliestrowy wzmacniany włóknem szklanym z warstwą tkaniny rowingowej oraz wysokiej jakości pianka XPS.",
  standardThickness: "Standardowa grubość laminatu to 0.9 - 1.4 mm.",
  maxSize: "Maksymalna możliwa wielkość panela to 2.5 m x 9.5 m.",
  outerCoating: [
    {
      content: "Laminat ten ma zastosowanie wewnątrz oraz na zewnątrz zabudów."
    },
    {
      content: "Jest najwydajniejszym laminatem dzięki specjalnej tkaninie rowingowej."
    },
    {
      content: "Charakteryzuje go najwyższa sztywność, wytrzymałość i odporność na czynniki zewnętrzne."
    },
    {
      content: "Szereg zalet sprawia, że laminat ten sprawdza się znakomicie w niemal każdej branży."
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

const HighStrengthExtreme = () => {
  const [selectedFilling, setSelectedFilling] = useState(null);
  const [selectedCore, setSelectedCore] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const dialogRef = useRef();

  const selectedFillingObject = fillings.find(filling => filling.title === selectedFilling);

  const selectedImage = selectedFillingObject
    ? selectedCore
      ? selectedFillingObject.cores.find(core => core.thickness === selectedCore)?.imgFull || highStrengthExtremeDefault
      : selectedFillingObject.imgFull || highStrengthExtremeDefault
    : highStrengthExtremeDefault;

  useEffect(() => {
    setSelectedCore(null);
  }, [selectedFilling]);

  const openDialog = () => {
    if (dialogRef.current) {
      setIsDialogOpen(true);
      dialogRef.current.showModal();
    }
  }

  const closeDialog = () => {
    if (dialogRef.current) {
      setIsDialogOpen(false);
      dialogRef.current.close();
    }
  }

  useEffect(() => {
    if (isDialogOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };

  }, [isDialogOpen])

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
              <Configurator fillings={fillings} selectedFilling={selectedFilling} setSelectedFilling={setSelectedFilling} selectedCore={selectedCore} setSelectedCore={setSelectedCore} selectedFillingObject={selectedFillingObject} openDialog={openDialog} />

            </div>

          </div>

        </div>
      </section>

      <section className='mt-[32px] py-[64px] bg-[#F3F7F8]'>
        <div className='w-[1130px] mx-auto max-xl:w-[1000px] max-lg:w-[90%]'>
          <Description aboutPanel={aboutPanel} />
        </div>
      </section>

      <CallToAction />

      <Dialog isDialogOpen={isDialogOpen} dialogRef={dialogRef} selectedCore={selectedCore} selectedFilling={selectedFilling} closeDialog={closeDialog} type={aboutPanel.title} />
    </>
  )
}

export default HighStrengthExtreme