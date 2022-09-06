import React, { useState, useEffect } from "react";
import styled from "styled-components";

import EmptyHeartSVG from "../assets/icon/empty-heart.svg";
import FullHeartSVG from "../assets/icon/full-heart.svg";
import ClockSVG from "../assets/icon/clock.svg";

const API = "https://hn.algolia.com/api/v1/search_by_date?query=angular&page=0";

const Card = () => {
  const [full, setFull] = useState(true);
  const [information, setInformation] = useState([]);
  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.hits);
        setInformation(data.hits);
      });
  }, []);

  const handler = () => {
    setFull(!full);
    console.log("klk");
  };
  return (
    <>
      {information.map((item) => (
        <Container
          key={item.created_at_i}
          style={{ opacity: `${item.story_title === null ? 0.4 : 1}` }}
        >
          <CardContainer>
            <TimeContainer>
              <ClockImage src={ClockSVG} />
              <LabelTime>hours ago by {item.author}</LabelTime>
            </TimeContainer>
            <Label>{item.story_title}</Label>
          </CardContainer>
          <HeartContainer>
            <Image
              src={full ? EmptyHeartSVG : FullHeartSVG}
              alt={full ? "Empty Heart" : "Full Heart"}
              onClick={handler}
            />
          </HeartContainer>
        </Container>
      ))}
    </>
  );
};

export default Card;

const Container = styled.span`
  /* background-color: red; */
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  flex-direction: row;
  flex-wrap: wrap;
  border-radius: 6px;
  margin: 16px;
  border: solid 1px #979797;
`;

const CardContainer = styled.div`
  width: 34.375rem;
  height: 5.625rem;
  margin: 1.3rem 5.3rem;
  opacity: 0.8;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  border-radius: 6px;
`;

const HeartContainer = styled.picture`
  width: 4.25rem;
  height: 5.625rem;
  margin: 0 0 0 1rem;
  padding: 2.188rem 1.375rem 2.063rem;
  border-radius: 6px;
  justify-content: center;
  align-items: center;
  display: flex;

  background-color: #f5f5f5;
`;

const Image = styled.img`
  width: 2rem;
  height: 2rem;
  object-fit: contain;
  cursor: pointer;
`;
const ClockImage = styled.img`
  width: 1rem;
  height: 1rem;
  margin: 0.875rem 0.5rem 0.375rem 0;
  object-fit: contain;
`;

const Label = styled.p`
  font-size: 1.4rem;
  font-weight: 500;
`;

const TimeContainer = styled.span`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
const LabelTime = styled.span`
  font-size: 1.288rem;
  color: #767676;
  /* height: 0.813rem;
  margin: 1rem 20.313rem 0.438rem 0.5rem; */
`;
