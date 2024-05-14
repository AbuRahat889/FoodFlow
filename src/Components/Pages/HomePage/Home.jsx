import { Helmet } from "react-helmet-async";
import Action from "./Action/Action";
import Slider from "./Slider/Slider";
import ToDo from "./ToDo/ToDo";
import Counter from "./Counter/Counter";


const Home = () => {
    return (
        <div>
            <Helmet><title>FoodFlow | Home</title></Helmet>
            <Slider></Slider>
            <ToDo></ToDo>
            <Action></Action>
            <Counter></Counter>
          
        </div>
    );
};

export default Home;