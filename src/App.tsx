import { Container, ContainerMobile } from './styled'
import './App.css';
import Routes from './routes';

function App() {
  return (
    <Container>
      <ContainerMobile>
        <Routes />
      </ContainerMobile>
    </Container>
  );
}

export default App;