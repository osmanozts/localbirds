// src/theme/index.ts
import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const customConfig = defineConfig({
  theme: {
    tokens: {
      colors: {
        red: { value: "#E30614" },
        gray: { value: "#9C9B98" },
        beige: { value: "#D2B7A5" },
        taupe: { value: "#95887B" },
        green: { value: "#16A34A" },
        blue: { value: "#2563EB" },
        white: { value: "#FFFFFF" },
        black: { value: "#000000" },

        surface: { value: "#F7F7F5" },
        surfaceAlt: { value: "#EFEDEA" },
        text: { value: "#18181B" },
        textMuted: { value: "#6B7280" },
        border: { value: "#E5E7EB" },

        overlay: { value: "rgba(0, 0, 0, 0.40)" },
        focusRing: { value: "rgba(227, 6, 20, 0.35)" },
      },

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
      },

      sizes: {
        xs: { value: "20rem" },
        sm: { value: "24rem" },
        md: { value: "28rem" },
        lg: { value: "32rem" },
        xl: { value: "36rem" },
        "2xl": { value: "42rem" },
        "3xl": { value: "48rem" },
        container: { value: "1240px" },

        controlSm: { value: "36px" },
        controlMd: { value: "44px" },
        controlLg: { value: "52px" },

        iconSm: { value: "16px" },
        iconMd: { value: "20px" },
        iconLg: { value: "24px" },
      },

      shadows: {
        xs: { value: "0 1px 2px rgba(0,0,0,0.04)" },
        sm: { value: "0 1px 2px rgba(0,0,0,0.06)" },
        md: { value: "0 4px 16px rgba(0,0,0,0.08)" },
        lg: { value: "0 10px 30px rgba(0,0,0,0.12)" },
        ring: { value: "0 0 0 3px rgba(227, 6, 20, 0.35)" },
      },

      blurs: {
        sm: { value: "8px" },
        md: { value: "12px" },
        lg: { value: "16px" },
      },

      animations: {
        "fadeIn.fast": { value: "fadeIn 120ms ease-out both" },
        "fadeIn.normal": { value: "fadeIn 180ms ease-out both" },
        "slideDown.fast": { value: "slideDown 150ms ease-out both" },
        "slideDown.normal": { value: "slideDown 200ms ease-out both" },
        "underline.grow": { value: "underlineGrow 200ms ease-in-out both" },

        "float.soft": { value: "floatSoft 6s ease-in-out infinite" },
        "drift.slow": { value: "driftSlow 18s ease-in-out infinite" },
        "drift.slower": { value: "driftSlower 22s ease-in-out infinite" },
        "scrollCue.loop": { value: "scrollCue 2.2s ease-in-out infinite" },
      },
    },

    keyframes: {
      fadeIn: {
        from: { opacity: 0 },
        to: { opacity: 1 },
      },
      slideDown: {
        from: { transform: "translateY(-6px)", opacity: 0 },
        to: { transform: "translateY(0)", opacity: 1 },
      },
      underlineGrow: {
        from: { transform: "scaleX(0)" },
        to: { transform: "scaleX(1)" },
      },

      floatSoft: {
        "0%": { transform: "translate3d(0,0,0)" },
        "50%": { transform: "translate3d(0,-8px,0)" },
        "100%": { transform: "translate3d(0,0,0)" },
      },
      driftSlow: {
        "0%": { transform: "translate3d(-10%,-10%,0)" },
        "50%": { transform: "translate3d(10%,10%,0)" },
        "100%": { transform: "translate3d(-10%,-10%,0)" },
      },
      driftSlower: {
        "0%": { transform: "translate3d(10%,10%,0)" },
        "50%": { transform: "translate3d(-10%,-10%,0)" },
        "100%": { transform: "translate3d(10%,10%,0)" },
      },
      scrollCue: {
        "0%": { transform: "translateY(0)", opacity: 0.2 },
        "50%": { transform: "translateY(140%)", opacity: 1 },
        "100%": { transform: "translateY(0)", opacity: 0.2 },
      },
    },

    breakpoints: {
      sm: "640px",
      md: "992px",
      lg: "1200px",
      xl: "1400px",
    },

    semanticTokens: {
      colors: {
        bg: { value: "{colors.white}" },
        bgSubtle: { value: "{colors.surface}" },
        bgMuted: { value: "{colors.surfaceAlt}" },
        surface: { value: "{colors.white}" },
        surfaceSubtle: { value: "{colors.surface}" },

        fg: { value: "{colors.text}" },
        fgMuted: { value: "{colors.textMuted}" },
        fgInverse: { value: "{colors.white}" },

        primary: { value: "{colors.red}" },
        primaryFg: { value: "{colors.white}" },

        accent: { value: "{colors.beige}" },
        accentFg: { value: "{colors.text}" },

        border: { value: "{colors.gray}" },
        borderStrong: { value: "{colors.black}" },

        success: { value: "{colors.green}" },
        successFg: { value: "{colors.white}" },

        error: { value: "{colors.red}" },
        errorFg: { value: "{colors.white}" },

        info: { value: "{colors.blue}" },
        infoFg: { value: "{colors.white}" },

        link: { value: "{colors.red}" },
        linkHover: { value: "{colors.black}" },

        overlay: { value: "{colors.overlay}" },
        focusRing: { value: "{colors.focusRing}" },

        buttonSolidBg: { value: "{colors.red}" },
        buttonSolidFg: { value: "{colors.white}" },
        buttonSubtleBg: { value: "{colors.surface}" },
        buttonSubtleFg: { value: "{colors.text}" },
        buttonOutlineBorder: { value: "{colors.border}" },

        badgeBg: { value: "{colors.surfaceAlt}" },
        badgeFg: { value: "{colors.text}" },

        divider: { value: "{colors.border}" },

        "surface.inverse": { value: "{colors.black}" },
        "surface.inverseMuted": { value: "{colors.gray}" },
        "surface.glass": { value: "rgba(255,255,255,0.14)" },
        "surface.glassStrong": { value: "rgba(255,255,255,0.22)" },
        "border.inverse": { value: "rgba(255,255,255,0.22)" },
        "border.inverseStrong": { value: "rgba(255,255,255,0.34)" },
      },

      radii: {
        interactive: { value: "{radii.md}" },
        card: { value: "{radii.lg}" },
        input: { value: "{radii.md}" },
        button: { value: "{radii.full}" },
        badge: { value: "{radii.full}" },
        panel: { value: "{radii.xl}" },
      },

      spacing: {
        "layout.gap": { value: "{spacing.6}" },
        "section.paddingX": { value: "{spacing.6}" },
        "section.paddingY": { value: "{spacing.16}" },

        "card.padding": { value: "{spacing.6}" },
        "card.gap": { value: "{spacing.4}" },

        "input.paddingX": { value: "{spacing.4}" },
        "input.paddingY": { value: "{spacing.3}" },

        "button.paddingX": { value: "{spacing.5}" },
        "button.paddingY": { value: "{spacing.3}" },

        "stack.gap.sm": { value: "{spacing.2}" },
        "stack.gap.md": { value: "{spacing.4}" },
        "stack.gap.lg": { value: "{spacing.6}" },

        "inset.xs": { value: "{spacing.1}" },
        "inset.sm": { value: "{spacing.2}" },
        "inset.md": { value: "{spacing.3}" },
        "inset.lg": { value: "{spacing.4}" },

        "divider.spacing": { value: "{spacing.3}" },
      },

      sizes: {
        "container.default": { value: "{sizes.container}" },

        "button.height.sm": { value: "{sizes.controlSm}" },
        "button.height.md": { value: "{sizes.controlMd}" },
        "button.height.lg": { value: "{sizes.controlLg}" },

        "input.height.sm": { value: "{sizes.controlSm}" },
        "input.height.md": { value: "{sizes.controlMd}" },
        "input.height.lg": { value: "{sizes.controlLg}" },

        "icon.sm": { value: "{sizes.iconSm}" },
        "icon.md": { value: "{sizes.iconMd}" },
        "icon.lg": { value: "{sizes.iconLg}" },
      },

      shadows: {
        card: { value: "{shadows.sm}" },
        raised: { value: "{shadows.md}" },
        overlay: { value: "{shadows.lg}" },
        focusRing: { value: "{shadows.ring}" },
      },

      blurs: {
        glass: { value: "{blurs.md}" },
        overlay: { value: "{blurs.lg}" },
      }
    },
  },
});

export const system = createSystem(defaultConfig, customConfig);
