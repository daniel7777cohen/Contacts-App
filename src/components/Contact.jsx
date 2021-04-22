import React, { useState } from 'react';
import styled from 'styled-components';
import ContactEditor from './ContactEditor';

const ContactBox = styled.div`
  position: relative;
  display: flex;
  background-color: white;
  height: 200px;
  margin: 10px;
  flex-basis: 31%;
  padding: 20px 0;
  @media (max-width: 1000px) {
    flex-basis: unset;
  }
`;

const ImageAndTitle = styled.div`
  width: 170px;
  text-align: center;
`;

const Img = styled.img`
  border-radius: 50%;
`;

const Title = styled.div`
  margin-top: 5px;
  font-size: 13px;
  font-weight: bold;
`;

const Details = styled.div`
  margin-left: 25px;
`;

const Header = styled.span`
  font-weight: bold;
`;

const BoxTextBold = styled.span`
  font-weight: bold;
  font-size: 13px;
`;

const JobAddress = styled.div`
  margin: 10px 0;
  font-size: 12px;
`;

const BoxText = styled.div`
  max-width: 170px;
  font-size: 12px;
`;

const Action = styled.span`
  cursor: pointer;
  margin: 0 3px;
`;

const ActionsContainer = styled.div`
  bottom: 0;
  right: 0;
  position: absolute;
`;

const Contact = ({ contact, handleEdit, handleDelete }) => {
  const {
    name,
    title,
    phoneNumber,
    jobAddress,
    dummyBoldTitle,
    homeAddress,
    img,
    id,
  } = contact;

  const [isEdit, setIsEdit] = useState(false);

  const edit = () => {
    setIsEdit(true);
  };
  return (
    <ContactBox>
      {!isEdit ? (
        <>
          <ImageAndTitle>
            <Img src={img} />
            <Title>{title}</Title>
          </ImageAndTitle>
          <Details>
            <Header>{name}</Header>
            <JobAddress>{jobAddress}</JobAddress>
            <BoxTextBold>{dummyBoldTitle}</BoxTextBold>
            <BoxText>{homeAddress}</BoxText>
            <BoxText>{phoneNumber}</BoxText>
          </Details>
          <ActionsContainer>
            <Action onClick={edit}>E</Action>
            <Action onClick={() => handleDelete(id)}>D</Action>
          </ActionsContainer>
        </>
      ) : (
        <ContactEditor
          setIsEdit={setIsEdit}
          handleEdit={handleEdit}
          contact={contact}
          src={'edit'}
        />
      )}
    </ContactBox>
  );
};

export default Contact;
