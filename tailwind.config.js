
module.exports =({
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
    mode: 'jit',
    purge: ['./src/**/*.js', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            sans: ['Roboto', 'sans-serif'],
            serif: ['"Roboto Slab"', 'serif'],
            body: ['Roboto', 'sans-serif'],
        },
        extend: {
            backgroundImage: {
                'hero-pattern': "url('assets/img/1095.webp')",
                
              }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('flowbite/plugin')
    ],
});
