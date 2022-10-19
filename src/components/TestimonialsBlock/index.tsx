import type { NextPage } from 'next'
import Image from "next/image";


import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import "pure-react-carousel/dist/react-carousel.es.css";

import {TestimonialsCards} from "../../constants/testimonialsBlock.constants";
import {useMediaQuery} from "../useMediaQuery";
import {useRouter} from "next/router";

const TestimonialsBlock: NextPage = () => {

    const router = useRouter();
    const isBreakpoint = useMediaQuery(360)

    return (
        <div className="container px-4 xs:px-0 xs:mx-auto w-[360px] xs:w-[1110px] my-[50px] xs:my-[120px]">

            <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={125}
                totalSlides={9}
                visibleSlides={isBreakpoint ? 1 : 3}
            >

                <div className="flex justify-between items-stretch">
                    {
                        router.asPath == '/about' ? (
                            <div className="flex flex-col items-start gap-[30px]">
                                <div className="headline_3_ExtraBold xs:headline_2_ExtraBold ">
                                    Testimonials
                                </div>
                                <div className="hidden xs:block paragraph_3_Regular xs:paragraph_1_Regular text-gray">
                                    Sed ut perspiciatis unde omnis iste natus error sit<br/>
                                    voluptatem accusantium doloremque laudantium.
                                </div>
                            </div>
                        ) : (
                            <div className="headline_3_ExtraBold xs:headline_2_ExtraBold self-end">
                                Testimonials
                            </div>
                        )
                    }
                    <div className={`flex flex-row gap-[8px] xs:gap-[15px] controlBlock 
                    ${router.asPath == '/about' ? 'mt-auto' : ''}
                    `}>
                        <ButtonBack role="button" aria-label="slide backward" className="" id="prev">
                            <button className="flex py-[8px] xs:py-[15px] px-[12px] xs:px-[40px] bg-tertiary rounded-[14px] xs:rounded-[20px] rotate-180 prev" id="prev">
                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M25.5 15.375C25.5003 15.2058 25.4631 15.0387 25.391 14.8856C25.3189 14.7326 25.2137 14.5974 25.083 14.49L20.664 10.08C20.4531 9.86932 20.1671 9.75098 19.869 9.75098C19.5709 9.75098 19.2849 9.86932 19.074 10.08C18.9698 10.1842 18.8871 10.3079 18.8307 10.444C18.7743 10.5802 18.7452 10.7261 18.7452 10.8735C18.7452 11.0209 18.7743 11.1668 18.8307 11.3029C18.8871 11.4391 18.9698 11.5628 19.074 11.667L21.651 14.25L5.625 14.25C5.32663 14.25 5.04048 14.3685 4.8295 14.5795C4.61853 14.7905 4.5 15.0766 4.5 15.375C4.5 15.6734 4.61853 15.9595 4.8295 16.1705C5.04048 16.3815 5.32663 16.5 5.625 16.5L21.666 16.5L19.0665 19.083C18.9621 19.1872 18.8792 19.311 18.8226 19.4473C18.7661 19.5836 18.737 19.7297 18.737 19.8772C18.737 20.0248 18.7661 20.1709 18.8226 20.3072C18.8792 20.4435 18.9621 20.5673 19.0665 20.6715C19.171 20.776 19.295 20.859 19.4316 20.9155C19.5681 20.9721 19.7145 21.0013 19.8622 21.0013C20.01 21.0013 20.1564 20.9721 20.2929 20.9155C20.4295 20.859 20.5535 20.776 20.658 20.6715L25.17 16.1655C25.2753 16.0627 25.3588 15.9397 25.4155 15.8038C25.4722 15.668 25.5009 15.5222 25.5 15.375Z"
                                          fill="#002B4E"/>
                                </svg>
                            </button>
                        </ButtonBack>

                        <ButtonNext role="button" aria-label="slide forward" className="" id="next">
                            <button className="flex py-[8px] xs:py-[15px] px-[12px] xs:px-[40px] bg-tertiary rounded-[14px] xs:rounded-[20px] next" id="next">
                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M25.5 15.375C25.5003 15.2058 25.4631 15.0387 25.391 14.8856C25.3189 14.7326 25.2137 14.5974 25.083 14.49L20.664 10.08C20.4531 9.86932 20.1671 9.75098 19.869 9.75098C19.5709 9.75098 19.2849 9.86932 19.074 10.08C18.9698 10.1842 18.8871 10.3079 18.8307 10.444C18.7743 10.5802 18.7452 10.7261 18.7452 10.8735C18.7452 11.0209 18.7743 11.1668 18.8307 11.3029C18.8871 11.4391 18.9698 11.5628 19.074 11.667L21.651 14.25L5.625 14.25C5.32663 14.25 5.04048 14.3685 4.8295 14.5795C4.61853 14.7905 4.5 15.0766 4.5 15.375C4.5 15.6734 4.61853 15.9595 4.8295 16.1705C5.04048 16.3815 5.32663 16.5 5.625 16.5L21.666 16.5L19.0665 19.083C18.9621 19.1872 18.8792 19.311 18.8226 19.4473C18.7661 19.5836 18.737 19.7297 18.737 19.8772C18.737 20.0248 18.7661 20.1709 18.8226 20.3072C18.8792 20.4435 18.9621 20.5673 19.0665 20.6715C19.171 20.776 19.295 20.859 19.4316 20.9155C19.5681 20.9721 19.7145 21.0013 19.8622 21.0013C20.01 21.0013 20.1564 20.9721 20.2929 20.9155C20.4295 20.859 20.5535 20.776 20.658 20.6715L25.17 16.1655C25.2753 16.0627 25.3588 15.9397 25.4155 15.8038C25.4722 15.668 25.5009 15.5222 25.5 15.375Z"
                                          fill="#002B4E"/>
                                </svg>
                            </button>
                        </ButtonNext>
                    </div>
                </div>
                <div className={`block xs:hidden paragraph_3_Regular xs:paragraph_1_Regular text-gray my-[20px] ${router.asPath == '/about' ? 'block' : 'hidden'}`}>
                    Sed ut perspiciatis unde omnis iste natus error sit<br/>
                    voluptatem accusantium doloremque laudantium.
                </div>


                <Slider id="slider">
                    <div className={` gap-[30px]  first:pl-[10px]
                    ${
                        router.asPath == '/about' ? 'grid grid-cols-1 xs:grid-cols-2 pt-[50px]': 'flex flex-row pt-[50px]'
                    }
                    `}>


                        {TestimonialsCards.map(({ id,icon,name,job,description}, index) => {
                        // if(isBreakpoint ?  index < 1 : index < TestimonialsCards.length) {
                            if(router.asPath == '/about' ? index < 2 : index < TestimonialsCards.length){
                                return (
                                    <Slide index={id} key={index}>
                                    <div className="flex flex-col xs:min-h-[371px] items-start p-[35px] gap-[25px] bg-white shadow-card-3">
                                        <div className="flex flex-row items-center gap-[25px]">
                                            <Image
                                                src={icon}
                                                alt={'logo'}
                                                width={isBreakpoint? 50 : 80}
                                                height={isBreakpoint? 50 : 80}
                                            />
                                            <div className="flex flex-col items-start gap-[4px]">
                                                <div className="headline_7_SemiBold xs:headline_6_Bold">{name}</div>
                                                <div className="headline_7_Medium text-gray">{job}</div>
                                            </div>
                                        </div>
                                        <div className="paragraph_3_Regular xs:paragraph_2_Regular text-gray"

                                             dangerouslySetInnerHTML={{ __html: description }}>
                                        </div>
                                    </div>
                                    </Slide>

                                )
                            // }

                        }})}



                </div>
                </Slider>

            </CarouselProvider>
        </div>
    )
}

export default TestimonialsBlock