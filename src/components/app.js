import React, { Component } from 'react';
import Question from './question'
import Answers from './answers'
import Score from './score'
import SubmitAnswer from './submit_answer'

export default class App extends Component {

  render() {

    return (

      <div className="container well">

        <div className="row">

          <div className="col-md-12">
            <h2>Trivia Title</h2>
          </div>

        </div>

        <div className="row">

          <Question />

          <Answers />

        </div>

        <Score />

      </div>
      
    );

  }

}
