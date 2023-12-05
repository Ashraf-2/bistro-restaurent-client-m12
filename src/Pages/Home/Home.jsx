import PopularMenu from "../PopularMenu/PopularMenu";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
        </div>
    );
};

export default Home;