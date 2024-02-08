import React, {useState}from "react";

const Spoiler = ({title, content}) => {
    const[isvisible, setIsvisible] = useState(false);
    const toggleVisibility = () => setIsvisible(!isvisible);
    return (
        <div class="qa-card spoiler">
            <button class="qa-card__top spoiler__toggle" onClick={toggleVisibility}>
                <div class="qa-card__btn">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {!isvisible ? (
                            <path class="_hide" d="M14 3.5V24.5" stroke="#1C1C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        ) : null}
                        
                        <path d="M3.5 14L24.5 14" stroke="#1C1C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
                <div class="qa-card__title text46">
                    {title}
                </div>
            </button>
            {isvisible ? (
            <div class="qa-card__bottom">
                <div class="spoiler__wrap">
                    <div class="text20 text16-tablet">
                         {content}
                    </div>
                </div>
            </div>
            ) : null}
        </div>
    );
}
export default Spoiler