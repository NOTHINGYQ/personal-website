import {
    Button, Center,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    HStack,
    VStack,
    useBreakpointValue, Box,
} from '@chakra-ui/react';
import Nav from "../NavBar/nav";
import Footer from "../footer/footer";
import './about.css';


export default function About() {
    return (
        <>
            <Nav/>
            <section className="about">
                <section id="about-info" className="py-3">
                    <div className="container">
                        <div className="info-left">
                            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                                <Text color={'blue.400'} as={'span'}>
                                    About Me
                                </Text>{' '}
                            </Heading>
                            <span style={{ fontWeight: 'bold' }}>Yu Liu</span> was
                            born in Hebei, China, in 1998. In 2017, he matriculated
                            at the Tianjin University in Education. One year later,
                            he switched to Software Engineering. Over three years,
                            he has grown up to be a skillful programmer, with interests
                            and experience in various fields of Computer Science,
                            including website development, backend development,
                            and mobile development.
                        </div>
                        <div className="info-right">
                            <img src={'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'} alt="profile" />
                        </div>
                        <div className="info-below">
                            In addition to excellence in Software Engineering, his ambition
                            drives him to pursue accomplishments in other fields. To seek
                            opportunities to combine his skills in both programming and
                            management, he took his second major in Financial Management.
                            This opportunity served as a start to gain knowledge beyond
                            the scope of engineers and will further facilitate him to be
                            a manager with a good sense of business.
                        </div>
                        <div className="info-below">
                            To improve his scientific research ability, he joined the research assistant program of the Chinese Academy of Sciences during the winter vacation of his junior year to help his tutor handle a project on a graphic search engine. This scientific research experience gave him a deeper understanding of the construction of the residual network model.
                        </div>
                        <div className="info-below">
                            To improve his engineering development capabilities, he joined the internship program of NeuEdu in 2020 and participated in the development of a knowledge graph project. This internship taught him to use the front and back ends to build a complete engineering project.
                        </div>
                        <div className="info-below">
                            A strong academic background and ability to always learn new technology have catalyzed his pursuit of higher goals. Since his junior year, he frequently participated in extra-curricular activities to strengthen and expand his programming capabilities. In 2020, he led two teammates to participate in the China Computer Competition- Artificial Intelligence Challenge and won the national third prize.
                        </div>
                        <div className="info-below">
                            Currently, he is doing an internship at the USC Center for Systems and Software Engineering. And he is looking for an internship in Software Development in the U.S. Summer 2023 with work authorization.
                        </div>
                    </div>
                </section>
            </section>
            <Footer/>
        </>
    );
}