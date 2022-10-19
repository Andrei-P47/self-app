import type { NextPage } from 'next'

const SubscribeSection: NextPage = () => {

    return (
        <div className="bg-secondary border-b border-b-blue-2 ">
            <div className="container px-4 xs:px-0 xs:mx-auto w-[360px] xs:w-[1110px] flex flex-col xs:flex-row pt-[50px] pb-[60px] xs:py-20 gap-30px xs:gap-[125px]">
                <div className="flex flex-col items-start gap-6">
                    <h2 className="text-center headline_3_ExtraBold xs:headline_2_ExtraBold text-white">Subscribe to our newsletter</h2>
                    <div className="hidden xs:block paragraph_1_Regular text-white">Sed ut perspiciatis unde omnis iste natus error sit<br/> voluptatem accusantium doloremque laudantium.</div>
                </div>
                <div className="flex justify-items items-center">
                    <div className="flex flex-col xs:flex-row rounded-sm w-full xs:w-[445px] gap-5 xs:gap-0 xs:bg-blue-3">
                        <input type="email" placeholder="Your email" className="flex flex-row items-center gap-0.5 text-blue-2 rounded-l-md rounded-r-md xs:rounded-l-md border xs:border-0 border-blue-2 bg-transparent xs:bg-blue-3 pl-[25px] py-[15px] pr-[91px] w-full focus:outline-none paragraph_3_SemiBold"/>
                        <button className="hidden xs:block flex flex-row justify-center items-center py-[11px] px-[46px] gap-3 rounded-md bg-white headline_6_Bold">Send</button>
                        <button className="block xs:hidden flex flex-row justify-center items-center py-[11px] px-[46px] gap-3 rounded-md bg-white headline_6_Bold">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubscribeSection
