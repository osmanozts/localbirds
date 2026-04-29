"use client";

import { HStack, Icon, Text } from "@chakra-ui/react";
import { LuBird, LuWrench } from "react-icons/lu";

export function HeroBadge() {
    return (
        <HStack
            px="3"
            py="2"
            rounded="badge"
            borderWidth="1px"
            borderColor="border.inverseStrong"
            bg="bg.glass"
            backdropFilter="blur(glass)"
        >
            <Icon as={LuBird} boxSize={{ base: "icon.sm", md: "icon.4xl" }} />
        </HStack>
    );
}