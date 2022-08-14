import Header from '~/layouts/components/Header';
import Sidebar from '~/layouts/components/Sidebar';
import { Wrapper, Container, Content } from './DefaultLayout.style';

function DefaultLayout({ children }) {
    return (
        <Wrapper>
            <Header />
            <Container>
                <Sidebar />
                <Content>{children}</Content>
            </Container>
        </Wrapper>
    );
}

export default DefaultLayout;
