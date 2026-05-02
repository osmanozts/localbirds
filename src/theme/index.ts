import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const customConfig = defineConfig({
  theme: {
    tokens: {
      colors: {},

      fonts: {
        heading: {
          value:
            "Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
        },
        body: {
          value:
            "Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
        },
      },

      radii: {
        none: { value: "0px" },
        xs: { value: "4px" },
        sm: { value: "6px" },
        md: { value: "10px" },
        lg: { value: "14px" },
        xl: { value: "20px" },
        full: { value: "9999px" },

        interactive: { value: "{radii.md}" },
        card: { value: "{radii.lg}" },
        input: { value: "{radii.md}" },
        button: { value: "{radii.full}" },
        badge: { value: "{radii.full}" },
        panel: { value: "{radii.xl}" },
      },

      spacing: {
        0: { value: "0px" },
        1: { value: "4px" },
        2: { value: "8px" },
        3: { value: "12px" },
        4: { value: "16px" },
        5: { value: "20px" },
        6: { value: "24px" },
        8: { value: "32px" },
        10: { value: "40px" },
        12: { value: "48px" },
        16: { value: "64px" },
        20: { value: "80px" },
        24: { value: "96px" },

        layout: {
          gap: { value: "{spacing.6}" },
        },

        section: {
          px: { value: "{spacing.6}" },
          py: { value: "{spacing.16}" },
        },

        card: {
          padding: { value: "{spacing.6}" },
          gap: { value: "{spacing.4}" },
        },

        input: {
          px: { value: "{spacing.4}" },
          py: { value: "{spacing.3}" },
        },

        button: {
          px: { value: "{spacing.5}" },
          py: { value: "{spacing.3}" },
        },

        stack: {
          sm: { value: "{spacing.2}" },
          md: { value: "{spacing.4}" },
          lg: { value: "{spacing.6}" },
        },

        inset: {
          xs: { value: "{spacing.1}" },
          sm: { value: "{spacing.2}" },
          md: { value: "{spacing.3}" },
          lg: { value: "{spacing.4}" },
        },

        divider: {
          spacing: { value: "{spacing.3}" },
        },
      },

      sizes: {
        container: { value: "1440px" },

        box: {
          sm: { value: "380px" },
          md: { value: "480px" },
          lg: { value: "580px" },
        },

        control: {
          sm: { value: "36px" },
          md: { value: "44px" },
          lg: { value: "52px" },
        },

        icon: {
          sm: { value: "16px" },
          md: { value: "20px" },
          lg: { value: "24px" },
          xl: { value: "28px" },
          "2xl": { value: "32px" },
          "3xl": { value: "36px" },
          "4xl": { value: "40px" },
        },

        button: {
          height: {
            sm: { value: "36px" },
            md: { value: "44px" },
            lg: { value: "52px" },
          },
        },

        input: {
          height: {
            sm: { value: "{sizes.control.sm}" },
            md: { value: "{sizes.control.md}" },
            lg: { value: "{sizes.control.lg}" },
          },
        },
      },

      shadows: {
        xs: { value: "0 1px 2px rgba(136, 23, 44, 0.25)" },
        sm: { value: "0 1px 2px rgba(136, 23, 44, 0.25)" },
        md: { value: "0 4px 16px rgba(136, 23, 44, 0.24)" },
        lg: { value: "0 10px 30px rgba(136, 23, 44, 0.22)" },
        ring: { value: "0 0 0 3px rgba(136, 23, 44, 0.32)" },

        card: { value: "{shadows.sm}" },
        raised: { value: "{shadows.md}" },
        overlay: { value: "{shadows.lg}" },
        focusRing: { value: "{shadows.ring}" },
      },

      blurs: {
        sm: { value: "8px" },
        md: { value: "12px" },
        lg: { value: "16px" },

        glass: { value: "{blurs.md}" },
        overlay: { value: "{blurs.lg}" },
      },
    },

    semanticTokens: {
      colors: {
        bg: {
          primary: { value: "#ffffff" },
          accent: { value: "#88172C" },
          card: { value: "#EFEDEA" },
          inverse: { value: "#000000" },
          glass: { value: "rgba(255,255,255,0.14)" },
          glassStrong: { value: "rgba(255,255,255,0.22)" },
        },

        text: {
          primary: { value: "#18181B" },
          accent: { value: "#88172C" },
          muted: { value: "#6B7280" },
          inverse: { value: "#ffffff" },
        },

        button: {
          primary: { value: "#88172C" },
          strong: { value: "#5F0F1F" },
          glass: {
            value: "rgba(255,255,255,0.14)",
          },
        },

        link: {
          primary: { value: "#88172C" },
          hover: { value: "#5F0F1F" },
        },

        border: {
          primary: { value: "#88172C" },
          strong: { value: "#5F0F1F" },
          inverse: { value: "rgba(255,255,255,0.22)" },
          inverseStrong: { value: "rgba(255,255,255,0.34)" },
        },

        overlay: { value: "rgba(0,0,0,0.4)" },

        divider: {
          DEFAULT: { value: "#E5E7EB" },
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, customConfig);
