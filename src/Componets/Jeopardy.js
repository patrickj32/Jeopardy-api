import React, { Component } from 'react';

class Jeopardy extends Component {

  userInput = React.createRef()

  state = {
    data: {},
    score: 0

  }

  // get a new random question from the API and add it to the data object in state
  getNewQuestion() {
    //use fetch to make an API call and get a random Jeopardy question (returns a promise)
    fetch(`https://jservice.io/api/random`)
      //on success of the fetch request, turn the response that came back into JSON
      .then((response) => response.json())
      //on success of turnig the response into JSON (data we can work with), lets add that data to state
      .then((data) => {

        //put the data in the console just so we can see it
        console.log("data from the api", data);

        //update state with the data from the API causing the page to re-render
        this.setState({
          data: data[0],//grab the first question from the array returned


          // score: 0
        });
      })
      //handle any errors/failures with getting data from the API
      .catch((error) => {
        console.log(error)
      });
  }


  //when the component mounts, get a the first question
  componentDidMount() {
    this.getNewQuestion();


  }


  getUserAnswer = () => {

    if (this.userInput.current.value === this.state.data.answer) {
      this.increaseScore()
    } else {

      this.decreaseScore()

    }
    this.getNewQuestion()
    this.userInput.current.value = ""
  }

  increaseScore = () => {

    this.setState((state) =>({

      score: state.score + state.data.value

    }))

  }
  decreaseScore = () => {

    this.setState((state) => ({

      score: state.score - state.data.value

    }))

  }





  //  *******Trying to clear the input field on submit*****
  // clearInputField = () => {
  //   console.log("ahh")
  //   this.setState({
  //     userInput: <input type="text" ref={this.userInput}>0</input>


  //   })
  // }


  //display the results on the screen
  render() {

    // example of conditional rendering ***
    let category = ""
    if (this.state.data.category) {
      category = this.state.data.category.title

    }
    // *******
    return (
      <div>
        {/* Displaying the question and answer to help you get started */}

        <div>Question: {this.state.data.question}</div>
        <div>Category: {category}</div>
        <div>Answer: {this.state.data.answer}</div>
        <div>Value: {this.state.data.value}</div>
        <div></div>
        <div>Score: {this.state.score}</div>
        <input type="text" ref={this.userInput} ></input>
        <button type="submit" onClick={this.getUserAnswer}>Submit</button>



      </div>
    );
  }
}


export default Jeopardy;


// ******************6/6/2020 at 7pm*******
// Where are we?

// trying to get my Jeopardy API to
// 1. be able to submit using the enter key

// Note : had a little luck changing the button type to "submit" but it would only worked
//  after it had been clicked already

// no luck so far



