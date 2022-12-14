import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`

/* 
===============
FONT
===============
*/


   
    ${
      '' /* @import url('https://fonts.googleapis.com/css?family=Catamaran:400,700|Grand+Hotel');  */
    }
    



/* 
===============
Variables
===============
*/

root {
    --clr-grey-input:#e8f0fe,
	--clr-primary: #678e3e,
	--clr-primary-light: #beed8c,
	--clr-grey-1: #102a42,
    --clr-grey-2:#575759;
	--clr-grey-5: #617d98,
	--clr-grey-10: #f1f5f8,
	--clr-white: #fff,
    --clr-Blue-1:#081d65;
    --clr-blue-2:#d7bde2;
	--span-color:#a82a14;
	--clr-green:#82E0AA ;

	--ff-primary: 'Catamaran', sans-serif;
	--ff-secondary: 'Grand hotel', cursive;
	--transition: all 3s ease;
	--spacing: 0.25rem;
	--radius: 0.5rem;
}

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
body {
	font-family: var(--ff-primary);
	background: ${({ theme }) => theme.colors.body};
	line-height: 1.5;
	font-size: 0.875rem;
	width: auto;
}
a {
	text-decoration: none;
}
img {
	width: 100%;
	display: block;
}
h1,
h2,
h3,
h4 {
	letter-spacing: var(--spacing);
	text-transform: capitalize;
	line-height: 1.25;
	margin-bottom: 0.75rem;
}
h1 {
	font-size: 3rem;
}
h2 {
	margin:1rem;
	font-size:2rem;
	color: var(--clr-green);
	font-family: var(--ff-secondary);
}
h3 {
	font-size: 1.5rem;
}
h4 {
	font-size: 0.875rem;
}
p {
	margin: 1rem;
	width:95%;
}

@media screen and (min-width) {
	
	h1 {
		font-size: 4rem;
	}
	h2 {
		font-size: 2.5rem;
	}
	h3 {
		font-size: 2rem;
	}
	h4 {
		font-size: 1rem;
	}
	body {
		font-size: 1rem;
	}
	h1,
	h2,
	h3,
	h4 {
		line-height: 1;
	}
}
`;
export default GlobalStyle;
