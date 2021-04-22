import React, { useEffect, useState, Fragment } from 'react';
import styled from 'styled-components';

const formValidation = (formData) => {
  ///validations

  return true;
};

const contactFormFields = [
  {
    label: 'Name',
    type: 'text',
    name: 'name',
  },
  {
    label: 'Job Title',
    type: 'text',
    name: 'title',
  },
  {
    label: 'Phone Number',
    type: 'text',
    name: 'phoneNumber',
  },
  {
    label: 'Job Address',
    type: 'text',
    name: 'jobAddress',
  },
  {
    label: 'Dummy Bold Title',
    type: 'text',
    name: 'dummyBoldTitle',
  },
  {
    label: 'Home Address',
    type: 'text',
    name: 'homeAddress',
  },
];

const FormContainer = styled.div`
  position: absolute;
  bottom: 0;
  top: -10px;
  width: 100%;
  margin-top: 10px;
  background-color: white;
  overflow: overlay;
`;

const Form = styled.form`
  margin: auto;
  display: flex;
  flex-direction: column;
`;
const ContactEditor = ({
  setIsEdit,
  handleEdit,
  contact,
  src,
  handleAdd,
  setIsCreate,
}) => {
  const [message, setMessage] = useState('');
  const [formData, setFormData] = useState({
    formData: {
      name: '',
      title: '',
      phoneNumber: '',
      jobAddress: '',
      dummyBoldTitle: '',
      homeAddress: '',
    },
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setIsLoading(true);
    const isFormValid = formValidation(formData);
    if (isFormValid) {
      if (src === 'edit') {
        handleEdit({ id: contact.id, img: contact.img, ...formData });
        setMessage('Edit Success');
      } else {
        handleAdd({
          id: Date.now(),
          img: '/assets/john-smith.jpg',
          ...formData,
        });
        setMessage('Add Success');
      }
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (src === 'edit') {
      setFormData({ ...contact });
    }
  }, [src, contact]);
  return (
    <FormContainer>
      {message ? (
        <>
          {message}
          <button
            onClick={() =>
              src === 'edit' ? setIsEdit(false) : setIsCreate(false)
            }
            style={{ width: '60px' }}
            disabled={isLoading}
          >
            X
          </button>
        </>
      ) : (
        <Form onSubmit={handleSubmit}>
          {contactFormFields.map((formField, index) => {
            const { type, name, label } = formField;
            return (
              <Fragment key={index}>
                <h5>{label}</h5>
                <input
                  required
                  type={type}
                  name={name}
                  onChange={(e) => handleChange(e)}
                  value={formData[name] || ''}
                  style={{ marginBottom: '2px' }}
                />
              </Fragment>
            );
          })}
          <button type="submit" style={{ width: '60px' }} disabled={isLoading}>
            Submit
          </button>
          <button
            onClick={() =>
              src === 'edit' ? setIsEdit(false) : setIsCreate(false)
            }
            style={{ width: '60px' }}
            disabled={isLoading}
          >
            X
          </button>
        </Form>
      )}
    </FormContainer>
  );
};

export default ContactEditor;
