/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './resources/**/*.antlers.html',
        './resources/**/*.antlers.php',
        './resources/**/*.blade.php',
        './resources/**/*.vue',
        './content/**/*.md',
    ],

    theme: {
        extend: {
            fontFamily:{
                'sans':["Geist", "sans-serif"]
            },
            colors:{
                'rangitoto': {
                    '50': '#f4f6ef',
                    '100': '#e7ebdc',
                    '200': '#d1d8be',
                    '300': '#b2bf97',
                    '400': '#97a774',
                    '500': '#798b57',
                    '600': '#5f6e42',
                    '700': '#4a5536',
                    '800': '#3c462e',
                    '900': '#2c3223',
                    '950': '#1b1f14',
                },
    
            }
        },
    },

    plugins: [
        require('@tailwindcss/typography'),
    ],
};
