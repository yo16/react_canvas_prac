import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

import "./MySvg1.css";

const MySvg1 = () => {
    return (
        <div>
            sample1. TransformComponentの中にsvgタグ
            <TransformWrapper>
                <TransformComponent>
                    <svg width={400} height={400} >
                        <rect x="50" y="50" width="100" height="100" fill="blue" />
                        <circle cx="250" cy="150" r="50" fill="red" />
                        <text x="50" y="250" fontSize="20" fill="green">Hello, SVG!</text>
                    </svg>
                </TransformComponent>
            </TransformWrapper>
        </div>
    );
};

export default MySvg1;
