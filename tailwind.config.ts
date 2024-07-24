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
                    700: '#321C59',
                    800: '#271545',
                    900: '#1E1035'

                },
                secondary: {

                    50: '#FEFCF9',
                    100: '#FDF5ED',
                    200: '#FCF1E4',
                    300: '#FAEAD8',
                    400: '#F9E6D1',
                    500: '#F8E0C5',
                    600: '#E2CCB3',
                    700: '#B09F8C',
                    800: '#887B6C',
                    900: '#685E53'

                },
                neutral: {
                    50: '#F9F9F9',
                    100: '#EEEEEE',
                    200: '#E5E5E5',
                    300: '#D9D9D9',
                    400: '#D2D2D2',
                    500: '#C7C7C7',
                    600: '#B5B5B5',
                    700: '#8D8D8D',
                    800: '#6D6D6D',
                    900: '#545454'
                }
            }
        }
    },

    plugins: [flowbitePlugin]
} as Config;