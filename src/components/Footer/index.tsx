import type { NextPage } from 'next'
import Image from "next/image";

import {FooterLinks, Icons} from "../../constants/footer.constants";

const Footer: NextPage = () => {

    return (
        <div className="bg-secondary">
            <div className="container px-4 xs:px-0 xs:mx-auto w-[360px] xs:w-[1110px] pb-30px">
                <div className="flex flex-col xs:flex-row gap-30px xs:gap-[190px] py-30px xs:py-[50px]">
                    <div className="flex flex-row xs:flex-col items-start gap-[42px] xs:gap-5 w-full xs:w-[285px] order-2 xs:order-1">
                        <div className="xs:block hidden">
                            <Image
                                src={'/Logo.svg'}
                                alt={'logo'}
                                width={141}
                                height={46}
                            />
                        </div>

                        <div className="hidden xs:block paragraph_3_Regular text-gray">
                            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.
                        </div>
                        <div className="headline_6_Bold text-white block xs:hidden">
                            Follow us
                        </div>
                        <div className="flex flex-row items-start justify-end gap-3 xs:gap-[15px]">
                            {Icons.map(({icon}, index) => {
                                return (
                                    <Image
                                       src={icon}
                                       alt={'icon'}
                                       width={25}
                                       height={25}
                                       className="fill-background"
                                       key={index}
                                    />
                                )})}
                        </div>
                    </div>
                    <div className="flex flex-col xs:flex-row justify-between w-full xs:w-[613px] xs:pt-[11px] xs:order-2 order-1">
                        <div className="xs:hidden block mb-4 mt-2.5">
                            <Image
                                src={'/Logo.svg'}
                                alt={'logo'}
                                width={90}
                                height={30}
                            />
                        </div>

                        {FooterLinks.map((enums, index) => {
                            return (
                                <div className="flex flex-col xs:gap-[31px] gap-[15px] py-[15px] border-b xs:border-b-0 border-b-blue-2" key={index}>
                                    <div className="hidden xs:block headline_6_Bold text-white">{enums.title}</div>


                                    <input
                                        id={enums.id}
                                        name={enums.id}
                                        className="hidden peer block xs:hidden"
                                        type="checkbox"
                                    />
                                    <label
                                        htmlFor={enums.id}
                                        className="w-full flex flex-row justify-between block xs:hidden"
                                    >
                                        <div className="headline_6_Bold text-white">{enums.title}</div>
                                        <Image
                                            className="peer-rotate-90"
                                            src={'/icon_chevron_down.svg'}
                                            alt={'burgher logo'}
                                            width={20}
                                            height={20}
                                        />
                                    </label>


                                    <div className="peer-checked:flex hidden xs:block flex flex-col items-start gap-3">
                                        {enums.link.map((linkEnum, index) => {
                                            return (
                                                <div className="paragraph_3_Regular text-gray" key={index}
                                                     dangerouslySetInnerHTML={{ __html: linkEnum }}>
                                                </div>
                                            )})}
                                    </div>
                                </div>
                            )})}
                    </div>
                </div>
                <div className="xs:border-t xs:border-t-blue-2 flex flex-col xs:flex-row justify-between xs:pt-[34px] xs:gap-0 gap-2.5">
                    <div className="paragraph_3_Regular text-blue-2 xs:order-1 order-3">
                        Ensome© 2022 All Rights Reserved
                    </div>
                    <div className="order-2 xs:hidden border-b border-b-blue-2"/>
                    <div className="flex flex-row gap-[15px] xs:gap-[95px] order-1 xs:order-2">
                        <div className="paragraph_3_Regular text-tertiary xs:text-blue-2">
                            Privacy policy
                        </div>
                        <div className="paragraph_3_Regular text-tertiary xs:text-blue-2">
                            Terms of us
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
