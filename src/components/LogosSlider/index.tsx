import {NextPage} from "next";
import {useMediaQuery} from "../useMediaQuery";
import {Company} from "../../constants/companyOverview.constants";
import Image from "next/image";
import {useRouter} from "next/router";

const LogosSlider: NextPage = props => {
    const isBreakpoint = useMediaQuery(360)

    const router = useRouter();

    return (

        <div className={`slider container xs:mx-auto w-[360px] xs:w-[1110px]
            ${router.asPath == '/about' ? 'pb-[10px] xs:pb-0' : 'xs:pb-[80px]'}
        `}>
            <div className="slide-track">
                {Company.map(({ source}, index) => {
                    if(!isBreakpoint ?  index < 6 : index < Company.length){
                        return (
                            <div className={`slide`} key={index}>
                                <Image
                                    src={source}
                                    alt={'logo'}
                                    width={`${isBreakpoint ? 92 : 185}`}
                                    height={`${isBreakpoint ? 65 : 132}`}

                                />
                            </div>
                        );
                    }
                })}
            </div>
        </div>
    )
}
export default LogosSlider