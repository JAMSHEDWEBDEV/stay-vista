import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Shared/Loader";
import Container from "../Shared/Navbar/Container";
import { Helmet } from "react-helmet-async";

const RoomDetails = () => {
    const { id } = useParams();
    const [room, setRoom] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch('/rooms.json')
            .then(res => res.json())
            .then(data => {
                const singleRoom = data.find(room => room._id === id)
                setRoom(singleRoom);
                setLoading(false);
            })
    }, [id])
    if (loading) return <Loader />

    return (
        <Container>
            <Helmet>
                <title>{`StayVista || ${room?.title}`}</title>
            </Helmet>
            <div>
                <h1>{room.title}</h1>
                {/* header  */}
                <div></div>
                {/* room info  */}
                <div></div>
                {/* calender  */}
                <div></div>
            </div>
        </Container>
    );
};

export default RoomDetails;