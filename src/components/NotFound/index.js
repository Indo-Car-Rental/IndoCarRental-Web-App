import { Container, Alert } from "reactstrap";

const NotFound = () => {
    return (
        <section>
            <Container>
                <Alert color="danger" className="mt-4 d-flex justify-content-center">
                    Data Tidak ditemukan
                </Alert>
            </Container>
        </section>
    );
}
 
export default NotFound;