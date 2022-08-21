import styled from 'styled-components';
import childPhoto from '../../UI/images/child.jpg';
import Button from '../../UI/button/Button';

const Main = () => {
	return (
		<Wrapper>
			<Button className='btn' name='hello' />
		</Wrapper>
	);
};
export default Main;

const Wrapper = styled.main`
	min-height: calc(100vh);
	background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
		url(${childPhoto}) center/cover no-repeat fixed;
`;
