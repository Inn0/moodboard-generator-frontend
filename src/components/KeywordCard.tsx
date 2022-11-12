import "./KeywordCard.scss"

interface IKeywordCardProps {
    title: string,
    delete: Function
}

function KeywordCard(props: IKeywordCardProps) {
    return (
        <div className="keywordCardContainer">
            <div className="keywordCardTitleContainer">
                <p className="keywordCardTitle">{props.title}</p>
            </div>
            <div className="keywordCardButtonContainer">
                <p className="keywordCardButton" onClick={() => props.delete(props.title)}>x</p>
            </div>
        </div>
    );
}

export default KeywordCard