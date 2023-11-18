const ExperienceCard = ({ title, subtitle, link, cardColor, textColor, svgColor }) => {
    const cardClass = `card w-full ${cardColor} shadow-xl`;
    const titleTextClass = `text-sm font-semibold ${textColor}`;
    const svgClass = `w-6 h-6 ${cardColor} ${svgColor}`;
    const subtitleClass = `text-xs ${textColor}`;

    return (
        <a href={link} className={cardClass} target="_blank" rel="noopener noreferrer">
            <div className="card-body p-4">
                <div className="flex justify-between items-center mb-2"> {/* Margin bottom for spacing between title and subtitle */}
                    <p className={titleTextClass}>{title}</p>
                    <button className="flex-none">
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            strokeWidth={1.5} 
                            className={svgClass}
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                            />
                        </svg>
                    </button>
                </div>
                <p className={subtitleClass}>
                    {subtitle}
                </p>
            </div>
        </a>
    );
};

export default ExperienceCard;



// const ExperienceCard = ({ title, subtitle, link, cardColor, textColor }) => {
//     const cardClass = `card w-full ${cardColor} shadow-xl`;
//     const titleTextClass = `text-sm text-${textColor} p-2`;
//     const svgClass = `w-6 h-6 ${cardColor} stroke-${textColor}`;
//     const subtitleClass = `text-sm text-${textColor}`;

//     return (
//         <a href={link} className={cardClass} target="_blank" rel="noopener noreferrer">
//             <div className="card-body pt-2">
//                 {/* <h2 className="card-title">Card title!</h2> */}
//                 <div className="card-actions justify-end">
                   
//                 </div>
//                     <div className="card-title" >
                       
//                         <p className={titleTextClass}>{title}</p>
//                         <button>
//                             <svg 
//                                 xmlns="http://www.w3.org/2000/svg" 
//                                 fill="none" 
//                                 viewBox="0 0 24 24" 
//                                 strokeWidth={1.5} 
//                                 className={svgClass}
//                             ><path 
//                                 strokeLinecap="round" 
//                                 strokeLinejoin="round" 
//                                 d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"                            /></svg>
//                         </button>
//                     </div>
//                     <p className={subtitleClass}>
//                         {subtitle}
//                     </p>
//             </div>
//         </a>
//     );
// };

// export default ExperienceCard;