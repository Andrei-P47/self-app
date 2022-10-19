import {NextPage} from "next";
import {useRouter} from "next/router";
import Image from "next/image";

import {FAQ} from "../../constants/faq.constants";

const Faq: NextPage = () => {

    const router = useRouter();
    return (
        <div className="container px-4 xs:px-0 xs:mx-auto w-[360px] xs:w-[1110px] my-[50px] xs:my-[120px]">

            <div className="flex flex-col items-start gap-[15px] xs:gap-[20px] w-full">
                {FAQ.map(({title, description}, index) =>{
                    return(
                        <div className="w-full box-border flex flex-col items-start gap-[15px]" key={index}>
                            <details className="w-full py-[22px] px-[15px] xs:px-[35px] xs:py-[35px] group border border-gray rounded-md">
                                <summary className="flex flex-row justify-between">
                                    <div className="headline_6_Bold xs:headline_4_Bold group-open:text-primary">
                                        {title}
                                    </div>


                                    <svg className="group-open:fill-primary group-open:block hidden" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.99609 13.5H20.0001C20.2653 13.5 20.5197 13.3946 20.7072 13.2071C20.8947 13.0196 21.0001 12.7652 21.0001 12.5C21.0001 12.2348 20.8947 11.9804 20.7072 11.7929C20.5197 11.6054 20.2653 11.5 20.0001 11.5H3.99609C3.73088 11.5 3.47652 11.6054 3.28899 11.7929C3.10145 11.9804 2.99609 12.2348 2.99609 12.5C2.99609 12.7652 3.10145 13.0196 3.28899 13.2071C3.47652 13.3946 3.73088 13.5 3.99609 13.5Z"/>
                                    </svg>

                                    <svg className="group-open:hidden fill-black" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.883 3.507L12 3.5C12.2449 3.50003 12.4813 3.58996 12.6644 3.75272C12.8474 3.91547 12.9643 4.13975 12.993 4.383L13 4.5V11.5H20C20.2449 11.5 20.4813 11.59 20.6644 11.7527C20.8474 11.9155 20.9643 12.1397 20.993 12.383L21 12.5C21 12.7449 20.91 12.9813 20.7473 13.1644C20.5845 13.3474 20.3603 13.4643 20.117 13.493L20 13.5H13V20.5C13 20.7449 12.91 20.9813 12.7473 21.1644C12.5845 21.3474 12.3603 21.4643 12.117 21.493L12 21.5C11.7551 21.5 11.5187 21.41 11.3356 21.2473C11.1526 21.0845 11.0357 20.8603 11.007 20.617L11 20.5V13.5H4C3.75507 13.5 3.51866 13.41 3.33563 13.2473C3.15259 13.0845 3.03566 12.8603 3.007 12.617L3 12.5C3.00003 12.2551 3.08996 12.0187 3.25272 11.8356C3.41547 11.6526 3.63975 11.5357 3.883 11.507L4 11.5H11V4.5C11 4.25507 11.09 4.01866 11.2527 3.83563C11.4155 3.65259 11.6397 3.53566 11.883 3.507L12 3.5L11.883 3.507Z"/>
                                    </svg>


                                </summary>
                                <div className="paragraph_3_Regular xs:paragraph_1_Regular text-gray">
                                    {description}
                                </div>
                            </details>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default Faq