import { ProgressBar } from 'react-bootstrap';
import { ProgressWrapper, TitleWrapper } from './Style';
import questions from '../store/questions';

const Header = (props: { type: string; questionNo: number }) => (
  <>
    {props.type === 'progress' ? (
      <ProgressWrapper>
        <ProgressBar
          now={Math.round((props.questionNo / questions.length) * 100)}
          label={`${props.questionNo} / ${questions.length}`}
          style={{ width: '100%', height: '30px' }}
        />
      </ProgressWrapper>
    ) : (
      <TitleWrapper style={{ backgroundColor: '#ffa07a' }}>
        MBTI Cat Search!
      </TitleWrapper>
    )}
  </>
);

export default Header;
