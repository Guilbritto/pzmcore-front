import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 16px;
  
  background: #FFF;
  height:150px;
  display: flex;
  align-items: center;
  padding: 10px;
  box-shadow: 0 1px 2px rgba(0,0,0,.3);
  img{
    height: 60px;
    width:60px;
    border-radius: 50%;
    margin-right: 6px;
  }
  div{
    display: flex;
    flex-direction: column;
    line-height: 25px;
    h3{
      
    }
    span{
      font-size: 14px;

    }
    ul{
      list-style: none;
      line-height: 20px;
      li{
        font-size: 12px;
        font-weight: 500;
        
      }
    }
  }
  .link-sair{
    text-decoration: none;
    cursor:pointer;
    &:hover{
      text-decoration: underline;
    }
  }
`;
