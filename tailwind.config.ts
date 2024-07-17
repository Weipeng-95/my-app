import flowbitePlugin from 'flowbite/plugin'

import type { Config } from 'tailwindcss';

export default {
    content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'],

    theme: {
        extend: {
            colors: {
                // flowbite-svelte
                primary: {
               
                    50: '#EDE9F2',
                    100: '#C6BCD7',
                    200: '#AA9CC3',
                    300: '#846EA8',
                    400: '#6C5297',
                    500: '#47277D',
                    600: '#412372',
                    700: '#AA9CC3',
                    800: '#271545',
                    900: '#1E1035'
                  
                }
            }
        }
    },

    plugins: [flowbitePlugin]
} as Config;