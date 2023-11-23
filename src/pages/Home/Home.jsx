import Categories from "../../components/Rooms/Categories/Categories";
import Rooms from "../../components/Rooms/Rooms";

const Home = () => {
    return (
        <div>
            {/* categories section  */}
            <Categories/>
            {/* rooms sections  */}
            <Rooms/>
        </div>
    );
};

export default Home;