const MissionVissionBg = (props) => {

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={450}
            height={871}
            fill="none"
            {...props}
        >
            <g filter="url(#a)">
                <path fill="url(#b)" fillOpacity={0.2} d="M0 0h450v871H0z" />
            </g>
            <path stroke="url(#c)" strokeWidth={5} d="M0 868.5h450" />
            <path
                stroke="url(#d)"
                strokeWidth={5}
                d="M0-2.5h257.508"
                transform="matrix(0 1 1 0 450 613.13)"
            />
            <defs>
                <linearGradient
                    id="b"
                    x1={225}
                    x2={225}
                    y1={0}
                    y2={856.988}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#13C4FA" />
                    <stop offset={1} stopColor="#B40FE7" />
                </linearGradient>
                <linearGradient
                    id="c"
                    x1={0}
                    x2={450}
                    y1={871.5}
                    y2={871.5}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#13C4FA" />
                    <stop offset={1} stopColor="#B40FE7" />
                </linearGradient>
                <linearGradient
                    id="d"
                    x1={0}
                    x2={257.508}
                    y1={0.5}
                    y2={0.5}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#13C4FA" />
                    <stop offset={1} stopColor="#B40FE7" />
                </linearGradient>
                <filter
                    id="a"
                    width={458}
                    height={879}
                    x={-4}
                    y={-4}
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                >
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feGaussianBlur in="BackgroundImageFix" stdDeviation={2} />
                    <feComposite
                        in2="SourceAlpha"
                        operator="in"
                        result="effect1_backgroundBlur_179_3363"
                    />
                    <feBlend
                        in="SourceGraphic"
                        in2="effect1_backgroundBlur_179_3363"
                        result="shape"
                    />
                </filter>
            </defs>
        </svg>
    );
};

export default MissionVissionBg;