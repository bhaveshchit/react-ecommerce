import styled from 'styled-components'
import { Button } from '../styles/Button';

const ErrorPage = () => {
  return <Wrapper>
    <div className='container'>
      <div>
        <h2>404</h2>
        <h2>UH OH! You're lost</h2>
        <p>
          the page you are looking for does not exist.
        </p>
        <Button>
          Go Back To Home
        </Button>
      </div>
    </div>
    </Wrapper>
}

const Wrapper = styled.section`
.container {
  padding: 9rem 0;
  text-align:center;

  h1{
    font-size: 10 rem;
  }
}
`;

export default ErrorPage
