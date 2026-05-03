"use client";

import { Box, Stack } from "@chakra-ui/react";
import React, { useCallback, useRef, useState } from "react";
import type { IconType } from "react-icons";
import { ServiceCard } from "./service-card";

type Service = {
    icon: IconType;
    title: string;
    desc: string;
};

type ServiceMobileSliderProps = {
    services: Service[];
};

export function ServiceMobileSlider({ services }: ServiceMobileSliderProps) {
    const sliderRef = useRef<HTMLDivElement | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const updateActiveIndex = useCallback(() => {
        const slider = sliderRef.current;

        if (!slider) return;

        const cards = Array.from(
            slider.querySelectorAll<HTMLElement>("[data-service-slide]")
        );

        if (!cards.length) return;

        const sliderRect = slider.getBoundingClientRect();
        const sliderCenter = sliderRect.left + sliderRect.width / 2;

        let closestIndex = 0;
        let closestDistance = Number.POSITIVE_INFINITY;

        cards.forEach((card, index) => {
            const cardRect = card.getBoundingClientRect();
            const cardCenter = cardRect.left + cardRect.width / 2;
            const distance = Math.abs(cardCenter - sliderCenter);

            if (distance < closestDistance) {
                closestDistance = distance;
                closestIndex = index;
            }
        });

        setActiveIndex(closestIndex);
    }, []);

    const scrollToService = useCallback((index: number) => {
        const slider = sliderRef.current;

        if (!slider) return;

        const cards = Array.from(
            slider.querySelectorAll<HTMLElement>("[data-service-slide]")
        );

        const targetCard = cards[index];

        if (!targetCard) return;

        targetCard.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "start",
        });

        setActiveIndex(index);
    }, []);

    if (!services.length) return null;

    return (
        <Stack
            display={{ base: "flex", md: "none" }}
            gap="4"
            w="100%"
            aria-label="Leistungen"
        >
            <Box
                ref={sliderRef}
                role="region"
                aria-label="Leistungen horizontal durchscrollen"
                tabIndex={0}
                overflowX="auto"
                overflowY="hidden"
                scrollSnapType="x mandatory"
                scrollBehavior="smooth"
                scrollPaddingInline={{ base: "4", sm: "6" }}
                WebkitOverflowScrolling="touch"
                px={{ base: "4", sm: "6" }}
                pb="2"
                onScroll={updateActiveIndex}
                _focusVisible={{
                    outline: "none",
                    boxShadow: "focusRing",
                }}
                css={{
                    scrollbarWidth: "none",
                    "&::-webkit-scrollbar": {
                        display: "none",
                    },
                }}
            >
                <Stack
                    as="ul"
                    direction="row"
                    gap="4"
                    align="stretch"
                    w="max-content"
                    pr={{ base: "4", sm: "6" }}
                    listStyle="none"
                    p="0"
                    m="0"
                >
                    {services.map((service, index) => (
                        <Box
                            key={service.title}
                            as="li"
                            data-service-slide
                            flex="0 0 auto"
                            w={{ base: "76vw", sm: "340px" }}
                            maxW="340px"
                            scrollSnapAlign="start"
                        >
                            <ServiceCard service={service} index={index} />
                        </Box>
                    ))}
                </Stack>
            </Box>

            <Stack
                as="nav"
                direction="row"
                gap="2"
                justify="center"
                align="center"
                aria-label="Leistungen auswählen"
            >
                {services.map((service, index) => {
                    const isActive = activeIndex === index;

                    return (
                        <Box
                            key={service.title}
                            as="button"
                            aria-label={`${service.title} anzeigen`}
                            aria-current={isActive ? "true" : undefined}
                            onClick={() => scrollToService(index)}
                            w={isActive ? "6" : "2"}
                            h="2"
                            rounded="badge"
                            bg={isActive ? "bg.accent" : "divider"}
                            transition="width 0.2s ease, background-color 0.2s ease"
                            _focusVisible={{
                                outline: "none",
                                boxShadow: "focusRing",
                            }}
                        />
                    );
                })}
            </Stack>
        </Stack>
    );
}