import type { NextPage } from 'next'
import Image from "next/image";

const FirstBlock: NextPage = () => {

    return (
        <>
            <div className="container xs:mx-auto px-[16px] xs:px-0 w-[360px] xs:w-[1110px] gap-[20px] flex flex-col xs:flex-row justify-between mt-[20px] xs:mt-[70px] mb-0 xs:mb-[90px]">
                <h3 className="headline_3_ExtraBold  xs:headline_1_ExtraBold text-black">
                    Find true power in your <br/> data with <span className="text-primary">Ensome</span>
                </h3>
                <div className="xs:block hidden paragraph_2_Regular flex items-center text-gray">
                    Sed ut perspiciatis unde omnis iste natus error<br/> sit
                    voluptatem accusantium doloremque lauda,<br/> totam rem aperiam,
                    eaque ipsa quae ab illo<br /> inventore veritatis et quasi.
                </div>
                <div className="xs:hidden block paragraph_3_Regular">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo<br/> inventore veritatis et quasi
                    architecto beatae vitae dicta sunt explicabo.
                </div>
            </div>
            <button className="w-[100px] h-[100px] xs:w-[140px] xs:h-[140px] flex justify-center items-center bg-white absolute right-[50px] top-[309px] xs:right-[597px] xs:top-[293px] z-50 rounded-full">
                <div className="w-[89px] h-[89px] xs:w-[120px] xs:h-[120px] bg-primary rounded-full flex justify-center items-center">
                    <div className="w-[78px] h-[78px] xs:w-[100px] xs:h-[100px] border border-blue-3 rounded-full flex justify-center items-center">
                        <div className="headline_8_SemiBold xs:headline_7_SemiBold text-white">Learn more</div>
                    </div>
                </div>
            </button>
            <div className="mt-[46px] xs:mt-[90px] xs:w-full w-[360px] h-[230px] xs:h-[590px] relative">
                <Image
                   src={'/img_11.jpg'}
                   alt={'first block image'}
                   layout={'fill'}
                   objectPosition={'center'}
                />
            </div>
        </>
    )
}

export default FirstBlock
