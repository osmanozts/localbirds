"use client";

import { Box } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";

function useInViewOnce<T extends HTMLElement>() {
    const ref = useRef<T | null>(null);
    const [hasEntered, setHasEntered] = useState(false);

    useEffect(() => {
        const element = ref.current;

        if (!element || hasEntered) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setHasEntered(true);
                    observer.disconnect();
                }
            },
            {
                threshold: 0.16,
                rootMargin: "0px 0px -8% 0px",
            }
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, [hasEntered]);

    return { ref, hasEntered };
}

export function Reveal({
    children,
    delay = 0,
    y = 18,
}: {
    children: React.ReactNode;
    delay?: number;
    y?: number;
}) {
    const { ref, hasEntered } = useInViewOnce<HTMLDivElement>();

    return (
        <Box
            ref={ref}
            opacity={hasEntered ? 1 : 0}
            transform={hasEntered ? "translateY(0)" : `translateY(${y}px)`}
            transition="opacity 0.42s ease, transform 0.42s ease"
            transitionDelay={hasEntered ? `${delay}ms` : "0ms"}
        >
            {children}
        </Box>
    );
}