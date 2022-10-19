import {NextPage} from "next";
import Image from "next/image";

import { Cards } from '../../constants/solutionsCards.constants';
import { useMediaQuery } from '../useMediaQuery';

const SolutionsCards: NextPage = () => {
    const isBreakpoint = useMediaQuery(360)
    return (
        <div className="container px-4 xs:px-0 xs:mx-auto w-[360px] xs:w-[1110px] py-[50px] xs:py-[120px]">
            <div className="grid grid-cols-1 xs:grid-cols-2 gap-x-30px gap-y-[40px]">
                {Cards.map(({ icon, title, description}, index) => {
                    return (
                        <div className="flex flex-col justify-center items-start py-[20px] px-[35px] gap-[20px] bg-white rounded-md shadow-card-3" key={index}>
                            <Image
                                src={icon}
                                alt={'logo'}
                                width={isBreakpoint ? 42 : 60}
                                height={isBreakpoint ? 42 : 60}
                            />
                            <div className="flex flex-col justify-center items-start gap-4">
                                <div className="headline_5_Bold xs:headline_4_Bold">
                                    {title}
                                </div>
                                <div className="paragraph_3_Regular xs:paragraph_2_Regular text-gray"
                                     dangerouslySetInnerHTML={{ __html: description }}>
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