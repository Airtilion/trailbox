import React, { useEffect, useRef, useState } from 'react'
import BackTo from '../../components/sandwich/configurator/BackTo'
import ImageSection from '../../components/sandwich/configurator/ImageSection';
import Type from '../../components/sandwich/configurator/Type';
import Configurator from '../../components/sandwich/configurator/Configurator';
import Description from '../../components/sandwich/configurator/Description';
import superPlusDefault from '../../assets/images/sandwich/panels/super-plus/super-plus.webp'

import fillings from '../../data/fillingsSuperPlus'
import CallToAction from '../../components/CallToAction';
import Dialog from '../../components/sandwich/configurator/Dialog';

const aboutPanel = {
  title: "Super Plus",
  titleAbout: "Panel Super Plus - Płyta Warstwowa do Zabudowy Nadwozi",
  desc: "Panel Super Plus do zabudowy nadwozi to idealny wybór dla Twoich projektów. Ta nowoczesna płyta warstwowa składa się z laminatu poliestrowego w połysku, wzmacnianego włóknem szklanym, oraz wysokiej jakości wypełnienia.",
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
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const dialogRef = useRef();

  const selectedFillingObject = fillings.find(filling => filling.title === selectedFilling);

  const selectedImage = selectedFillingObject
    ? selectedCore
      ? selectedFillingObject.cores.find(core => core.thickness === selectedCore)?.imgFull || superPlusDefault
      : selectedFillingObject.imgFull || superPlusDefault
    : superPlusDefault;

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

            <ImageSection selectedImage={selectedImage} altImg="Powiększone zdjęcie wybranego panelu Super Plus z konfiguratora" />

            <div className='relative w-[415px] max-lg:w-full'>

              <Type title={aboutPanel.title} />
              <Configurator fillings={fillings} selectedFilling={selectedFilling} setSelectedFilling={setSelectedFilling} selectedCore={selectedCore} setSelectedCore={setSelectedCore} selectedFillingObject={selectedFillingObject} openDialog={openDialog} titlePanel={aboutPanel.title} />

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

export default SuperPlus