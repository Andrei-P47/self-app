import {NextPage} from "next";
import {useMediaQuery} from "../useMediaQuery";

const Map: NextPage = () => {

    const isBreakpoint = useMediaQuery(360)
    return (
        <div className="">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1211.5115878203642!2d28.830334145017442!3d47.025482964954456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97c34984111bb%3A0x871343440f2efd79!2sStephen%20the%20Great%20Abragan%20Monument!5e0!3m2!1sen!2s!4v1665990854507!5m2!1sen!2s"
                 loading="lazy" width="100%"  height={isBreakpoint ? 290 : 460} style={{border: '0px'}}
                referrerPolicy="no-referrer-when-downgrade" >
            </iframe>
        </div>
    )
}
export default Map;