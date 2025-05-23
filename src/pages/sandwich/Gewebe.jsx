import React, { useEffect, useRef, useState } from 'react'
import ImageSection from '../../components/sandwich/configurator/ImageSection'
import BackTo from '../../components/sandwich/configurator/BackTo'
import Type from '../../components/sandwich/configurator/Type'
import Configurator from '../../components/sandwich/configurator/Configurator'

import gewebeDefault from '../../assets/images/sandwich/panels/gewebe/gewebe.webp'
import fillings from '../../data/fillingsGewebe'
import Description from '../../components/sandwich/configurator/Description'
import Dialog from '../../components/sandwich/configurator/Dialog'
import CallToAction from '../../components/CallToAction'

const aboutPanel = {
  title: "Gewebe",
  titleAbout: "Panel Gewebe - Płyta Warstwowa do Zabudowy Nadwozi",
  desc: "Panel Gewebe do zabudowy nadwozi to idealny wybór dla Twoich projektów. Ta nowoczesna płyta warstwowa składa się z laminatu poliestrowego, wzmacnianego włóknem szklanym o niejednorodnej strukturze, oraz wysokiej jakości wypełnienia.",
  standardThickness: "Standardowa grubość laminatu to 1.5 - 2 mm.",
  maxSize: "Maksymalna możliwa wielkość panela to 3 m x 9.5 m.",
  outerCoating: [
    {
      content: "Laminat poliestrowo-szklany ma zastosowanie wewnątrz oraz na zewnątrz zabudów."
    },
    {
      content: "Łączy w sobie wyjątkową odporność na uderzenia i wytrzymałość z bardzo niską wagą, a także ma atrakcyjną wizualnie i łatwą do czyszczenia powierzchnię."
    },
    {
      content: "Posiada wysoką odporność na uderzenia przy niewielkiej wadze, jak również doskonałą wytrzymałość na zginanie i rozciąganie."
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
      content: "PP 15-50mm, 60 - 80kg kg/m3",
    }
  ]
}

const Gewebe = () => {
  const [selectedFilling, setSelectedFilling] = useState(null);
  const [selectedCore, setSelectedCore] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const dialogRef = useRef();

  const selectedFillingObject = fillings.find(filling => filling.title === selectedFilling);

  const selectedImage = selectedFillingObject
    ? selectedCore
      ? selectedFillingObject.cores.find(core => core.thickness === selectedCore)?.imgFull || gewebeDefault
      : selectedFillingObject.imgFull || gewebeDefault
    : gewebeDefault;

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

            <ImageSection selectedImage={selectedImage} altImg="Powiększone zdjęcie wybranego panelu Gewebe z konfiguratora" />

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

export default Gewebe