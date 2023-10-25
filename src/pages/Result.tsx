import { useSearchParams, useNavigate } from 'react-router-dom';
import { Image, Button } from 'react-bootstrap';
import results from '../store/results';
import Header from '../components/Header';
import {
  ContentWrapper,
  Wrapper,
  Title,
  ResultImage,
  Desc,
  BestDesc,
  ResetButton,
} from '../components/Style';

const Result = () => {
  const [searchParams] = useSearchParams();
  const mbti = searchParams.get('mbti');
  const navigate = useNavigate();

  const testResult = results.find((result) => result.best === mbti) ?? {
    id: 0,
    name: '',
    best: '',
    desc: '',
    image: '',
    mbti: '',
  };
  const friend = results.find((result) => result.best === testResult?.mbti);

  return (
    <Wrapper>
      <Header type="title" questionNo={0} />
      <ContentWrapper>
        <Title>Result</Title>
        <ResultImage>
          <Image
            src={testResult?.image}
            width={350}
            height={350}
            className="rounded-circle"
          />
        </ResultImage>
        <Desc>Cat: {testResult?.name}</Desc>
        <br />
        <Desc>{testResult?.desc}</Desc>
        <br />
        <Desc>Butler MBTI: {testResult?.best}</Desc>
        <br />
        <Desc>Cat MBTI: {testResult?.mbti}</Desc>
        <br />
        <BestDesc>My cat's friend cat is {friend?.name}</BestDesc>
        <ResetButton>
          <Button
            onClick={() => navigate('/')}
            color="danger"
            style={{ width: 150, marginTop: 20, marginRight: 20 }}
          >
            Reset
          </Button>
        </ResetButton>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Result;
