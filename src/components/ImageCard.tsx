import "./ImageCard.scss";

interface IImageCardProps {
    url: string,
    callback: Function
}

function ImageCard(props: IImageCardProps){
    return(
        <div>
            <p className="imageCardRemove" onClick={() => props.callback(props.url)}>Remove</p>
            <img src={props.url} />
        </div>
        
    );
}

export default ImageCard;