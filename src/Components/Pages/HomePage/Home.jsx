import Action from "./Action/Action";
import Slider from "./Slider/Slider";
import ToDo from "./ToDo/ToDo";


const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <ToDo></ToDo>
            <Action></Action>
          
        </div>
    );
};

export default Home;