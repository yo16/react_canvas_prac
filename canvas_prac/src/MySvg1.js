import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

import "./MySvg1.css";

const MySvg1 = () => {
    return (
        <div>
            react-zoom-pan-pinchを使った例
            <TransformWrapper
                minScale={0.1}
            >
                <TransformComponent>
                    <svg width={550} height={400} style={{backgroundColor: "#dde"}} >
                        <rect x="50" y="50" width="100" height="100" fill="blue" />
                        <circle cx="250" cy="150" r="50" fill="red" />
                        <text x="50" y="250" fontSize="20" fill="green">Hello, SVG!</text>
                        <rect x="350" y="50" width="200" height="100" fill="lightblue" />
                        <circle cx="460" cy="150" r="50" fill="green" />
                    </svg>
                </TransformComponent>
            </TransformWrapper>
        </div>
    );
};

export default MySvg1;
