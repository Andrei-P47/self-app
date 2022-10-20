import type { NextPage } from 'next'

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import "pure-react-carousel/dist/react-carousel.es.css"

import {OurPricingCards} from "../../constants/ourPricingBlock.constants";
import {useMediaQuery} from "../useMediaQuery";

const OurPricingBlock: NextPage = () => {

    const isBreakpoint = useMediaQuery(360)
    return (

        <div className="container pl-4 xs:px-0 xs:mx-auto w-[360px] xs:w-[1110px] my-[50px] xs:my-[120px] grid gap-[30px] xs:gap-[50px] ">
            <div className="headline_3_ExtraBold xs:headline_2_ExtraBold">Our pricing</div>


            <CarouselProvider
                naturalSlideWidth={244}
                naturalSlideHeight={525}
                totalSlides={4}
                visibleSlides={isBreakpoint ? 1.2 : 4}

                // touchEnabled={isBreakpoint}
                dragEnabled={isBreakpoint}
                disableKeyboard

            >
                <Slider style={{outline: 'none'}}>

                    <div style={{outline: 'none'}} className="flex flex-row justify-center items-center items-start lastBlockFontWeight gap-[36px] xs:gap-30px overflow-visible mx-[5px]  mt-[19px] xs:mt-[6px] outline-0">



                    {OurPricingCards.map((service, index) => {

                        return (
                            <Slide style={{outline: 'none'}} className="slide___3-Nqo" index={index} key={index}>
                                <div className="h-[525px] w-[272px] xs:w-[255px] flex flex-col items-start py-[35px] px-[20px] gap-[30px] bg-white group hover:bg-primary rounded-md shadow-card-3">
                                <div className="flex flex-col gap-[16px] w-full">
                                    <div className="headline_6_Bold group-hover:text-white">{service.title}</div>
                                    <div className="flex flex-row items-center justify-between gap-0">
                                        <div className="typography group-hover:text-white text-[28px] xs:text-[26px]">{service.price}</div>
                                        <div className="flex flex-row items-start gap-[10px]">
                                            <div className="flex justify-center items-center py-[4px] px-[10px] rounded-md bg-primary group-hover:bg-white text-white group-hover:text-primary border border-primary group-hover:border-white headline_7_SemiBold">Mo</div>
                                            <div className="flex justify-center items-center py-[4px] px-[13.5px] rounded-md text-primary group-hover:text-white border border-primary group-hover:border-white group-hover:bg-primary headline_7_SemiBold">Yr</div>
                                        </div>
                                    </div>
                                </div>

                                <button className="flex w-full justify-center items-center py-[10px] px-[14px] gap-[10px] bg-primary group-hover:bg-white rounded-md headline_7_SemiBold text-white group-hover:text-primary">
                                    Choose plan
                                </button>

                                <div className="flex flex-col items-start gap-[15px]">

                                    {service.services?.map((enums, index) => {
                                        return (

                                            <div className="flex flex-row items-center gap-[7px]" key={index}>
                                                <svg className="fill-primary group-hover:fill-white" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M20.4999 6.40958C20.8077 6.68283 20.9874 7.05968 20.9994 7.45728C21.0113 7.85487 20.8547 8.24066 20.5638 8.52982L11.5112 17.5309C11.3644 17.6765 11.1881 17.793 10.9926 17.8736C10.7972 17.9541 10.5865 17.9971 10.373 17.9999C10.1595 18.0027 9.94766 17.9652 9.74985 17.8898C9.55205 17.8144 9.37235 17.7026 9.22136 17.5609L4.42876 13.0603C4.14657 12.776 3.99295 12.3998 4.00025 12.0112C4.00755 11.6225 4.17521 11.2517 4.46791 10.9769C4.7606 10.702 5.15548 10.5446 5.56935 10.5377C5.98322 10.5308 6.38377 10.6751 6.68661 10.9401L10.3183 14.3485L18.2421 6.46958C18.5331 6.18054 18.9344 6.01185 19.3578 6.0006C19.7812 5.98935 20.192 6.13646 20.4999 6.40958Z"/>
                                                </svg>
                                                <div className="paragraph_3_Regular group-hover:text-white">
                                                    {enums}
                                                </div>
                                            </div>

                                        );
                                    })}
                                </div>

                            </div>
                            </Slide>
                        );
                    })}


            </div>

                </Slider>
            </CarouselProvider>
        </div>
    )
}

export default OurPricingBlock
