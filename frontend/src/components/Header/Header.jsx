import Button from '../../UI/button/Button';
import { navLink } from './links';
import styled from 'styled-components';

const Header = () => {
	return (
		<Wrapper>
			<nav>
				<div>
					<ul>
						{navLink.map((link, idx) => (
							<li key={idx}>{link}</li>
						))}
					</ul>
				</div>
				<div>
					<Button color='red' name='je donne' />
					<input />
				</div>
			</nav>
		</Wrapper>
	);
};
export default Header;

const Wrapper = styled.header`
	background-color: #eee9e9;

	nav {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		height: 5rem;
	}
	ul {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	li {
		list-style: none;
		margin-right: 10px;
	}
`;
