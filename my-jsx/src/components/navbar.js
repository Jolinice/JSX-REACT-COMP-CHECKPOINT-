import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

    function ContainerInsideExample() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
            <Navbar.Brand href="#">John Linus</Navbar.Brand>
        </Container>
        </Navbar>
    );
}

export default ContainerInsideExample;