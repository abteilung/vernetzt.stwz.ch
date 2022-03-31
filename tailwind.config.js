const content = require("./Build/Carbon.Pipeline/purge");
const plugin = require('tailwindcss/plugin');

module.exports = {
	content,

	theme: {
		screens: {
			'sm': '640px',
			// => @media (min-width: 640px) { ... }
	  
			'md': '768px',
			// => @media (min-width: 768px) { ... }
	  
			'lg': '1024px',
			// => @media (min-width: 1024px) { ... }
	  
			'xl': '1366px',
			// => @media (min-width: 1280px) { ... }
	  
			'2xl': '1536px',
			// => @media (min-width: 1536px) { ... }
		},
		container: {
			center: true,
		},
		extend: {

            spacing: {
                '128': '32rem',
                '132': '34rem',
                '136': '36rem',
                '140': '40rem',
              },
        
			boxShadow: {
				'2xl': '0 0 35px 10px rgba(0, 0, 0, 0.1)',
				'3xl': '0 0 55px 15px rgba(0, 0, 0, 0.15)',
				'box': '0 0 20px 5px rgba(0, 0, 0, 0.1)',
			},

			zIndex: {
				'50': 50,
				'90': 90,
				'100': 100,
			},
			fontSize: {
				xs: ['14px', {
					lineHeight: '24px',
					letterSpacing: '0'
				}],
				sm: ['16px', {
					lineHeight: '24px',
					letterSpacing: '0'
				}],
				base:['18px', {
					lineHeight: '27px',
					letterSpacing: '0'
				}],
				lg: ['21px', {
					lineHeight: '28px',
					letterSpacing: '0'
				}],
				xl: ['27px', {
					lineHeight: '32.4px',
					letterSpacing: '0'
				}],
				'2xl': ['36px', {
					lineHeight: '48px',
					letterSpacing: '0'
				}],
				'3xl': ['42px', {
					lineHeight: '50px',
					letterSpacing: '0'
				}],
			},
			fontFamily: {
				'sans': ['Fira Sans Condensed', 'Helvetica', 'Arial', 'sans-serif'],
				'headings': ['Nunito', 'Helvetica', 'Arial', 'sans-serif'],
				// 'sansCondensed': ['Barlow Condensed', 'Helvetica', 'Arial', 'sans-serif'],
				// 'headings': ['chillax', 'ui-serif', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
				// 'fancy': ['Sharpie', 'ui-serif', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
			},
			inset: {
				'1/12': '8.333333%',
				'2/12': '16.666666%',
				'3/12': '25%',
				'4/12': '33.333333%',
				'5/12': '41.666666%',
				'6/12': '50%',
				'7/12': '58.333333%',
				'8/12': '66.666666%',
				'9/12': '75%',
				'10/12': '83.333333%',
				'11/12': '91.666666%',
				'12/12': '100%',
			},
			width: {
				'1/5': '20%',
				'2/5': '40%',
				'3/5': '60%',
				'4/5': '80%',
				'5/5': '100%',
				'1/7': '14.2857143%',
				'2/7': '28.5714286%',
				'3/7': '42.8571429%',
				'4/7': '57.1428571%',
				'5/7': '71.4285714%',
				'6/7': '85.7142857%',
			},
			height: theme => ({
				"screen/2": "50vh",
				"screen/40": "40vh",
				"screen/75": "75vh",
				"screen/3": "calc(100vh / 3)",
				"screen/4": "calc(100vh / 4)",
				"screen/5": "calc(100vh / 5)",
			}),
			minHeight: {
				'0': '0',
				'1/4': '25%',
				'1/2': '50%',
				'3/4': '75%',
				'full': '100%',
			},
		},
	},

	variants: {
		extend: {
			width: ['group-focus'],
			animation: ['hover', 'group-hover'],
		},
	},

	keyframes: {
		wiggle: {
			'0%, 100%': {
				transform: 'rotate(-6deg)'
			},
			'50%': {
				transform: 'rotate(6deg)'
			},
		}
	},
	
	animation: {
		wiggle: 'wiggle 0.25s ease-in-out infinite',
	},

	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/typography'),
		require('@tailwindcss/line-clamp'),
		require('daisyui'),
	],

    daisyui: {
        styled: false,
        base: false,
        utils: false,
        logs: false,
        rtl: false,
        themes: [
            {
                'default': {
                    'primary': '#edfe0e',
                    'primary-focus': '#D8942E',
                    'primary-content': '#ffffff',
                    'secondary': '#E64545',
                    'secondary-focus': '#831111',
                    'neutral': '#EFEFEF',
                    'error': '#ff9900',
                    'base-100': '#EFEFEF',
                    'base-200': '#f4f4f4',
                    'base-300': '#8f8f8f',
                    // other colors
                    'accent': '#E0AA59',
                    'accent-focus': '#D8942E',
                },
                'human': { // custom theme
                    'primary': '#00337B',
                    'primary-focus' : '#1B8DC4',
                    'primary-content' : '#ffffff',
                    'secondary' : '#ea5234',
                    'secondary-focus' : '#ea5234',
                    'neutral': '#EFEFEF',
                    'error': '#ff9900',
                    'base-100': '#E8F3F9',
                    'base-200': '#f4f4f4',
                    'base-300': '#8f8f8f',
                    // other colors
                    'accent': '#30A8E2',
                    'accent-focus': '#1B8DC4',
                },
                'vet': { // custom theme
                    'primary': '#00337B',
                    'primary-focus' : '#87B62A',
                    'primary-content' : '#ffffff',
                    'secondary' : '#333333',
                    'secondary-focus' : '#007451',
                    'neutral': '#EFEFEF',
                    'error': '#ff9900',
                    'base-100': '#F3F7E9',
                    'base-200': '#f4f4f4',
                    'base-300': '#8f8f8f',
                    // other colors
                    'accent': '#A2D340',
                    'accent-focus': '#87B62A',
                },
            },
        ],
    },

};
