import type { NextPage } from 'next'
import Image from 'next/image'
import {useState} from "react";
import Link from "next/link";
import { useRouter } from 'next/router';

import {useMediaQuery} from "../useMediaQuery";
import {MobileMenuItems, Icons} from "../../constants/header.constants";


const Header: NextPage = () => {

    const isBreakpoint = useMediaQuery(360)
    const [isNavOpen, setIsNavOpen] = useState(false);


    const router = useRouter();
    const activeRoute = (): string => router.asPath;

    return (
        <div>
            {isBreakpoint ? (
                <div className="pl-4 pr-[18px] z-50">
                    <div className="flex items-center justify-between py-5">
                        <Link href={'/'}>
                            <a>
                                <Image
                                    src={'/logo_blue.svg'}
                                    alt={'blue logo'}
                                    width={92}
                                    height={30}
                                />
                            </a>
                        </Link>
                        <nav>
                            <section className=" flex ">
                                <Image
                                    src={'/icon_burgher_default.svg'}
                                    alt={'burgher logo'}
                                    width={24}
                                    height={24}
                                    className="space-y-2"
                                    onClick={() => setIsNavOpen((prev) => !prev)}
                                />
                                <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                                    <div
                                        className="absolute top-0 left-0 px-4 py-5"
                                        onClick={() => setIsNavOpen(false)}
                                    >
                                        <Link href={"/"}>
                                            <a>
                                                <Image
                                                    src={'/logo_blue.svg'}
                                                    alt={'blue logo'}
                                                    width={92}
                                                    height={30}
                                                />
                                            </a>
                                        </Link>
                                    </div>
                                    <div
                                        className="absolute top-0 right-0 px-4 py-5"
                                        onClick={() => setIsNavOpen(false)}
                                    >
                                        <Image
                                            src={'/icon_burgher_close.svg'}
                                            alt={'burgher logo'}
                                            width={24}
                                            height={24}
                                        />
                                    </div>
                                    <div className="flex flex-col w-full space-y-[60px] px-4 z-50">
                                        <div className="flex flex-col">

                                            {MobileMenuItems.map((enums, index) => {
                                                return (
                                                    <div className="py-[15px] border-b border-b-gray" key={index}>

                                                        <input
                                                            id={enums.id}
                                                            name={enums.id}
                                                            className="hidden peer"
                                                            type="checkbox"
                                                        />
                                                        <label
                                                            htmlFor={enums.id}
                                                            className="w-full flex flex-row justify-between "
                                                        >
                                                            <div className="headline_6_Bold">{enums.title}</div>
                                                            <Image
                                                                className="peer-rotate-90 fill-black"
                                                                src={'/icon_chevron_down_20.svg'}
                                                                alt={'icon down'}
                                                                width={20}
                                                                height={20}
                                                            />

                                                        </label>

                                                        <div className="peer-checked:flex hidden flex-col items-start gap-[15px] pt-[15px] pl-7">
                                                            {enums.titleItems.map((submenuItems, index) => {
                                                                return (
                                                                    <div className="flex flex-row gap-1" key={index}>
                                                                        <div className="headline_7_SemiBold">{submenuItems}</div>
                                                                        <Image
                                                                            src={'/icon_arrow_right.svg'}
                                                                            alt={'burgher logo'}
                                                                            width={24}
                                                                            height={24}
                                                                        />
                                                                    </div>
                                                                )})}
                                                        </div>


                                                    </div>
                                                )})}
                                        </div>

                                        <div className="flex flex-row gap-[42px]">
                                            <div className="headline_6_Bold">Follow us</div>
                                            <div className="flex flex-row gap-3">
                                                {Icons.map(({icon}, index) => {
                                                    return (
                                                        <div dangerouslySetInnerHTML={{ __html: icon }}>
                                                        </div>
                                                    )})}
                                            </div>
                                        </div>

                                    </div>


                                </div>
                            </section>
                        </nav>




                        <style>{`
                          .hideMenuNav {
                            display: none;
                          }
                          .showMenuNav {
                            display: block;
                            position: absolute;
                            width: 100%;
                            height: 100vh;
                            top: 0;
                            left: 0;
                            background: white;
                            z-index: 10;
                            display: flex;
                            flex-direction: column;
                            padding-top: 70px;
                            // padding-bottom: 70px;
                            align-items: center;
                          }
                        `}</style>
                    </div>
                </div>
            ) : (
                <div>
                    <div className="container mx-auto w-[1110px] my-10 flex flex-row justify-between">
                        <Link href={'/'}>
                            <a>
                                <Image
                                    src={'/logo_blue.svg'}
                                    alt={'blue logo'}
                                    width={'141px'}
                                    height={'46px'}
                                />
                            </a>
                        </Link>
                        <div className="flex flex-row justify-center items-center gap-x-10">


                            {MobileMenuItems.map(({url, title}, index) => {
                                return (

                                    <Link href={url} key={index}>
                                        <a>
                                            <div className={url === activeRoute() ? 'headline_7_SemiBold' : 'headline_7_Medium'}>{title}</div>

                                        </a>
                                    </Link>
                                    )})}


                        </div>
                        <button
                            className="flex flex-row justify-center items-center gap-2.5 py-2.5 px-3.5 bg-primary rounded-md">
                            <Image
                                src={'/icon_play_circle.svg'}
                                alt={'icon play circle'}
                                width={'24px'}
                                height={'24px'}
                            />
                            <div className="headline_7_SemiBold text-white">Watch the demo</div>
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Header
