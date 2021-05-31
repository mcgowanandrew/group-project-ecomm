import React from "react";
import styled from "styled-components";

const Contact = () => {
  return (
    <Wrap>
      <Form>
        <h1>Contact</h1>
        <FormContent>
          <InputWrapper>
            <label for="fname">Full Name</label>
            <input type="text" name="fname" placeholder="Your name" />
          </InputWrapper>
          <InputWrapper>
            <label for="femail">Email</label>
            <input type="email" name="femail" placeholder="Your email" />
          </InputWrapper>
          <InputWrapper>
            <label for="subject">Subject</label>
            <textarea name="subject" placeholder="Write something.."></textarea>
          </InputWrapper>
          <input type="submit" value="Submit" className="submitBtn" />
        </FormContent>
      </Form>
    </Wrap>
  );
};
const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Form = styled.form`
  max-width: 500px;
  margin: 20px auto;
  border: 1px solid black;
  border-radius: 5px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),
    0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12),
    0 16px 16px rgba(0, 0, 0, 0.12);

  h1 {
    background: black;
    color: white;
  }
`;

const FormContent = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  input {
    width: 200px;
    max-width: 200px;
  }
  textarea {
    width: 200px;
    min-height: 100px;
    max-width: 200px;
  }
  .submitBtn {
    margin: 10px 0;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px 0;
`;
export default Contact;
