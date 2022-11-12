import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import KeywordCard from "../components/KeywordCard";
import "./Home.scss"

function Home() {
    const [keyword, setKeyword] = useState("")
    const [keywordList, setKeywordList] = useState(Array<string>)

    const navigate = useNavigate();

    const handleChange = (event: any) => {
        setKeyword(event.target.value)
    }

    const handleKeyDown = (event: any) => {
        if (event.key === 'Enter') {
            addToList(keyword)
        }
      }

    const addToList = (keyword: string) => {
        var oldList = [...keywordList]

        if(oldList.includes(keyword)){
            alert("Keyword already added!")
        } else if (keyword === "" || keyword === null) {
            alert("Cant enter empty keyword!")
        } else {
            oldList.push(keyword)
            setKeywordList(oldList)
            setKeyword("")
        }
    }

    const removeFromList = (keyword: string) => {
        var list = [...keywordList]

        setKeywordList(list.filter(e => e !== keyword));
    }

    const generateMoodboard = () => {
        navigate("/moodboard", { state: { keywords: keywordList }})
    }

    return (
        <div>
            <div className="homePageContent">
                <div className="entryContainer">
                    <div className="entryBar">
                        <input type="text" value={keyword} onChange={handleChange} className="keywordInputField" placeholder="Enter keyword here..." onKeyDown={handleKeyDown}/>
                    </div>
                    <div className="entryBarButton">
                        <Button title="Add" callback={() => addToList(keyword)} />
                    </div>
                </div>
                <div className="keywordContainer">
                    {keywordList.map((keyword, id) => {
                        return <KeywordCard key={id} title={keyword} delete={removeFromList}/>
                    })}
                </div>
                <div className="generateContainer">
                    <Button title="Generate" callback={() => generateMoodboard()} />
                </div>
            </div>
        </div>
    );
}

export default Home