import React from "react";
import styled from "styled-components";
import Footer from "./Footer"

const AboutUs = () => {
  return (
    <Wrap>
      <InnerWrap>
        <h1>We love sports......... so</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam commodo
          augue ac egestas gravida. Pellentesque vel porta arcu. Vivamus lorem
          odio, volutpat sit amet pulvinar in, malesuada eu nibh. Pellentesque
          magna mi, congue vitae commodo sit amet, lobortis dignissim arcu.
          Aliquam interdum accumsan libero, eu scelerisque tortor imperdiet et.
          Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras eu
          augue pretium, hendrerit mauris ut, ultricies mauris. In nec dui vitae
          erat suscipit pulvinar non ut nibh. In eu enim dui.
        </p>
        <p>
          Duis id dictum nisi. Suspendisse in blandit turpis. Curabitur aliquet
          velit ante, id fermentum eros suscipit rhoncus. Fusce a metus iaculis,
          hendrerit leo sed, sollicitudin ligula. Donec consequat non elit a
          iaculis. Fusce at elit mollis elit tempor faucibus nec non nunc. Cras
          fermentum felis aliquet tristique eleifend.
        </p>
      </InnerWrap>
      <Footer/>
    </Wrap>
  );
};
const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;
const InnerWrap = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 40px;
  h1 {
    padding: 0 0 20px 0;
  }
  p {
    padding: 0 0 20px 0;
  }
`;
export default AboutUs;
