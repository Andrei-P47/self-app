import {NextPage} from "next";
import Image from "next/image";

import { Cards } from '../../constants/solutionsCards.constants';
import { useMediaQuery } from '../useMediaQuery';
import {useRouter} from "next/router";

const SolutionsCards: NextPage = () => {
    const isBreakpoint = useMediaQuery(360)

    const router = useRouter();

    return (
        <div className="container px-4 xs:px-0 xs:mx-auto w-[360px] xs:w-[1110px] py-[50px] xs:py-[120px]">
            <div className={`grid grid-cols-1 xs:grid-cols-2 gap-x-30px 
                    ${router.asPath == '/services' ? 'gap-[20px] xs:gap-y-[30px]' : 'gap-y-[40px]'}
            `}>
                {Cards.map((card, index) => {
                    return (
                        <div className={`flex flex-col justify-center items-start xs:py-[20px] xs:px-[35px] gap-[20px] bg-white rounded-md shadow-card-3
                                ${router.asPath == '/services' ? 'shadow-none px-[25px] py-[30px]' : 'px-[25px] py-[20px]'}
                        `} key={index}>
                            <Image
                                src={router.asPath == '/services' ? card.iconServices : card.icon}
                                alt={'logo'}
                                width={isBreakpoint ? router.asPath == '/services' ? 84 : 42 : router.asPath == '/services' ? 84 : 60}
                                height={isBreakpoint ? router.asPath == '/services' ? 70 : 42 : router.asPath == '/services' ? 70 : 60}
                            />
                            <div className="flex flex-col justify-center items-start gap-4">
                                <div className="headline_5_Bold xs:headline_4_Bold">
                                    {router.asPath == '/services' ? card.titleServices : card.title}
                                </div>
                                <div className="paragraph_3_Regular xs:paragraph_2_Regular text-gray"
                                     dangerouslySetInnerHTML={{ __html: router.asPath == '/services' ? card.descriptionServices : card.description }}>
                                </div>
                            </div>
                            <div className="flex flex-row justify-center items-center gap-[4px]">
                                <div className="headline_7_SemiBold text-primary">Read more</div>
                                <Image
                                    src={"/arrow_right.svg"}
                                    alt={'arrow right'}
                                    width={20}
                                    height={20}
                                />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default SolutionsCards;