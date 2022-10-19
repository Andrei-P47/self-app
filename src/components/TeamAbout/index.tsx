import {NextPage} from "next";
import {useRouter} from "next/router";
import Image from "next/image";
import {useMediaQuery} from "../useMediaQuery";

const TeamAbout: NextPage = () => {

    const isBreakpoint = useMediaQuery(360)
    return (
        <div className="container mx-auto w-[360px] xs:w-[1110px] grid gap-[40px] xs:gap-[50px] my-[50px] xs:my-[120px]">

            <Image
            src="/team_img.jpg"
            alt={'asd'}
            width={isBreakpoint ? 360 : 1110}
            height={isBreakpoint ? 197 : 500}
            />

            <div className="px-4 xs:px-0 grid grid-cols-1 xs:grid-cols-2 gap-[15px] xs:gap-[30px]">
                <div className="paragraph_3_Regular xs:paragraph_1_Regular text-gray">
                    Phasellus tristique eu nisl eu consectetur. Morbi urna massa,
                    imperdiet in mauris et, euismod vestibulum lacus. Integer enim elit,
                    tincidunt aliquam ligula id, lacinia auctor orci. Sed quis lobortis eros. Fusce id commodo libero.
                </div>
                <div className="paragraph_3_Regular xs:paragraph_1_Regular text-gray">
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                    praesentium voluptatum deleniti atque corrupti quos dolores et quas.
                    Nulla rhoncus consectetur eros non iaculis.
                </div>
            </div>
        </div>
    )
}

export default TeamAbout