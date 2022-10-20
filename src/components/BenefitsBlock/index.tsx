import type { NextPage } from 'next'
import Image from "next/image";

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import "pure-react-carousel/dist/react-carousel.es.css";


import {useMediaQuery} from "../useMediaQuery";
import {Benefits} from "../../constants/benefits.constants"

const BenefitsBlock: NextPage = () => {

    const isBreakpoint = useMediaQuery(360)
    return (
        <div className=" xs:bg-background ">
            <div className="container px-4 xs:px-0 mx-auto w-[360px] xs:w-[1110px] grid grid-cols-1 xs:grid-cols-2 gap-[30px] pt-[50px] xs:pt-0 ">
                <div className="flex flex-col gap-[20px] xs:gap-[30px] my-auto">
                    <div className="headline_3_ExtraBold xs:headline_2_ExtraBold">The benefits <br className="block xs:hidden"/> of Ensome </div>
                    <div className="paragraph_3_Regular xs:paragraph_1_Regular text-gray">
                        Sed ut perspiciatis unde omnis iste natus error sit<br/>
                        voluptatem accusantium doloremque laudantium,<br className="block xs:hidden"/> totam<br className="hidden xs:block"/>
                        rem aperiam, eaque ipsa quae ab illo<br className="block xs:hidden"/> inventore veritatis et<br className="hidden xs:block"/>
                        quasi architecto beatae vitae<span className="hidden xs:block"> dicta sunt explicabo</span>.
                    </div>
                </div>
                {isBreakpoint ?
                    (
                        <CarouselProvider
                            naturalSlideWidth={244}
                            naturalSlideHeight={248}
                            totalSlides={4}
                            visibleSlides={1.2}
                        >
                            <Slider>
                                <div id="slider" className="h-[248px] flex flex-row justify-center items-center items-start gap-[36px] xs:gap-[20px] pl-[6px] mt-[18px]">
                                    {Benefits.map(({ icon,title,description}, index) => {
                                        return (

                                            <Slide index={index} key={index}>
                                                <div className="xs:benefitPosition w-[244px] bg-white items-start p-[25px] gap-[15px] rounded-md shadow-card-3">
                                                    <Image
                                                        src={icon}
                                                        alt={'logo'}
                                                        width={45}
                                                        height={45}
                                                    />
                                                    <div className="headline_5_Bold">
                                                        {title}
                                                    </div>
                                                    <div className="paragraph_3_Regular text-gray">
                                                        {description}
                                                    </div>
                                                </div>
                                            </Slide>

                                        );
                                    })}
                                </div>

                            </Slider>
                        </CarouselProvider>
                    ): (
                        <div className="flex flex-row gap-[30px] xs:mt-[176px] mt-[60px] mb-0 xs:mb-[120px]">
                            <div className={`gap-[30px] xs:columns-2 ${isBreakpoint ? '': ''}`}>

                                {Benefits.map(({ icon,title,description}, index) => {
                                    return (
                                        <div className="benefitPosition bg-white items-start p-[25px] gap-[15px] rounded-md shadow-[0_12px_30px_17px_rgba(24,92,255,0.04)]"
                                             key={index}>
                                            <Image
                                                src={icon}
                                                alt={'logo'}
                                                width={45}
                                                height={45}
                                            />
                                            <div className="headline_5_Bold">
                                                {title}
                                            </div>
                                            <div className="paragraph_3_Regular text-gray">
                                                {description}
                                            </div>
                                        </div>
                                    );
                                })}

                            </div>
                        </div>
                    )}
            </div>
        </div>
    )
}

export default BenefitsBlock
