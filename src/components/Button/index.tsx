import {NextComponentType, NextPage} from "next";

const Button: NextComponentType = (props:any) => {
    const title = props.title;

    return (
        <button className="w-full xs:w-auto mt-2.5 xs:mt-0 justify-center items-center py-[11px] px-[46px] bg-primary rounded-md shadow-[0px_12px_30px_rgba(24,92,255,0.18)]">
            <div className="headline_6_Bold text-white">{title}</div>
        </button>
    )
}


export default Button;