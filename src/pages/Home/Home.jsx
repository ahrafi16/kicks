import Banner from "./Banner";
import Categories from "./Categories";
import NewDrops from "./NewDrops";
import Reviews from "./Reviews";


const Home = () => {
    return (
        <div className="text-blue-800 text-9xl">
            <Banner></Banner>
            <NewDrops></NewDrops>
            <Categories></Categories>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;