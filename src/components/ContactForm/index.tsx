import {NextPage} from "next";

import Image from 'next/image'

import Form from "../Form";
import {Contact} from "../../constants/contact.constants";



const ContactForm: NextPage = () =>{
    return(
        <div className="container px-4 xs:px-0 xs:mx-auto w-[360px] xs:w-[1110px] mt-[40px] xs:mt-[75px] mb-[50px] xs:mb-[120px]">
            <div className="flex flex-col gap-[50px] xs:gap-0">
                <div className="grid grid-cols-1 xs:grid-cols-2 gap-[30px]">
                    <div className="headline_3_ExtraBold xs:text-[80px] xs:font-extrabold xs:leading-[88px] xs:tracking-015">
                        How can we <span className="text-primary">help you?</span>
                    </div>

                    <Form/>

                </div>
                <div className="flex flex-col xs:flex-row items-start gap-[20px] xs:gap-[47px] xs:-mt-[5px] ">
                    {Contact.map(({icon, title,description}, index) => {
                        return (
                            <div className="flex flex-col items-start gap-[5px]" key={index}>
                                <div className="flex flex-row items-center gap-[12px]">
                                    <div>
                                        <Image
                                         src={icon}
                                         alt="contact icons"
                                         width={20}
                                         height={20}
                                        />
                                    </div>
                                    <div className="headline_7_SemiBold">
                                        {title}
                                    </div>
                                </div>
                                <div className="paragraph_2_Regular text-gray">
                                    {description}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default ContactForm;