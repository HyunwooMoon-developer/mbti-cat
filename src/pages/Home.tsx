import { useNavigate } from 'react-router-dom';
import { Image, Button } from 'react-bootstrap';
import {
  ContentWrapper,
  Desc,
  LogoImg,
  Title,
  Wrapper,
} from '../components/Style';
import Header from '../components/Header';
import HomeCat from '../assets/home-cat.jpg';

const Home = () => {
  const navigate = useNavigate();

  const handleStartQuiz = () => {
    navigate('/question');
  };

  return (
    <Wrapper>
      <Header type="title" questionNo={0} />
      <ContentWrapper>
        <Title>Who's the right butler for me?!</Title>
        <LogoImg>
          <Image
            className="rounded-circle"
            src={HomeCat}
            width={350}
            height={350}
          />
        </LogoImg>
        <Desc>Finding cats that fit me well based on MBTI!</Desc>
        <Desc>What if I become a butler and raise a cat?</Desc>
        <Button
          variant="danger"
          onClick={handleStartQuiz}
          style={{ fontSize: 25, marginTop: 20, marginBottom: 20 }}
        >
          Start Test
        </Button>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Home;
