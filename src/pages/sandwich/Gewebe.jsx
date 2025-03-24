import React, { useEffect, useRef, useState } from 'react'
import ImageSection from '../../components/sandwich/configurator/ImageSection'
import BackTo from '../../components/sandwich/configurator/BackTo'
import Type from '../../components/sandwich/configurator/Type'
import Configurator from '../../components/sandwich/configurator/Configurator'

import gewebeDefault from '../../assets/images/sandwich/panels/gewebe/gewebe.webp'
import fillings from '../../data/fillingsGewebe'
import Description from '../../components/sandwich/configurator/Description'
import Dialog from '../../components/sandwich/configurator/Dialog'

const aboutPanel = {
  title: "Gewebe",
  desc: "Płyta warstwowa do zabudowy nadwozi, w skład której wchodzi laminat poliestrowy, wzmacniany włóknem szklanym o niejednorodnej strukturze, oraz wysokiej jakości wypełnienie.",
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
  const dialogRef = useRef();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

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

      <Dialog isDialogOpen={isDialogOpen} dialogRef={dialogRef} selectedCore={selectedCore} selectedFilling={selectedFilling} closeDialog={closeDialog} type={aboutPanel.title} />
    </>
  )
}

export default Gewebe