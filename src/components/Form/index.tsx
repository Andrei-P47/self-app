import {NextPage} from "next";

const Form: NextPage = () => {

    return (
        <div className=" w-auto flex flex-col gap-[18px] xs:gap-[20px] justify-end">
            <div className="flex flex-col xs:flex-row gap-[18px] xs:gap-[30px]">

                <input className="w-full flex flex-row items-start box-border pt-[15px] pr-[91px] pb-[15px] pl-[25px] gap-[10px] border border-grey rounded-md paragraph_3_SemiBold" type="email" placeholder="Your email"/>

                <input className="w-full flex flex-row items-start box-border pt-[15px] pr-[91px] pb-[15px] pl-[25px] gap-[10px] border border-grey rounded-md paragraph_3_SemiBold" type="text" placeholder="Your name"/>

            </div>
                <input className="w-full flex flex-row items-start box-border pt-[15px] pr-[91px] pb-[15px] pl-[25px] gap-[10px] border border-grey rounded-md paragraph_3_SemiBold" type="text" placeholder="Theme"/>
            <div>
                <textarea className="w-full h-[108px] xs:min-h-[140px] box-border flex flex-row items-start pt-[15px] pr-[91px] pb-[15px] pl-[25px] gap-[10px] border border-grey rounded-md paragraph_3_SemiBold" placeholder="Your message">

                </textarea>
            </div>
            <button className="xs:ml-auto w-full xs:w-[137px] flex flex-row justify-center items-center py-[10px] px-[14px] gap-[10px] rounded-md bg-primary text-white headline_6_Bold xs:headline_7_SemiBold xs:shadow-none shadow-button">
                Send
            </button>
        </div>
    )
}

export default Form