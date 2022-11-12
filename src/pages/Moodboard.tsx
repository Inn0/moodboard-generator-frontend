import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Moodboard.scss";
import { useLocation } from "react-router-dom";
import Button from "../components/Button";
import ImageCard from "../components/ImageCard";

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

    let removeFromArray = (url: string) => {
        let newImages = [...images]
        const index = newImages.indexOf(url)
        if (index > -1) {
            newImages.splice(index, 1)
        }
        setImages(newImages)
        console.log(newImages)
    }

    let saveAndtrain = () => {
        fetch("http://localhost:5000/save", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(images.slice(0,5))
        })
        .then(res => { 
            navigate("/")
            if(res.status === 200){
                alert("Model trained!")
            }
        })
    }

    return(
        <div className="moodboardContainer">
            {images.length > 1 &&
                <div className="imagesContainer">
                    {images.slice(0,5).map((image, id) => {
                        return <ImageCard key={id} url={image} callback={removeFromArray}/>
                    })}
                </div>
            }
            
            <div className="moodboardBottomControls">
                <Button title="Home" callback={()=> {navigate("/")}} />
                <Button title="Save and Train" callback={() => saveAndtrain()}/>
            </div>
        </div>
    );
}

export default Moodboard;