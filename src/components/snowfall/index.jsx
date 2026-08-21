import Snowfall from "react-snowfall";

// export default function SnowfallEffect(props) {
    
//     // return <Snowfall {...props}/>;
//     return <Snowfall color="#82C3D9"/>;
// }

export default function SnowfallEffect(props) {
    const now = new Date();
    const isDecember = now.getMonth()===11;
    if (!isDecember) {
        return null;        
    }
    return <Snowfall {...props}/>;
}