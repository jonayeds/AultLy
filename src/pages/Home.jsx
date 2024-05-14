import PopularQueries from "../Componenets/PopularQueries";
import RecentQueries from "../Componenets/RecentQueries";
import Recommenders from "../Componenets/Recommenders";
import Slider from "../Componenets/Slider";


const Home = () => {
   
    return (
        <div className="">
            
            <Slider></Slider>
            <RecentQueries></RecentQueries>
            <PopularQueries></PopularQueries>
            <Recommenders></Recommenders>
        </div>
    );
};

export default Home;