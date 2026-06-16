export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))'
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))'
        },
        brass: '#d9a441',
        'brass-light': '#e8b85a',
        'glass-white': 'rgba(255,255,255,0.04)',
        electric: '#3b82f6',
        cyan: '#22d3ee',
        steel: {
          'blue': '#4a6c8f',
          'deep': '#10151c',
          'mid': '#1e2a38',
        },
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
        heading: ['Space Grotesk', 'sans-serif'],
        serif: ['Lora', 'serif'],
        mono: ['Space Mono', 'monospace'],
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      },
    
      backgroundImage: {
        'btn-primary': 'linear-gradient(135deg, #3b82f6 0%, #22d3ee 100%)',
        'btn-brass': 'linear-gradient(135deg, #d9a441 0%, #e8b85a 100%)',
        'hero-gradient': 'linear-gradient(135deg, #10151c 0%, #1e2a38 60%, #2a3f58 100%)',
        'card-gradient': 'linear-gradient(145deg, #1a2535 0%, #0f1520 100%)',
      },
      boxShadow: {
        contact: '0 4px 6px -1px rgba(0,0,0,0.6), 0 2px 4px -1px rgba(0,0,0,0.4)',
        'contact-lg': '0 8px 12px -2px rgba(0,0,0,0.7), 0 4px 6px -1px rgba(0,0,0,0.5)',
        'contact-brass': '0 4px 6px -1px rgba(217,164,65,0.25), 0 2px 4px -1px rgba(0,0,0,0.4)',
      },}
  },
  plugins: [require("tailwindcss-animate")],
}
