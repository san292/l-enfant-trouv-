import { navLink } from './links';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderTest = () => {
	return (
		<Wrapper>
			<div className='nav-center'>
				<div className='nav-header'>
					<Link to='/'>Logo</Link>
				</div>
				<ul className='nav-links'>
					{navLink.map((link, idx) => {
						const { pathname, name } = link;

						return (
							<li>
								<Link to={pathname}>{name}</Link>
							</li>
						);
					})}
				</ul>
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.nav`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 5rem;
	.nav-center {
		width: 90vw;
		margin: 0 auto;
		max-width: 1170px;
	}
	.nav-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.nav-links {
		display: none;
	}
	@media (min-width: 992px) {
		.nav-center {
			display: grid;
			grid-template-columns: auto 1fr auto;
			align-items: center;
		}
		.nav-links {
			display: flex;
			justify-content: center;
			li {
				margin: 0 0.5rem;
			}
			a {
				color: 'grey';
				font-size: 0.65rem;
				text-transform: capitalize;
				letter-spacing: 0.25rem;
				padding: 0.5rem;
				&:hover {
					border-bottom: 2px solid red;
				}
			}
		}
	}
`;

export default HeaderTest;
