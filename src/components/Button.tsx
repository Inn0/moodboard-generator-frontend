import "./Button.scss";


interface IButtonProps {
    title: string,
    callback: Function
}

function Button(props: IButtonProps) {
    return(
        <div className="buttonContainer" onClick={() => props.callback()}>
            <p className="buttonText">{props.title}</p>
        </div>
    );
}

export default Button