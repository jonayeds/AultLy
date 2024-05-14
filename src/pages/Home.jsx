import PopularQueries from "../Componenets/PopularQueries";
import RecentQueries from "../Componenets/RecentQueries";
import Slider from "../Componenets/Slider";


const Home = () => {
   
    return (
        <div className="">
            
            <Slider></Slider>
            <RecentQueries></RecentQueries>
            <PopularQueries></PopularQueries>
        </div>
    );
};

export default Home;