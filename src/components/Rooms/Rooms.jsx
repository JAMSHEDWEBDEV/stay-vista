import { useEffect, useState } from "react";
import Card from "./Card";
import Container from "../Shared/Navbar/container";
import { useSearchParams } from "react-router-dom";
import Heading from "../Shared/Heading";
import Loader from "../Shared/Loader";

const Rooms = () => {
    const [params, setParams] = useSearchParams();
    const [loading,setLoading] = useState(false);
    const category = params.get('category');
    const [rooms, setRooms] = useState([]);
    useEffect(() => {
        setLoading(true);
        fetch('rooms.json')
            .then(res => res.json())
            .then(data => {
                if (category) {
                    const filtered = data.filter(room => room.category === category);
                    setRooms(filtered);
                } else {
                    setRooms(data);
                }
                setLoading(false);
            })
    }, [category])

    if(loading) return <Loader/>

    return (
        <Container>
            {
                rooms && rooms.length > 0 ? <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 pt-12">
                    {
                        rooms.map(room => <Card key={room._id} room={room} />)
                    }
                </div>:
                <div className="flex items-center justify-center min-h-[calc(100vh-300px)]">
                    <Heading
                     center={true}
                     title='No Rooms Available In This Category!'
                     subtitle='Please Select Other Categories.' 
                    />
                </div>
            }
        </Container>
    );
};

export default Rooms;