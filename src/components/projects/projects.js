import Nav from "../NavBar/nav";
import Card from "./card";
import {Center, Flex, Grid, HStack, Wrap, WrapItem} from "@chakra-ui/react";
import Footer from "../footer/footer";
// import './projects.css';

const IMAGE =
    'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80';
const items=[
    {
        title:"Blog",
        content:"Loremm is simply dummy text of the printing and typesetting industry. ",
        img: 'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80',
        tec:["java","javascript","C++","CSS","react"],
        demo:"https://blog-ly.netlify.app",
        github:"https://github.com/NOTHINGYQ/mern-blog-frontend"
    },
    {
        title:"E-commerce",
        content:"Lorem Ipsum printing and typesetting industry. dumok a galley of type and scrambled it to make a type specimen book. ",
        img: 'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80',
        tec:["java","javascript","python","python","python",],
        demo:"#",
        github:"#"
    },
    {
        title:"Course management system",
        content:"Loreafasdfsafas sa fdas fsa sf afd as dafsad fm",
        img: 'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80',
        tec:["java","javascript","python","c++","HTML"],
        demo:"#",
        github:"#"
    },

]

const Projects = ()=>{
    return (
        <>
            <Nav />
            {/*<div className="cards">*/}
            <Wrap justify={'space-evenly'} width={'90%'} margin={'auto'}>

                {items.map((value, ind) => (
                        // <div className="card_element">
                    <WrapItem>
                        <Center w={'300px'} h={'700px'}>
                            <Card
                                item={value}
                            />
                        </Center>
                    </WrapItem>
                        // </div>
                ))}
            </Wrap>
            {/*</div>*/}
            <Footer/>
        </>
    )
}
export default Projects;