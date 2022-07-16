import Nav from "../NavBar/nav";
import Card from "./card";
import {Center, Grid, HStack} from "@chakra-ui/react";

const IMAGE =
    'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80';
const items=[
    {
        title:"Blog",
        content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
        img: 'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80',
        tec:["java","javascript","C++","CSS","HTML","react"],
        demo:"https://www.google.com",
        github:"https://www.google.com"
    },
    {
        title:"E-commerce",
        content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
        img: 'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80',
        tec:["java","javascript","python"],
        demo:"https://www.google.com",
        github:"https://www.google.com"
    }
]

const Projects = ()=>{
    return (
        <div>
            <Nav />


            <Grid templateColumns='repeat(3, 1fr)' gap={6} paddingLeft={50} paddingRight={50}>
                {
                    items.map((value,key) =>(
                        <Card item={value}/>
                    ))
                }

            </Grid>
        </div>
    )
}
export default Projects;