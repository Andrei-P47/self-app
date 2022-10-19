import type { NextPage } from 'next'
import Image from "next/image";
import {Button} from "../index";
import React from "react";

const FeatureSection: NextPage = () => {

    return (
        <>
            <div className="container xs:mx-auto px-[16px] xs:px-0 w-[360px] xs:w-[1110px] grid grid-rows-1 xs:grid-cols-2 gap-[30px] my-[50px] xs:my-[120px]">
                <div className="font-extrabold text-57-66 tracking-015 xs:block hidden" >
                    The <span className="text-primary">newest</span><br/> business analytics platform
                </div>
                <div className="headline_3_ExtraBold xs:hidden block" >
                    The <span className="text-primary">newest</span> business analytics platform
                </div>
                <div className="flex flex-col xs:pl-[6px]">
                    <div className="text-gray paragraph_3_Regular xs:paragraph_1_Regular xs:w-[540px]">
                        Sed ut perspiciatis unde omnis iste natus error sit<br className="xs:block hidden" />
                        voluptatem accusantium doloremque laudantium, totam<br className="xs:block hidden" />
                        rem aperiam, eaque ipsa quae ab illo <br className="xs:hidden" /> inventore veritatis<br className="xs:block hidden" />
                        et quasi architecto beatae vitae<br className="xs:hidden" /> dicta sunt explicabo.
                    </div>
                    <button className="justify-center items-center py-[11px] px-[46px] w-full xs:w-[185px] bg-primary rounded-md shadow-[0px_12px_30px_rgba(24,92,255,0.18)] mt-[30px]">
                        <div className="headline_7_SemiBold text-white">Discover more</div>
                    </button>
                </div>
            </div>




            <div className="bg-background grid grid-rows-1 xs:grid-cols-2 xs:gap-[46px]  ">
                <div className="xs:block hidden w-full xs:h-[740px] relative">
                    <Image
                        src={'/02_img_10.jpg'}
                        alt={'feature block image'}
                        layout={'fill'}
                        objectPosition={'center'}
                    />
                </div>
                <div className="flex flex-col items-start xs:gap-[30px] gap-[20px] xs:my-[191px] my-[40px]">
                    <div className="headline_3_ExtraBold xs:headline_2_ExtraBold px-[16px] xs:px-0">
                        Radically new<br className="xs:hidden block"/> solutions <br className="xs:block hidden"/>for data
                    </div>

                    <div className="xs:hidden block w-[360px] h-[180px] relative">
                        <Image
                            src={'/02_img_10_mobile.jpg'}
                            alt={'feature block image'}
                            layout={'fill'}
                            objectPosition={'center'}
                        />
                    </div>

                    <div className="paragraph_3_Regular xs:paragraph_1_Regular text-gray px-[16px] xs:px-0">
                        Sed ut perspiciatis unde omnis iste natus error sit<br/>
                        voluptatem accusantium doloremque laudantium,<br className="block xs:hidden"/> totam<br className="hidden xs:block"/>
                        rem aperiam, eaque ipsa quae ab illo<br className="block xs:hidden"/> inventore veritatis et<br className="hidden xs:block"/>
                        quasi architecto beatae vitae<br className="block xs:hidden"/> dicta sunt explicabo.
                    </div>
                    {/*<div className="w-full xs:w-[190px] flex px-[16px] xs:px-0 xs:ml-16px">*/}
                    {/*    <Button title="Learn more"/>*/}
                    {/*</div>*/}
                </div>
            </div>
        </>
    )
}

export default FeatureSection
