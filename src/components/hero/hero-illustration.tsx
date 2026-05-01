"use client";

import { Box, chakra } from "@chakra-ui/react";

export function HeroIllustration() {
    return (
        <Box
            aria-hidden="true"
            position="absolute"
            right={{ base: "-10", md: "12" }}
            top={{ base: "24", md: "16" }}
            w={{ base: "72", md: "2xl" }}
            maxW={{ base: "78%", md: "72%" }}
            opacity={{ base: "0.72", md: "0.95" }}
            pointerEvents="none"
        >
            <chakra.svg
                viewBox="0 0 860 480"
                fill="none"
                w="100%"
                h="auto"
                role="presentation"
            >
                <defs>
                    <radialGradient id="hero-lamp-glow" cx="50%" cy="0%" r="75%">
                        <stop offset="0%" stopColor="rgba(253, 224, 71, 0.46)" />
                        <stop offset="52%" stopColor="rgba(253, 224, 71, 0.18)" />
                        <stop offset="100%" stopColor="rgba(253, 224, 71, 0)" />
                    </radialGradient>
                </defs>

                {/* Boden */}
                <chakra.rect
                    x="92"
                    y="360"
                    width="676"
                    height="34"
                    rx="17"
                    fill="bg.glassStrong"
                />
                <chakra.rect
                    x="126"
                    y="390"
                    width="608"
                    height="10"
                    rx="5"
                    fill="bg.glassStrong"
                    opacity="0.7"
                />

                {/* Werkstatt-Hintergrund */}
                <chakra.rect
                    x="138"
                    y="74"
                    width="508"
                    height="228"
                    rx="26"
                    fill="bg.glass"
                    stroke="bg.card"
                    strokeWidth="2"
                />
                <chakra.path
                    d="M178 114H606"
                    stroke="bg.glassStrong"
                    strokeWidth="10"
                    strokeLinecap="round"
                />
                <chakra.path
                    d="M178 148H606"
                    stroke="bg.card"
                    strokeWidth="6"
                    strokeLinecap="round"
                    opacity="0.9"
                />
                <chakra.path
                    d="M178 180H606"
                    stroke="bg.card"
                    strokeWidth="6"
                    strokeLinecap="round"
                    opacity="0.7"
                />
                <chakra.path
                    d="M178 212H606"
                    stroke="bg.card"
                    strokeWidth="6"
                    strokeLinecap="round"
                    opacity="0.55"
                />

                {/* Diagnose-Display links unten */}
                <chakra.rect
                    x="104"
                    y="260"
                    width="132"
                    height="76"
                    rx="16"
                    fill="bg.primary"
                    opacity="0.95"
                />
                <chakra.rect x="118" y="276" width="72" height="8" rx="4" fill="bg.accent">
                    <animate
                        attributeName="width"
                        values="72;46;72"
                        dur="2.4s"
                        repeatCount="indefinite"
                    />
                </chakra.rect>
                <chakra.rect
                    x="118"
                    y="292"
                    width="92"
                    height="8"
                    rx="4"
                    fill="bg.glassStrong"
                >
                    <animate
                        attributeName="width"
                        values="92;58;92"
                        dur="2.8s"
                        repeatCount="indefinite"
                    />
                </chakra.rect>
                <chakra.rect
                    x="118"
                    y="308"
                    width="54"
                    height="8"
                    rx="4"
                    fill="bg.accent"
                    opacity="0.75"
                >
                    <animate
                        attributeName="width"
                        values="54;96;54"
                        dur="3.1s"
                        repeatCount="indefinite"
                    />
                </chakra.rect>
                <chakra.rect
                    x="118"
                    y="272"
                    width="6"
                    height="48"
                    rx="3"
                    fill="border.primary"
                    opacity="0.9"
                >
                    <animate
                        attributeName="x"
                        values="118;216;118"
                        dur="3.6s"
                        repeatCount="indefinite"
                    />
                </chakra.rect>

                {/* Schrank / Werkbank rechts */}
                <chakra.rect
                    x="668"
                    y="184"
                    width="92"
                    height="138"
                    rx="16"
                    fill="bg.glass"
                    stroke="bg.accent"
                    strokeWidth="2"
                />
                <chakra.path
                    d="M688 214H740M688 240H740M688 266H740"
                    stroke="bg.glassStrong"
                    strokeWidth="8"
                    strokeLinecap="round"
                />
                <chakra.circle cx="700" cy="298" r="6" fill="bg.accent" />
                <chakra.circle cx="726" cy="298" r="6" fill="bg.accent" />
                <chakra.path
                    d="M682 158H744"
                    stroke="bg.glassStrong"
                    strokeWidth="8"
                    strokeLinecap="round"
                />
                <chakra.path
                    d="M698 142L714 158L730 142"
                    stroke="bg.primary"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />

                {/* Hängelampe */}
                <chakra.g>
                    <animateTransform
                        attributeName="transform"
                        type="rotate"
                        values="-2.5 432 84;2.5 432 84;-2.5 432 84"
                        dur="5s"
                        repeatCount="indefinite"
                    />

                    <chakra.path
                        d="M432 28V84"
                        stroke="bg.accent"
                        strokeWidth="4"
                        strokeLinecap="round"
                    />

                    <chakra.path
                        d="M376 106H488L538 246H326L376 106Z"
                        fill="url(#hero-lamp-glow)"
                        opacity="0.78"
                    >
                        <animate
                            attributeName="opacity"
                            values="0.56;0.82;0.56"
                            dur="3.6s"
                            repeatCount="indefinite"
                        />
                    </chakra.path>

                    <chakra.ellipse
                        cx="432"
                        cy="224"
                        rx="118"
                        ry="30"
                        fill="rgba(253, 224, 71, 0.18)"
                    >
                        <animate
                            attributeName="rx"
                            values="104;124;104"
                            dur="3.6s"
                            repeatCount="indefinite"
                        />
                        <animate
                            attributeName="opacity"
                            values="0.32;0.58;0.32"
                            dur="3.6s"
                            repeatCount="indefinite"
                        />
                    </chakra.ellipse>

                    <chakra.path d="M404 88H460L446 108H418L404 88Z" fill="bg.primary" />

                    <chakra.path
                        d="M414 108H450"
                        stroke="rgba(253, 224, 71, 0.9)"
                        strokeWidth="5"
                        strokeLinecap="round"
                    >
                        <animate
                            attributeName="opacity"
                            values="0.65;1;0.65"
                            dur="2.6s"
                            repeatCount="indefinite"
                        />
                    </chakra.path>

                    <chakra.ellipse
                        cx="432"
                        cy="116"
                        rx="76"
                        ry="22"
                        fill="rgba(253, 224, 71, 0.24)"
                        opacity="0.55"
                    >
                        <animate
                            attributeName="opacity"
                            values="0.34;0.68;0.34"
                            dur="3.6s"
                            repeatCount="indefinite"
                        />
                        <animate
                            attributeName="rx"
                            values="70;84;70"
                            dur="3.6s"
                            repeatCount="indefinite"
                        />
                    </chakra.ellipse>
                </chakra.g>

                {/* Hebebühne */}
                <chakra.rect
                    x="250"
                    y="160"
                    width="18"
                    height="200"
                    rx="9"
                    fill="bg.glassStrong"
                />
                <chakra.rect
                    x="562"
                    y="160"
                    width="18"
                    height="200"
                    rx="9"
                    fill="bg.glassStrong"
                />
                <chakra.path
                    d="M268 284L326 256"
                    stroke="bg.glassStrong"
                    strokeWidth="10"
                    strokeLinecap="round"
                />
                <chakra.path
                    d="M562 284L504 256"
                    stroke="bg.glassStrong"
                    strokeWidth="10"
                    strokeLinecap="round"
                />

                {/* Bewegte Bühne mit Auto */}
                <chakra.g>
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        values="0 0;0 -8;0 0"
                        dur="4.8s"
                        repeatCount="indefinite"
                    />

                    <chakra.rect
                        x="282"
                        y="272"
                        width="266"
                        height="12"
                        rx="6"
                        fill="bg.glassStrong"
                    />

                    <chakra.path
                        d="M272 288L330 194C343 171 367 158 393 158H502C529 158 554 173 567 198L620 288H272Z"
                        fill="bg.accent"
                    />
                    <chakra.path
                        d="M346 206C356 189 374 180 394 180H438V248H290L346 206Z"
                        fill="bg.glassStrong"
                    />
                    <chakra.path
                        d="M458 180H502C521 180 540 189 551 205L590 248H458V180Z"
                        fill="bg.glassStrong"
                    />
                    <chakra.rect
                        x="244"
                        y="248"
                        width="408"
                        height="78"
                        rx="28"
                        fill="bg.primary"
                        opacity="0.98"
                    />
                    <chakra.path
                        d="M262 228H314M580 228H616M364 274H450"
                        stroke="bg.glassStrong"
                        strokeWidth="10"
                        strokeLinecap="round"
                    />

                    <chakra.g>
                        <chakra.circle cx="332" cy="332" r="46" fill="bg.inverse" />
                        <chakra.circle cx="332" cy="332" r="21" fill="bg.accent" />
                        <chakra.path
                            d="M332 314V350M314 332H350M320 320L344 344M344 320L320 344"
                            stroke="bg.primary"
                            strokeWidth="4"
                            strokeLinecap="round"
                        >
                            <animateTransform
                                attributeName="transform"
                                type="rotate"
                                values="0 332 332;360 332 332"
                                dur="8s"
                                repeatCount="indefinite"
                            />
                        </chakra.path>
                    </chakra.g>

                    <chakra.g>
                        <chakra.circle cx="550" cy="332" r="46" fill="bg.inverse" />
                        <chakra.circle cx="550" cy="332" r="21" fill="bg.accent" />
                        <chakra.path
                            d="M550 314V350M532 332H568M538 320L562 344M562 320L538 344"
                            stroke="bg.primary"
                            strokeWidth="4"
                            strokeLinecap="round"
                        >
                            <animateTransform
                                attributeName="transform"
                                type="rotate"
                                values="0 550 332;360 550 332"
                                dur="8s"
                                repeatCount="indefinite"
                            />
                        </chakra.path>
                    </chakra.g>
                </chakra.g>

                {/* Funken / Werkstatt-Aktivität */}
                <chakra.g>
                    <chakra.path
                        d="M520 118L526 106L532 118L544 124L532 130L526 142L520 130L508 124L520 118Z"
                        fill="bg.primary"
                    >
                        <animate
                            attributeName="opacity"
                            values="0.35;1;0.35"
                            dur="1.8s"
                            repeatCount="indefinite"
                        />
                    </chakra.path>
                    <chakra.path
                        d="M604 146L608 138L612 146L620 150L612 154L608 162L604 154L596 150L604 146Z"
                        fill="bg.glassStrong"
                    >
                        <animate
                            attributeName="opacity"
                            values="0.2;0.9;0.2"
                            dur="2.2s"
                            repeatCount="indefinite"
                        />
                    </chakra.path>
                    <chakra.path
                        d="M350 132L354 124L358 132L366 136L358 140L354 148L350 140L342 136L350 132Z"
                        fill="bg.glassStrong"
                    >
                        <animate
                            attributeName="opacity"
                            values="0.15;0.75;0.15"
                            dur="2.7s"
                            repeatCount="indefinite"
                        />
                    </chakra.path>
                </chakra.g>

                {/* Dampf / Rauch aus dem Motorraum */}
                <chakra.g opacity="0.9">
                    <chakra.path
                        d="M594 168C594 152 604 150 604 136C604 124 596 120 596 108"
                        stroke="bg.glassStrong"
                        strokeWidth="6"
                        strokeLinecap="round"
                    >
                        <animate
                            attributeName="opacity"
                            values="0;0.75;0"
                            dur="2.4s"
                            repeatCount="indefinite"
                        />
                        <animateTransform
                            attributeName="transform"
                            type="translate"
                            values="0 8;0 -10;0 -20"
                            dur="2.4s"
                            repeatCount="indefinite"
                        />
                    </chakra.path>
                    <chakra.path
                        d="M614 172C614 158 624 154 624 140C624 128 616 124 616 112"
                        stroke="bg.glassStrong"
                        strokeWidth="5"
                        strokeLinecap="round"
                    >
                        <animate
                            attributeName="opacity"
                            values="0;0.6;0"
                            dur="2.8s"
                            begin="0.5s"
                            repeatCount="indefinite"
                        />
                        <animateTransform
                            attributeName="transform"
                            type="translate"
                            values="0 6;0 -8;0 -18"
                            dur="2.8s"
                            begin="0.5s"
                            repeatCount="indefinite"
                        />
                    </chakra.path>
                </chakra.g>

                {/* Pulsfläche unter dem Auto */}
                <chakra.ellipse
                    cx="448"
                    cy="346"
                    rx="202"
                    ry="24"
                    fill="bg.glass"
                    opacity="0.5"
                >
                    <animate
                        attributeName="rx"
                        values="190;208;190"
                        dur="4.4s"
                        repeatCount="indefinite"
                    />
                    <animate
                        attributeName="opacity"
                        values="0.36;0.62;0.36"
                        dur="4.4s"
                        repeatCount="indefinite"
                    />
                </chakra.ellipse>
            </chakra.svg>
        </Box>
    );
}