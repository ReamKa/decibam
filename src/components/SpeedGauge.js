import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ArcGauge } from '@progress/kendo-react-gauges';
const colors = [{
    to: 60,
    color: '#0058e9'
}, {
    from: 60,
    to: 80,
    color: '#37b400'
}, {
    from: 80,
    to: 90,
    color: '#FFFF00'
}, {
    from: 90,
    to: 100,
    color: '#ffc000'
},{
    from: 100,
    color: '#f31700'
}];

const SpeedGauge = () => {
    const [value, setValue] = React.useState(8);
    React.useEffect(() => {
        setInterval(() => {
            setValue({valueToReplace}); //valueToReplace est à modifier par la valeur en DB que nous obtiendrons
        }, 1000);
    }, []);
    const arcOptions = {
        value: value,
        colors
    };

    const arcCenterRenderer = (value, color) => {
        return <h3 style={{
            color: color
        }}>{value}%</h3>;
    };

    return <ArcGauge {...arcOptions} arcCenterRender={arcCenterRenderer} />;
};

ReactDOM.render(<SpeedGauge />, document.querySelector('my-app'));