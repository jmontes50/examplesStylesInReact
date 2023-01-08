import styled from "styled-components";

export const CardWithStyle = styled.div`
  max-width: 400px;
  min-height: 600px;
  border-radius: 10px;
  box-shadow: 0 0 40px lightgrey;
`;

export const ImgCardWithStyle = styled.img`
  border-radius: 10px 10px 0 0;
`;

export const CardBody = styled.div`
  padding: 30px;
  font-family: Arial, Helvetica, sans-serif;
`;

export const CardTitle = styled.h2`
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const CardText = styled.p`
  margin-bottom: 1rem;
  line-height: 1.5rem;
`;

export const CardButton = styled.button`
  border: 1px solid rgb(15, 104, 74);
  background: rgb(19, 126, 90);
  color: white;
  padding: 10px 15px;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
`;
