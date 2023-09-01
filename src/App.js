import React, { Component } from 'react';
import quizQuestions from './api/quizQuestions';
import paperTitles from './api/paperTitles';
import Quiz from './components/Quiz';
import Result from './components/Result';
import logo from './svg/logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      questionId: 1,
      question: '',
      references: [],
      answerOptions: [],
      answer: '',
      correctAnswer: '',
      answersCount: 0,
      resultTable: [],
      result: ''
    };

    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
  }

  create4AnswerOptions(trueOption) {
    let answerOptions = [];
    // deep copy
    let falseOptions = paperTitles.slice();
    falseOptions.splice(falseOptions.indexOf(trueOption), 1);
    falseOptions = this.shuffleArray(falseOptions);
    falseOptions = falseOptions.slice(0, 3);
    answerOptions = falseOptions;
    answerOptions.push({ title: trueOption });
    answerOptions = this.shuffleArray(answerOptions);
    return answerOptions;
  }

  componentDidMount() {
    console.log("hello\n");
    this.setState({
      references: quizQuestions[0].references,
      correctAnswer: quizQuestions[0].answer,
      answerOptions: this.create4AnswerOptions(quizQuestions[0].answer),
    });
  }


  shuffleArray(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  handleRestart = () => {
    this.setState({
      counter: 0,
      questionId: 1,
      question: '',
      references: quizQuestions[0].references,
      answerOptions: this.create4AnswerOptions(quizQuestions[0].answer),
      answer: '',
      correctAnswer: quizQuestions[0].answer,
      answersCount: 0,
      resultTable: [],
      result: ''
    });
  }


  handleAnswerSelected(event) {
    console.log("on Click\n");
    this.setUserAnswer(event.currentTarget.value);
    // display the answer is correct or not
    if (event.currentTarget.value === this.state.correctAnswer) {
      alert("Correct! The answer is " + this.state.correctAnswer);
    } else {
      alert("Wrong! The answer is " + this.state.correctAnswer);
    }

    if (this.state.questionId < quizQuestions.length) {
      setTimeout(() => this.setNextQuestion(), 300);
    } else {
      setTimeout(() => this.setResults(this.getResults()), 300);
    }
  }



  setUserAnswer(answer) {
    this.setState((state, props) => ({
      answersCount: answer === state.correctAnswer ? ++state.answersCount : state.answersCount,
      answer: answer
    }));
    if (answer === this.state.correctAnswer) {
      this.setState((state, props) => ({
        resultTable: state.resultTable.concat(true)
      }));
    } else {
      this.setState((state, props) => ({
        resultTable: state.resultTable.concat(false)
      }));
    }
  }

  setNextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;

    this.setState({
      counter: counter,
      questionId: questionId,
      references: quizQuestions[counter].references,
      correctAnswer: quizQuestions[counter].answer,
      answerOptions: this.create4AnswerOptions(quizQuestions[counter].answer),
      answer: ''
    });

  }

  getResults() {
    const answersCount = this.state.answersCount;

    return answersCount;
  }

  setResults(result) {
    this.setState({ result: result });
  }

  renderQuiz() {
    return (
      <Quiz
        answer={this.state.answer}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question="What is the title of the paper that cites the following papers?"
        questionTotal={quizQuestions.length}
        onAnswerSelected={this.handleAnswerSelected}
        references={this.state.references}
      />
    );
  }

  renderResult() {
    return <Result quizResult={this.state.result} onRestart={this.handleRestart} resultTable={this.state.resultTable} />;
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>PaperGuessr</h2>
        </div>
        {this.state.result ? this.renderResult() : this.renderQuiz()}
      </div>
    );
  }
}

export default App;
