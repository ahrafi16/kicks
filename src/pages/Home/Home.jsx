import Banner from "./Banner";
import Categories from "./Categories";
import NewDrops from "./NewDrops";


const Home = () => {
    return (
        <div className="text-blue-800 text-9xl">
           <Banner></Banner>
           <NewDrops></NewDrops>
           <Categories></Categories>
        </div>
    );
};

export default Home;