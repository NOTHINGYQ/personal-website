import Nav from "../NavBar/nav";
import Card from "./card";
import {Center, Flex, Grid, HStack, Wrap, WrapItem} from "@chakra-ui/react";
import Footer from "../footer/footer";

const IMAGE =
    'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80';
const items=[
    {
        title:"Blog",
        content:"A MERN stack blog application that includes user authentication, profiles, and forum posts. Integrated with an extensive backend API and Redux.",
        img: 'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80',
        tec:["javascript","Node.js","React","Heroku","MongoDB","JWT"],
        demo:"https://blog-ly.netlify.app",
        github:"https://github.com/NOTHINGYQ/mern-blog-frontend"
    },
    {
        title:"Minesweeper",
        content:"A react project which use javascript to implement minesweeper game.",
        img: 'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80',
        tec:["javascript","Node.js","React","GitHub Page","CSS","HTML"],
        demo:"https://nothingyq.github.io/Minesweeper-React/",
        github:"https://github.com/NOTHINGYQ/Minesweeper-React"
    },
    {
        title:"E-commerce",
        content:"A Sec-kill system of e-commerce platform by SpringBoot and MyBatis. Achieved by caching with redis and asynchronous messaging with RocketMQ.",
        img: 'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80',
        tec:["java","SpringBoot","MyBatis","Redis","Nginx","RocketMQ","React"],
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