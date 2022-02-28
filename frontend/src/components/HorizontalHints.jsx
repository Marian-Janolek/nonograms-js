import styled from 'styled-components';

const HorizontalHints = () => {
  return (
    <Wrapper>
      <div className="hints">
        <span>1</span>
        <span>1</span>
        <span>3</span>
        <span>3</span>
      </div>
      <div className="hints">
        <span>1</span>
        <span>2</span>
        <span>1</span>
        <span>1</span>
      </div>
      <div className="hints">
        <span>5</span>
        <span>1</span>
        <span>1</span>
        <span>1</span>
      </div>
      <div className="hints">
        <span>5</span>
        <span>1</span>
        <span>1</span>
        <span>1</span>
      </div>
      <div className="hints">
        <span>1</span>
        <span>5</span>
        <span>5</span>
      </div>
      <div className="hints">
        <span>1</span>
        <span>4</span>
        <span>4</span>
      </div>
      <div className="hints">
        <span>1</span>
        <span>2</span>
        <span>1</span>
        <span>1</span>
      </div>
      <div className="hints">
        <span>1</span>
        <span>3</span>
        <span>3</span>
      </div>
      <div className="hints">
        <span>3</span>
        <span>2</span>
        <span>2</span>
      </div>
      <div className="hints">
        <span>2</span>
        <span>2</span>
        <span>3</span>
        <span>1</span>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  gap: 1.25rem;
  width: 100%;
  padding-left: 0.6rem;
  padding-bottom: 0.5rem;

  .hints {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    span {
      font-size: 1.2rem;
      color: #fff;
    }
  }
`;

export default HorizontalHints;
