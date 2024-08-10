import Banner from "../../components/Home/Banner/Banner";
import Intro from "../../components/Home/Intro/Intro";
import Goal from "../../components/Home/Goal/Goal";
import Stage from "../../components/Home/Stage/Stage";
import If from "../../components/Home/If/If";

const Home = () => {
    return (
        <div className="pageContainer">
            <Banner />
            <Intro />
            <Goal />
            <Stage />
            <If />
        </div>
    )
}

export default Home;