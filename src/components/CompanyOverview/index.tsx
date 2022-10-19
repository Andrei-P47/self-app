import type { NextPage } from 'next'
import {Project, Company} from "../../constants/companyOverview.constants";
import {useRouter} from "next/router";

const CompanyOverview: NextPage = props => {
    const router = useRouter();
    return (
        <div className={router.asPath == '/about' ? 'bg-background' : 'bg-white'}>
            <div className={`container px-4 xs:px-0 xs:mx-auto w-[360px] xs:w-[1110px] pt-[50px] xs:pt-[120px]  grid gap-[20px] xs:gap-[50px] ${
                router.asPath == '/about' ? 'pb-[120px]': 'pb-[20px] xs:pb-[50px]'
            }`}>
                <div className="headline_3_ExtraBold xs:headline_2_ExtraBold text-center">We provide services that guarantee your success</div>
                <div className="xs:grid flex flex-col xs:grid-cols-2 gap-[20px] xs:gap-[30px]">
                    <div className="flex flex-row gap-[8px] xs:gap-[30px] items-center ">
                        {Project.map(({ id,numm, title}, index) => {
                            return (
                                <div className={` flex flex-col justify-center xs:items-start items-center gap-[0px] xs:gap-[10px]`} key={index}>
                                    <div className={`text-primary font-['Open Sans'] font-extrabold text-[30px] xs:text-[50px] leading-[70px] tracking-tight`} id={id}>
                                        {numm}
                                    </div>
                                    <div className="paragraph_3_Regular xs:paragraph_2_Regular text-center text-gray">{title}</div>
                                </div>
                            );
                        })}
                    </div>
                    <div className="hidden xs:block paragraph_1_Regular text-gray text-left">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptat<br/>
                        accusantium doloremque laudantium, totam rem aperiam,<br/>
                        eaque ipsa quaeab illo inventore. Donec tincidunt tempor<br/>
                        quam, non mollis quam finibus nec.
                    </div>
                    <div className="block xs:hidden paragraph_3_Regular text-gray text-center">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                        doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                        veritatis et quasi architecto beatae vitae.
                    </div>
                </div>
                {/*<LogosSlider/>*/}
            </div>
        </div>
    )
}

export default CompanyOverview
