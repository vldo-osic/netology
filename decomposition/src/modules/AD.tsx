import { ADItem } from "../components/ADItem"
import { AD1, AD2 } from "../helpers/adData"


export const AD = () => {
    return (
        <>
            <ADItem position={{top: '140px', left: '1250px'}} adData={AD1}/>
            <ADItem position={{top: '100px', left: '200px'}} adData={AD2}/>
        </>
    )
}