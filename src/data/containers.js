import standardBox from '../assets/icons/containers/standard-box.svg'
import izoBox from '../assets/icons/containers/izo-box.svg'
import termoBox from '../assets/icons/containers/termo-box.svg'
import bgBlackGray from '../assets/images/containers/bg-black-gray.webp'
import bgLightGray from '../assets/images/containers/bg-light-gray.webp'

const containers = [
    {
        title: "StandardBOX",
        descriptions: [
            {
                desc: "Zestaw kontenerowy Standard-BOX składa się z wykonanych przez nas paneli, kompletu profili oraz wszystkich potrzebnych elementów złącznych niezbędnych do samodzielnego montażu.",
                type: "right",
                width: "max",
            },
            {
                desc: "W celu sprostania Państwa oczekiwaniom zestaw kontenerowy wykonujemy rownież wstępnie zmontowany: z wklejonymi profilami obwodowymi, zmontowaną ramą, portalem oraz drzwiami.",
                type: "left",
                width: "max",
            }
        ],
        dimensions: "Maksymalne wymiary jednej ściany kontenerowej to 8,5 x 2,9 m.",
        use: "W transporcie drogowym bądź w budownictwie, w obszarach niewymagających utrzymania odpowiedniej temperatury wewnątrz kontenera.",
        icon: standardBox,
        image: bgBlackGray,
    },
    {
        title: "IzoBOX",
        descriptions: [
            {
                desc: "Zestaw kontenerowy Izo-BOX składa się z wykonanych przez nas paneli termoizolujących, kompletu profili, drzwi, podłogi oraz wszystkich potrzebnych elementów złącznych niezbędnych do samodzielnego montażu.",
                type: "left",
                width: "max",
            },
            {
                desc: "Zabudowa kontenerowa izotermiczna jest produktem, który charakteryzuje termoizolacja. Oznacza to, że wewnątrz izotermy występuje stabilna temperatura dodatnia w przedziale od 0°C do nawet 20°C.",
                type: "left",
                width: "full",
            },
            {
                desc: "W celu uzyskania jeszcze wyższej temperatury montowane jest urządzenie grzewcze w części ładunkowej zabudowy.",
                type: "left",
                width: "full",
            },
            {
                desc: "Zestaw kontenerowy izotermiczny wykonujemy również wstępnie zmontowany: z wklejonymi profilami obwodowymi, zmontowaną ramą, portalem oraz drzwiami.",
                type: "max",
            }
        ],
        dimensions: "Maksymalne wymiary jednej ściany kontenerowej izotermicznej to 8,5 m x 2,9 m.",
        use: "Krótkie i średnie dystanse drogowe przewozu produktów wymagających zabezpieczenia przed niskimi bądź wysokimi temperaturami atmosferycznymi, które uniemożliwiają swobodny transport produktów bez użycia izotermy.",
        icon: izoBox,
        image: bgLightGray,
    },
    {
        title: "TermoBOX",
        descriptions: [
            {
                desc: "Zestaw kontenerowy Termo-BOX składa się z wykonanych przez nas paneli termoizolujących ze wzmocnioną izolacją, kompletu profili, drzwi, podłogi oraz wszystkich potrzebnych elementów złącznych.",
                type: "right",
                width: "max",
            },
            {
                desc: "Zabudowa kontenerowa chłodnicza, w przeciwieństwie do izotermy, posiada grubsze ściany oraz drzwi.",
                type: "left",
                width: "full",
            },
            {
                desc: "Nieodzowną częścią chłodni jest uniwersalny agregat, który pełni funkcje zarówno chłodzącą, jak i nagrzewającą.",
                type: "left",
                width: "full",
            },
            {
                desc: "Dzięki temu, że zestaw chłodniczy jest integralną częścią kontenera, wewnątrz utrzymuje się temperatura od -20°C do +15°C.",
                type: "left",
                width: "max",
            },
            {
                desc: "Zestaw kontenerowy chłodniczy wykonujemy również wstępnie zmontowany: z wklejonymi profilami obwodowymi, zmontowaną ramą, portalem, drzwiami oraz wyposażeniem w agregat.",
                type: "left",
                width: "max",
            }
        ],
        use: "W transporcie drogowym wymagającym utrzymania stałych, zwłaszcza bardzo niskich temperatur wewnątrz kontenera, z możliwością pełnej kontroli temperatury, przede wszystkim na długich dystansach.",
        icon: termoBox,
        image: bgBlackGray,
    },
]

export default containers