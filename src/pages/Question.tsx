import { useState } from 'react';
import { createSearchParams, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Header from '../components/Header';
import questions from '../store/questions';
import {
  ContentWrapper,
  Wrapper,
  Title,
  ButtonGroup,
} from '../components/Style';

const Question = () => {
  const [questionNo, setQuestionNo] = useState<number>(0);
  const [scores, setScores] = useState<{ id: string; score: number }[]>([
    { id: 'EI', score: 0 },
    { id: 'SN', score: 0 },
    { id: 'TF', score: 0 },
    { id: 'JP', score: 0 },
  ]);

  const navigate = useNavigate();

  const handleClickAnswer = (answer: number, type: string) => {
    const newScore = scores.map((score) =>
      score.id === type ? { id: score.id, score: score.score + answer } : score
    );

    setScores(newScore);

    if (questions.length !== questionNo + 1) {
      setQuestionNo(questionNo + 1);
    } else {
      const mbti = newScore.reduce(
        (acc, cur) =>
          acc +
          (cur.score >= 2 ? cur.id.substring(0, 1) : cur.id.substring(1, 2)),
        ''
      );

      navigate({
        pathname: '/result',
        search: `?${createSearchParams({ mbti })}`,
      });
    }
  };

  return (
    <Wrapper>
      <Header type="progress" questionNo={questionNo} />
      <ContentWrapper>
        <Title>{questions[questionNo].title}</Title>
        <ButtonGroup>
          <Button
            variant="warning"
            style={{
              marginRight: '20px',
              width: '45%',
              minHeight: '200px',
              fontSize: '15pt',
            }}
            onClick={() => handleClickAnswer(1, questions[questionNo].type)}
          >
            {questions[questionNo].qA}
          </Button>
          <Button
            variant="warning"
            style={{
              marginRight: '20px',
              width: '45%',
              minHeight: '200px',
              fontSize: '15pt',
            }}
            onClick={() => handleClickAnswer(0, questions[questionNo].type)}
          >
            {questions[questionNo].qB}
          </Button>
        </ButtonGroup>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Question;
