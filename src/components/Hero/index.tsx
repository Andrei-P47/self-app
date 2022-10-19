import type { NextPage } from 'next'
import Link from "next/link";
import {useRouter} from "next/router";
import {HeroBlock} from "../../constants/heroBlock.constants";

const Hero: NextPage = () => {
    const router = useRouter();
    return (
        <>
            {HeroBlock.filter(enums => enums.urls == router.asPath)
                .map((enums, index) => {
                    return (
                        <div className="container px-4 xs:px-0 xs:mx-auto flex flex-col items-center gap-[12px] xs:gap-[15px] pt-[40px] xs:pt-[56px]" key={index}>
                            <Link href={enums.urls}>
                                <a>
                                    <div className={'headline_6_Bold text-primary first-letter:uppercase'}>
                                        {enums.urls === router.pathname ? enums.titlePage : router.pathname}
                                    </div>
                                </a>
                            </Link>
                            <div className="headline_3_ExtraBold xs:headline_1_ExtraBold text-center">
                                {enums.urls === router.pathname ? enums.titleDescription[0] : enums.titleDescription[0]}
                            </div>
                            <div className="paragraph_3_Regular xs:w-[730px] xs:paragraph_1_Regular text-gray text-center"
                                 dangerouslySetInnerHTML={{ __html: enums.urls === router.pathname ? enums.titleDescription[1] : enums.titleDescription[1] }}>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )

}

export default Hero
