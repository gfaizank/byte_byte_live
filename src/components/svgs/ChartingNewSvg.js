const ChartingNewSvg = (props) => {

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={501}
            height={320}
            fill="none"
            className="stroke-transparent"
            {...props}
        >
            <path
                 className=" fill-[#ffffff] dark:fill-[#181919]"
                fillRule="evenodd"
                d="M279.581 0c8.285 0 15.001 6.716 15.001 15v19.493h191.271c8.285 0 15.001 6.715 15.001 15v112.533c0 8.284-6.716 15-15 15H329.489v127.027c0 8.284-6.716 15-15 15h-299.4c-8.285 0-15-6.716-15-15V145.36c0-8.284 6.715-15 15-15l102.317.002h93.926l40.726-.001V68.477h-66.24c-8.284 0-15-6.716-15-15V15c0-8.284 6.716-15 15.001-15h93.762Z"
                clipRule="evenodd"
            />
        </svg>
    );
};

export default ChartingNewSvg;