import Nav from "../NavBar/nav";
import FirstPart from "./firstpart";
import SecondPart from "./secondpart";
import Fourthpart from "./fourthpart";
import Footer from "../footer/footer";


const Home=()=>{
    return(
        <div>
            <Nav/>
            <FirstPart/>
            <SecondPart/>
            <Fourthpart/>
            <Footer/>
        </div>
    )
}

export default Home;