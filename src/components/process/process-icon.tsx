"use client";

import { Box, Icon } from "@chakra-ui/react";
import type { IconType } from "react-icons";
import { LuCheck, LuMessageSquare, LuWrench } from "react-icons/lu";

const iconMap = {
    message: LuMessageSquare,
    wrench: LuWrench,
    check: LuCheck,
} satisfies Record<string, IconType>;

export type ProcessIconKey = keyof typeof iconMap;

export function ProcessIcon({ icon }: { icon: ProcessIconKey }) {
    const StepIcon = iconMap[icon];

    return (
        <Box
            boxSize={{
                base: "button.height.sm",
                md: "button.height.md",
            }}
            rounded="interactive"
            bg="bg.primary"
            color="text.primary"
            display="grid"
            placeItems="center"
            aria-hidden="true"
            flexShrink={0}
        >
            <Icon
                as={StepIcon}
                boxSize={{
                    base: "icon.sm",
                    md: "icon.md",
                    lg: "icon.lg",
                }}
            />
        </Box>
    );
}