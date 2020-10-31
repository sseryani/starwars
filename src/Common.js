// This file holds common elements

import styled from "styled-components";

export const Text = styled.p`
  color: white;
  font-family: "Pathway Gothic One", sans-serif;
  padding: 15px;
`;

export const TextNoSpace = styled.p`
  color: white;
  font-family: "Pathway Gothic One", sans-serif;
`;

export const MovieWrapper = styled.div`
  border: 1px solid black;
  flex: 0 0 30%;
  margin: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  cursor: pointer;
  :hover {
    box-shadow: 0 25px 50px 0 rgba(0, 0, 0, 0.2);
  }
`;

export const BackButton = styled.a`
  text-decoration: none;
  display: inline-block;
  padding: 8px 16px;
  :hover {
    background-color: #383b53;
    color: black;
  }
  background-color: #32213a;
  color: black;
  cursor: pointer;
`;

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  padding: 5px;
  padding-top: 30px;
  padding-left: 100px;
`;

export const Title = styled.h1`
  color: #ffe81f;
  font-family: "Star Jedi", arial;
  align-self: center;
  flex: 0 0 80%;
`;
