import React from 'react';
import PropTypes from 'prop-types';
import Question from '../components/Question';
import QuestionCount from '../components/QuestionCount';
import AnswerOption from '../components/AnswerOption';
import ReferenceOption from '../components/ReferenceOption';
import { render } from '@testing-library/react';

function Quiz(props) {
    function renderAnswerOptions(key) {
        return (
            <AnswerOption
                title={key.title}
                questionId={props.questionId}
                answer={props.answer}
            onAnswerSelected={props.onAnswerSelected}
            />
        );
    }
    function renderReferenceOption(key) {
        return (
            <ReferenceOption
                title={key.title}
                author={key.authors}
                year={key.year}
            />
        );
    }
  return (
      <div className="quiz">
        <QuestionCount
          counter={props.questionId}
          total={props.questionTotal}
          />

          <Question content={props.question} />
          <div className="referenceContents">
                <ol className="referenceOptions">

                  {props.references.map(renderReferenceOption)}

              </ol>
          </div>
          <div className="answerContents">
          <ul className="answerOptions">
              {props.answerOptions.map(renderAnswerOptions)}
              </ul>
              </div>
      </div>
  );
}
/*



        */

Quiz.propTypes = {
  answer: PropTypes.string.isRequired,
  answerOptions: PropTypes.array.isRequired,
  counter: PropTypes.number.isRequired,
  question: PropTypes.string.isRequired,
  questionId: PropTypes.number.isRequired,
  questionTotal: PropTypes.number.isRequired,
  onAnswerSelected: PropTypes.func.isRequired
};

export default Quiz;