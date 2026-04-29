"use client";

import { Box, Stack } from '@chakra-ui/react';
import React, { useCallback, useRef, useState } from 'react'
import { ServiceCard } from './service-card';
import { IconType } from 'react-icons';

export function ServiceMobileSlider({ services }: {
    services: {
        icon: IconType;
        title: string;
        desc: string;
    }[]
}) {
    const sliderRef = useRef<HTMLDivElement | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const updateActiveIndex = useCallback(() => {
        const slider = sliderRef.current;

        if (!slider) return;

        const cards = Array.from(
            slider.querySelectorAll<HTMLElement>("[data-service-slide]")
        );

        if (!cards.length) return;

        const sliderLeft = slider.getBoundingClientRect().left;

        let closestIndex = 0;
        let closestDistance = Number.POSITIVE_INFINITY;

        cards.forEach((card, index) => {
            const cardLeft = card.getBoundingClientRect().left;
            const distance = Math.abs(cardLeft - sliderLeft);

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

    return (
        <Stack display={{ base: "flex", md: "none" }} gap="4">
            <Box
                ref={sliderRef}
                overflowX="auto"
                overflowY="hidden"
                scrollSnapType="x mandatory"
                scrollBehavior="smooth"
                WebkitOverflowScrolling="touch"
                mx="-4"
                pb="2"
                px="4"
                onScroll={updateActiveIndex}
                css={{
                    scrollbarWidth: "none",
                    "&::-webkit-scrollbar": {
                        display: "none",
                    },
                }}
            >
                <Stack direction="row" gap="4" align="stretch">
                    {services.map((service, index) => (
                        <Box
                            key={service.title}
                            data-service-slide
                            flex="0 0 auto"
                            w={{ base: "82vw", sm: "360px" }}
                            maxW="360px"
                            scrollSnapAlign="start"
                        >
                            <ServiceCard service={service} index={index} />
                        </Box>
                    ))}
                </Stack>
            </Box>


            <Stack
                direction="row"
                gap="2"
                justify="center"
                align="center"
                aria-label="Leistungen Navigation"
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
    )
}
