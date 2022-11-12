import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Moodboard.scss";
import { useLocation } from "react-router-dom";
import Button from "../components/Button";

function Moodboard (){
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location.state.keywords)

    const [images, setImages] = useState<Array<string>>([])

    useEffect(() => {
        fetch("http://localhost:5000/generate", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(location.state.keywords)
        })
        .then(res => res.json())
        .then(res => { 
            console.log(res)
            setImages(res)
        })
    }, [location.state.keywords])

    return(
        <div className="moodboardContainer">
            <div className="imagesContainer">
                {images.map((image, id) => {
                    return <img alt={image} key={id} src={image}/>
                })}
            </div>
            <div className="moodboardBottomControls">
                <Button title="Home" callback={()=> {navigate("/")}} />
            </div>
        </div>
    );
}

export default Moodboard;