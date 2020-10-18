import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  form{
    padding: 30px;
    width: 500px;

    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const ImageContainer = styled.div` 
  height: 120px;
  width: 120px;
  border-radius: 50%;
  background: #e1e1e1;
  display: flex;
  justify-content: center;
  align-items: center;
  svg  {
    height: 100px;
    width: 100px;
    fill: #FFF;
  }
` 