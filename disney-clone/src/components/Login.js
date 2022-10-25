import styled from "styled-components";

const Login = (props) => {
  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne src="/images/cta-logo-one.svg " />
          <SignUp>GET ALL THERE</SignUp>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Description>
          <CTALogoTwo src="/images/cta-logo-two.png" />
        </CTA>
        <BgImage />
      </Content>
    </Container>
  );
};
const Container = styled.section`
overflow: hidden
display: flex
flex-direction: column;
text-align:center; 
height:100vh;
`;

const Content = styled.div`
  margin-bottom: 10vw;
  display: flex;
  width: 100%;
  min-height: 100vh;
  position: relative;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  padding: 80px 40px;
`;

const BgImage = styled.div`
  height: 100%;
  background-image: url("/images/login-background.jpg");
  position: top;
  background-size: cover;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  position: absolute;
`;

const CTA = styled.div`
  max-width: 650px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const CTALogoOne = styled.img`
  display: block;
  width: 100%;
  max-width: 600px;
  margin-bottom: 12px;
  min-height: 1px;
`;
const SignUp = styled.a`
  font-weight: bold;
  color: #f9f9f9;
  background-color: #0063e5;
  padding: 16.5px 0px;
  margin-bottom: 12px;
  width: 100%;
  letter-spacing: 1.5px;
  font-size: 18px;
  border-radius: 4px;

  &:hover {
    background-color: #0483ee;
  }
`;

const Description = styled.p`
  letter-spacing: 1.5px;
  margin: 0 0 24px;
  line-height: 1.5em;
  font-size: 11px;
`;

const CTALogoTwo = styled.img`
width: 100;
margin-bottom: 20px;
display: inline-block;
max-width: 600px;
`

export default Login;
