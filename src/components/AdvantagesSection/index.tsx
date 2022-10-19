import type { NextPage } from 'next'
import Image from "next/image";

import {Advantages} from "../../constants/advantages.constants"

const AdvantagesSection: NextPage = () => {

    return (
        <div className="bg-background grid grid-rows-1 xs:grid-cols-2 xs:gap-[46px]">
            <div className="w-full xs:h-[690px] relative">
                <Image
                    src={'/img_0011.jpg'}
                    alt={'Advantages block image'}
                    layout={'fill'}
                    objectPosition={'center'}
                />
            </div>
            <div className="flex flex-col py-[50px] xs:py-[118px] gap-[30px]">
                <div className="xs:hidden block w-[360px] h-[220px] relative">
                    <Image
                        src={'/img_0011.jpg'}
                        alt={'Advantages block image'}
                        layout={'fill'}
                        objectPosition={'center'}
                    />
                </div>
                <h2 className="headline_3_ExtraBold xs:headline_2_ExtraBold px-[16px] xs:p-0">
                    Why choose us?
                </h2>
                <div className="flex flex-col gap-[30px] px-[16px] xs:p-0">

                    {Advantages.map(({title,description}, index) => {
                        return (

                        <div className="flex flex-col gap-[10px] xs:gap-[15px]" key={index}>
                            <div className="flex flex-row items-center gap-[7px]">
                                <svg className="fill-primary group-hover:fill-white" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.4999 6.40958C20.8077 6.68283 20.9874 7.05968 20.9994 7.45728C21.0113 7.85487 20.8547 8.24066 20.5638 8.52982L11.5112 17.5309C11.3644 17.6765 11.1881 17.793 10.9926 17.8736C10.7972 17.9541 10.5865 17.9971 10.373 17.9999C10.1595 18.0027 9.94766 17.9652 9.74985 17.8898C9.55205 17.8144 9.37235 17.7026 9.22136 17.5609L4.42876 13.0603C4.14657 12.776 3.99295 12.3998 4.00025 12.0112C4.00755 11.6225 4.17521 11.2517 4.46791 10.9769C4.7606 10.702 5.15548 10.5446 5.56935 10.5377C5.98322 10.5308 6.38377 10.6751 6.68661 10.9401L10.3183 14.3485L18.2421 6.46958C18.5331 6.18054 18.9344 6.01185 19.3578 6.0006C19.7812 5.98935 20.192 6.13646 20.4999 6.40958Z"/>
                                </svg>
                                <div className="headline_5_Bold xs:headline_6_Bold">
                                    {title}
                                </div>
                            </div>
                            <div className="paragraph_2_Regular text-gray"
                                 dangerouslySetInnerHTML={{ __html: description }}>
                            </div>
                        </div>

                    )})}
                </div>


            </div>
        </div>
    )
}

export default AdvantagesSection
