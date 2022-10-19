import {NextPage} from "next";
import {useRouter} from "next/router";
import Image from "next/image";
import {TeamCard} from "../../constants/teamCard.constants";
import {useMediaQuery} from "../useMediaQuery";

const TeamCards: NextPage = () => {

    const isBreakpoint = useMediaQuery(360)
    return (
        <div className="container px-4 xs:px-0 xs:mx-auto w-[360px] xs:w-[1110px] my-[50px] xs:my-[120px]">
            <div className="flex flex-wrap gap-x-[30px] gap-y-[20px] xs:gap-y-[40px]">
                {TeamCard.map(({image, title, description}, index) => {
                    return (
                        <div className="" key={index}>
                            <Image
                                src={image}
                                alt={'asd'}
                                width={ isBreakpoint ? 328 :540}
                                height={isBreakpoint ? 250 :410}
                            />
                            <div className="py-[15px] xs:py-[20px] flex flex-col gap-0 xs:gap-[7px]">
                                <div className="headline_6_Bold xs:headline_5_Bold">
                                    {title}
                                </div>
                                <div className="paragraph_3_Regular xs:paragraph_2_Regular text-gray">
                                    {description}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}
export default TeamCards