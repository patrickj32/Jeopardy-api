import { useEffect, useState, createRef } from "react";




function JeopardyWithHooks(props) {


    let [score, setScore] = useState(0)
    let [data, setData] = useState({})
    let userInput = createRef()
    let[favIceCream,setfavIceCream] = useState("peanutbutter")


    // alternative to a classes "componentDidMount"
    useEffect(() => {

        getNewQuestion()
    }, []);


    let getNewQuestion = () => {
        //use fetch to make an API call and get a random Jeopardy question (returns a promise)
        fetch(`https://jservice.io/api/random`)
            //on success of the fetch request, turn the response that came back into JSON
            .then((response) => response.json())
            //on success of turnig the response into JSON (data we can work with), lets add that data to state
            .then((jeopardyQuestionArray) => {

                //put the data in the console just so we can see it
                console.log("data from the api", jeopardyQuestionArray);
                setData(jeopardyQuestionArray[0])
                //update state with the data from the API causing the page to re-render
                // this.setState({
                //     data: data[0],//grab the first question from the array returned


                //     // score: 0
                // });
            })
            //handle any errors/failures with getting data from the API
            .catch((error) => {
                console.log(error)
            });
    }

    let getUserAnswer = () => {

        if (userInput.current.value === data.answer) {
            increaseScore()
        } else {

            decreaseScore()

        }
        getNewQuestion()
        userInput.current.value = ""

        setfavIceCream("bitches")
    }

    let increaseScore = () => {

        setScore(

            score + data.value
        )


    }
    let decreaseScore = () => {

   
            setScore(
            score - data.value
            )

       

    }




    // example of conditional rendering ***
    let category = ""
    if (data.category) {
        category = data.category.title

    }



    // *******
    return (
        <div className="JeopardyWithHooks">Heres my div
            {/* Displaying the question and answer to help you get started */}

            <div>Question: {data.question}</div>
            <div>Category: {category}</div>
            <div>Answer: {data.answer}</div>
            <div>Value: {data.value}</div>
            <div>Ice Cream: {favIceCream}</div>
            <div>Score: {score}</div>
            <input type="text" ref={userInput} ></input>
            <button type="submit" onClick={getUserAnswer}>Submit</button>



        </div>
    );
}


export default JeopardyWithHooks;