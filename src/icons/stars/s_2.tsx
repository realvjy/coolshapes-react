import React from "react";
import defaultProps from "../defaultProps";

export default function Star({size, noise, ...props}: any) {
    return (
        <svg
            {...defaultProps}
            {...props}
            width={size}
            height={size}
        >
            <g clipPath="url(#clip0_620_2150)">
                <mask
                    id="mask0_620_2150"
                    style={{ maskType: "alpha" }}
                    width="200"
                    height="190"
                    x="0"
                    y="5"
                    maskUnits="userSpaceOnUse"
                >
                    <path
                        fill="#fff"
                        d="M100 5l27.194 67.642L200 77.573l-56 46.737L161.803 195 100 156.242 38.197 195 56 124.31 0 77.573l72.806-4.93L100 5z"
                    ></path>
                </mask>
                <g mask="url(#mask0_620_2150)">
                    <path fill="#fff" d="M200 0H0v200h200V0z"></path>
                    <path
                        fill="url(#paint0_linear_620_2150)"
                        d="M200 0H0v200h200V0z"
                    ></path>
                    <g filter="url(#filter0_f_620_2150)">
                        <path fill="#FF58E4" d="M130 0H69v113h61V0z"></path>
                        <path
                            fill="#0CE548"
                            fillOpacity="0.35"
                            d="M196 91H82v102h114V91z"
                        ></path>
                        <path
                            fill="#FFE500"
                            fillOpacity="0.74"
                            d="M113 80H28v120h85V80z"
                        ></path>
                    </g>
                </g>
            </g>
            <g style={{ mixBlendMode: "overlay" }} mask="url(#mask0_620_2150)">
                {noise && (
                    <path
                        fill="gray"
                        stroke="transparent"
                        d="M200 0H0v200h200V0z"
                        filter="url(#feTurbS02)"
                    />
                )}
            </g>
            <defs>
                <filter
                    id="filter0_f_620_2150"
                    width="278"
                    height="310"
                    x="-27"
                    y="-55"
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                    <feBlend
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                    ></feBlend>
                    <feGaussianBlur
                        result="effect1_foregroundBlur_620_2150"
                        stdDeviation="27.5"
                    ></feGaussianBlur>
                </filter>
                <linearGradient
                    id="paint0_linear_620_2150"
                    x1="186.5"
                    x2="37"
                    y1="37"
                    y2="186.5"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#0E6FFF" stopOpacity="0.51"></stop>
                    <stop offset="1" stopColor="#00F0FF" stopOpacity="0.59"></stop>
                </linearGradient>
                <filter
                    id="feTurbS02"
                    width="100%"
                    height="100%"
                    x="0%"
                    y="0%"
                    filterUnits="objectBoundingBox"
                >
                    <feTurbulence
                        baseFrequency="0.6"
                        numOctaves="5"
                        result="out1"
                        seed="4"
                    ></feTurbulence>
                    <feComposite
                        in="out1"
                        in2="SourceGraphic"
                        operator="in"
                        result="out2"
                    ></feComposite>
                    <feBlend
                        in="SourceGraphic"
                        in2="out2"
                        mode="overlay"
                        result="out3"
                    ></feBlend>
                </filter>
                <clipPath id="clip0_620_2150">
                    <path fill="#fff" d="M0 0H200V200H0z"></path>
                </clipPath>
            </defs>
        </svg>
    );
}