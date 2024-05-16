const AboutUsBg = (props) => {

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={350}
            className="lg:w-[382px]"
            height={635}
            fill="none"
            {...props}
        >
            <g filter="url(#a)">
                <path fill="url(#b)" fillOpacity={0.2} d="M0 0h382v635H0z" />
            </g>
            <path stroke="url(#c)" strokeWidth={5} d="M0 632.5h382" />
            <path
                stroke="url(#d)"
                strokeWidth={5}
                d="M0-2.5h187.735"
                transform="matrix(0 1 1 0 382 447)"
            />
            <defs>
                <linearGradient
                    id="b"
                    x1={191}
                    x2={191}
                    y1={0}
                    y2={624.784}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#13C4FA" />
                    <stop offset={1} stopColor="#B40FE7" />
                </linearGradient>
                <linearGradient
                    id="c"
                    x1={0}
                    x2={382}
                    y1={635.5}
                    y2={635.5}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#13C4FA" />
                    <stop offset={1} stopColor="#B40FE7" />
                </linearGradient>
                <linearGradient
                    id="d"
                    x1={0}
                    x2={187.735}
                    y1={0.5}
                    y2={0.5}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#13C4FA" />
                    <stop offset={1} stopColor="#B40FE7" />
                </linearGradient>
                <filter
                    id="a"
                    width={390}
                    height={643}
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
                        result="effect1_backgroundBlur_702_4583"
                    />
                    <feBlend
                        in="SourceGraphic"
                        in2="effect1_backgroundBlur_702_4583"
                        result="shape"
                    />
                </filter>
            </defs>
        </svg>
    );
};

export default AboutUsBg;