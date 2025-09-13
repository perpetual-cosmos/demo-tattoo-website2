import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Tattoo shop neon colors
        "neon-blue": {
          DEFAULT: "hsl(var(--neon-blue))",
          glow: "hsl(var(--neon-blue-glow))",
        },
        "electric-red": {
          DEFAULT: "hsl(var(--electric-red))",
          glow: "hsl(var(--electric-red-glow))",
        },
        "neon-purple": {
          DEFAULT: "hsl(var(--neon-purple))",
          glow: "hsl(var(--neon-purple-glow))",
        },
        "dark-surface": "hsl(var(--dark-surface))",
        "darker-surface": "hsl(var(--darker-surface))",
      },
      backgroundImage: {
        "gradient-neon": "var(--gradient-neon)",
        "gradient-fire": "var(--gradient-fire)",
        "gradient-dark": "var(--gradient-dark)",
      },
      boxShadow: {
        "glow-blue": "var(--glow-blue)",
        "glow-red": "var(--glow-red)",
        "glow-purple": "var(--glow-purple)",
        "neon": "var(--shadow-neon)",
      },
      transitionTimingFunction: {
        "smooth": "cubic-bezier(0.4, 0, 0.2, 1)",
        "bounce": "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "glow-pulse": {
          "0%, 100%": {
            opacity: "1",
            transform: "scale(1)",
          },
          "50%": {
            opacity: "0.8",
            transform: "scale(1.05)",
          },
        },
        "slide-up": {
          from: {
            transform: "translateY(20px)",
            opacity: "0",
          },
          to: {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        "neon-flicker": {
          "0%, 100%": {
            textShadow: "0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor",
          },
          "50%": {
            textShadow: "0 0 2px currentColor, 0 0 5px currentColor, 0 0 8px currentColor",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        "slide-up": "slide-up 0.6s ease-out",
        "neon-flicker": "neon-flicker 1.5s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
