import { Container, ContainerMobile } from './styled'
import './App.css';
import Routes from './routes';

function App() {
  localStorage.setItem('_cap_network', JSON.stringify(true))
  return (
    <Container>
      <ContainerMobile>
        <Routes />
      </ContainerMobile>
    </Container>
  );
}

export default App;