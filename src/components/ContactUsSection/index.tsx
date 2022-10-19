import type { NextPage } from 'next'

const ContactUsSection: NextPage = () => {

    return (
        <div className="bg-background">
            <div className="container  px-4 xs:mx-auto flex flex-col items-center gap-5 xs:py-[100px] pt-10 pb-[50px]">
                <div className="headline_3_ExtraBold xs:headline_2_ExtraBold">Do you need help?</div>
                <div className="paragraph_3_Regular xs:paragraph_2_Regular text-gray text-center">
                    Ut enim ad minima veniam, quis nostrum<br className="block xs:hidden "/> exercitationem ullam<br className="hidden xs:block "/> corporis suscipit laboriosam,<br className="block xs:hidden "/> nisi ut aliquid ex ea commodi.
                </div>
                <button className="w-full xs:w-auto mt-2.5 xs:mt-0 justify-center items-center py-[11px] px-[46px] bg-primary rounded-md shadow-[0px_12px_30px_rgba(24,92,255,0.18)]">
                    <div className="headline_6_Bold text-white">Contact Us</div>
                </button>
            </div>
        </div>
    )
}

export default ContactUsSection
