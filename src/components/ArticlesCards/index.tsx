import {NextPage} from "next";
import {ArticleCards} from "../../constants/articleCards.constants";
import Image from "next/image";
import {Button} from "../index";

const ArticlesCards: NextPage = () => {

    return (
        <div className="container px-4 xs:px-0 xs:mx-auto w-[360px] xs:w-[1110px] my-[50px] xs:my-[120px]">
            <div className="grid grid-cols-1 xs:grid-cols-2 gap-y-[40px] gap-x-[30px]">
                {ArticleCards.map(({ image,date, title, description,tags}, index) => {
                    return (
                        <div className="flex flex-col items-start pb-[20px] xs:pb-[30px] gap-[20px] xs:gap-[30px] rounded-md shadow-card-3" key={index}>
                            <div className="pt-[6px] xs:pt-0">
                                <Image
                                    src={image}
                                    alt={'logo'}
                                    width={540}
                                    height={300}
                                />
                            </div>
                            <div className="flex flex-col items-start px-[20px] xs:px-[35px] gap-[12px] xs:gap-[17px]">
                                <div className="paragraph_3_Regular text-gray">
                                    {date}
                                </div>
                                <div className="headline_6_Bold xs:headline_4_Bold">
                                    {title}
                                </div>
                                <div className="paragraph_2_Regular text-gray hidden xs:block">
                                    {description}
                                </div>
                                <div className="flex flex-row items-center gap-[15px]">
                                    {tags.map((enums,index) =>{
                                        return(
                                            <div className="box-border flex flex-row items-start py-[3px] px-[11px] gap-[10px] border border-background rounded-md text-primary" key={index}>
                                                {tags[index]}
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                        )
                })}
            </div>
            <div className="flex items-center justify-center pt-[30px] xs:pt-[50px] ">
                <button className="w-full xs:w-auto justify-center items-center py-[10px] px-[25px] gap-[10px] bg-primary rounded-md">
                    <div className="headline_7_SemiBold text-white">More articles</div>
                </button>
            </div>
        </div>
    );
}

export default ArticlesCards;