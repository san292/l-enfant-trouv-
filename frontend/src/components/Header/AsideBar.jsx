import { IoMdClose } from 'react-icons/io';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { navLink } from './links';

const AsideBar = ({ toggleBar, handleToggleSidebar }) => {
	return (
		<Wrapper className='show-links'>
			<div className={`${toggleBar ? 'sidebar' : 'show-links'}`}>
				<button onClick={handleToggleSidebar} className='close-btn'>
					<IoMdClose />
				</button>
				<ul className='side-links'>
					{navLink.map((link, idx) => {
						const { pathname, name } = link;

						return (
							<li key={idx}>
								<Link className='links' to={pathname}>
									{name}
								</Link>
							</li>
						);
					})}
				</ul>
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.aside`
	.sidebar {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: var(--clr-grey-1);
		z-index: 999;
		display: grid;
		justify-content: center;
		align-items: center;
		text-align: center;
	}

	.sidebar-links {
		text-align: center;
	}
	.links {
		text-align: center;
		font-size: 2rem;
		text-transform: capitalize;
		color: #fff;
		letter-spacing: 0.25rem;
		display: inline-block;
	}
	.links:hover {
		color: #222;
	}

	.close-btn {
		position: absolute;
		top: 1rem;
		right: 1rem;
		background: transparent;
		color: red;
		border: none;
		font-size: 2rem;
	}
	.close-btn:hover {
		color: #e66b6b;
	}

	.show-sidebar {
		transform: translateX(0);
	}
`;

export default AsideBar;
