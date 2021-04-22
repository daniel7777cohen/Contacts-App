import './App.css';
import styled from 'styled-components';
import ContactManager from './components/ContactManager';

const Container = styled.div`
  height: 100%;
  background-color: #ececec;
  overflow: overlay;
`;

function App() {
  return (
    <Container>
      <ContactManager></ContactManager>
    </Container>
  );
}

export default App;
