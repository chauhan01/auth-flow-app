import { Link } from 'react-router-dom';
import styled from 'styled-components';
import main from '../assets/main.svg';
import { Redirect } from 'react-router-dom';
import { useGlobalContext } from '../context';
function Home() {
  const { user } = useGlobalContext();
  return (
    <>
      {user && <Redirect to='/dashboard' />}
      <Wrapper className='page'>
        <div className='info'>
          <h2>
            <span>Auth</span>
            Workflow
          </h2>
          <p>
            This is a test app. To test this app, register using a valid email.
            Once user registers, a confirmation email will be sent to the email address provided during registration.
            Once user comfirms the email, he/she can login to the app.
            If user forgets the password he/she can use the forget password option provided in the login page.
            When user enters the registered email address, an email will be sent to the user with reset password link.
            The link will be valid for 15 minutes only.
          </p>

          <Link to='/login' className='btn'>
            Login
          </Link>
          <Link to='/register' className='btn'>
            Register
          </Link>
        </div>
        <img src={main} alt='job hunt' className='img main-img' />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: grid;
  align-items: center;
  h2 {
    font-weight: 700;
  }
  h2 span {
    color: var(--primary-500);
  }
  .main-img {
    display: none;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    column-gap: 6rem;
    .main-img {
      display: block;
    }
  }
  .btn {
    margin-left: 0.25rem;
    margin-right: 0.25rem;
  }
`;

export default Home;
