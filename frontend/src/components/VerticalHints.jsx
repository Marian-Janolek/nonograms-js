import styled from "styled-components";

const VerticalHints = () => {
  return (
    <Wrapper>
      <div className="hints">
        <span>1 </span>
        <span>2 </span>
        <span>4 </span>
      </div>
      <div className="hints">
        <span>2 </span>
        <span>2 </span>
      </div>
      <div className="hints">
        <span>4 </span>
        <span>1 </span>
        <span>2 </span>
      </div>
      <div className="hints">
        <span>2 </span>
        <span>1 </span>
        <span>1 </span>
      </div>
      <div className="hints">
        <span>2 </span>
        <span>1 </span>
        <span>1 </span>
      </div>
      <div className="hints">
        <span>2 </span>
        <span>1 </span>
        <span>1 </span>
      </div>
      <div className="hints">
        <span>1 </span>
        <span>4 </span>
        <span>1 </span>
      </div>
      <div className="hints">
        <span>1 </span>
        <span>2 </span>
        <span>2 </span>
      </div>
      <div className="hints">
        <span>1 </span>
        <span>2 </span>
        <span>1 </span>
      </div>
      <div className="hints">
        <span>7 </span>
        <span>1 </span>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding-left: 0.4rem;
  padding-right: 0.5rem;
  gap: 0.09rem;

  .hints {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    gap: 0.6rem;
    span {
      font-size: 1.2rem;
      color: #fff;
    }
  }
`;

export default VerticalHints;
