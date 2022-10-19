import {NextPage} from "next";
import {Advantages} from "../../constants/advantages.constants";
import Image from "next/image";
import {TestimonialsCards} from "../../constants/testimonialsBlock.constants";
import {useRouter} from "next/router";
import {useMediaQuery} from "../useMediaQuery";

const AdvantagesCards: NextPage = () => {

    const isBreakpoint = useMediaQuery(360)
    return (
        <div className="container px-4 xs:px-0 xs:mx-auto w-[360px] xs:w-[1110px] my-[50px] xs:my-[120px] grid gap-[30px] xs:gap-[50px]">
            <div className="flex flex-col items-center gap-[20px] xs:gap-[30px]">
                <div className="headline_3_ExtraBold xs:headline_2_ExtraBold text-center">
                    Why people chosse Ensome?
                </div>
                <div className="paragraph_3_Regular xs:paragraph_1_Regular text-center">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                    doloremque laudantium, totam rem aperiam, eaque ipsa quaeab illo inventore.
                </div>
            </div>
            <div className="flex flex-row justify-center items-center gap-[30px]">
                {Advantages.map((enums,index) =>{
                    if(isBreakpoint  ?  index < 1 : index < TestimonialsCards.length) {

                    return (
                        <div className="flex flex-col items-center py-[30px] xs:py-[46px] px-[25px] xs:px-[35px] gap-[20px] xs:gap-[30px] bg-white shadow-card-3 rounded-md" key={index}>
                            <div className="flex flex-row items-center p-[10px] xs:p-[14px] gap-[10px] border border-background rounded-xl">
                                {/*{enums.icon?}*/}
                                <Image
                                    src={enums.icon}
                                    alt={'Advantages icons'}
                                    width={isBreakpoint ? 36 : 42}
                                    height={isBreakpoint ? 36 : 42}
                                />
                            </div>
                            <div className="flex flex-col items-center gap-4">
                                <div className="headline_5_Bold xs:headline_4_Bold text-center">
                                    {enums.title}
                                </div>
                                <div className="paragraph_3_Regular xs:paragraph_2_Regular text-center"
                                     dangerouslySetInnerHTML={{ __html: enums.description }}>
                                </div>
                            </div>
                        </div>
                    )}
                })}
            </div>
        </div>
    )
}
export default AdvantagesCards