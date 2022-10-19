import {NextPage} from "next";
import Link from "next/link";
import {useRouter} from "next/router";
import {HeroBlock} from "../../constants/heroBlock.constants";


const Breadcrumbs: NextPage = () => {

    const router = useRouter();
    return (
        <div className="container px-4 xs:px-0 xs:mx-auto w-[360px] xs:w-[1110px] pt-[10px] xs:pt-[20px]">
            <div className="breadcrumb flex flex-row items-center">
                <style jsx>{`
                     .breadcrumb div+div:before {
                      padding: 9.5px;
                      color: black;
                      content: "|";
                    }
                `}
                </style>
                <div className="flex flex-row items-center">
                    <Link href={'/'}>
                        <a>
                            <div className={'headline_7_Medium xs:headline_6_Bold text-gray'}>
                                Home
                            </div>
                        </a>
                    </Link>
                </div>

                {HeroBlock.filter(enums => enums.urls == router.asPath)
                    .map((enums, index) => {
                        return (
                            <div key={index} className="flex flex-row items-center">
                                <Link href={enums.urls}>
                                    <a>
                                        <div className={'Headline_7_SemiBold xs:headline_6_Bold first-letter:uppercase'}>
                                            {enums.urls === router.pathname ? enums.titlePage : router.pathname.substring(1)}
                                        </div>
                                    </a>
                                </Link>
                            </div>
                            )}
                    )
                }
            </div>
        </div>
    )

}

export default Breadcrumbs;