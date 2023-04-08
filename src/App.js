import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {
    const [time, setTime] = useState(null);
    const [date, setDate] = useState(null);
    const GetTime = async () => {
        const { data } = await axios.get(
            `${process.env.REACT_APP_BASE_URL}/livetime`
        );
        setTime(data.time);
        setDate(data.date);
    };

    useEffect(() => {
        if (!time) GetTime();
    }, []);

    setInterval(() => {
        GetTime();
    }, 1000);

    return (
        <div>
            <h1>Live Time From Backend</h1>

            <h3>{date}</h3>
            <h3>{time}</h3>
        </div>
    );
};

export default App;
