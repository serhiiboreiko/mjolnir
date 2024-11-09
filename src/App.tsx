import styled from 'styled-components';
import './App.css';

const Title = styled.h1`
  color: white;
`;

const App = () => {
  return (
    <main class="container">
      <Title>Welcome to Mjolnir</Title>

      <div class="row">
        <img src="/logo.svg" class="logo" alt="Mjolnir logo" />
      </div>
    </main>
  );
}

export default App;
