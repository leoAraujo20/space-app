import styled from "styled-components";

const Figure = styled.figure`
  background-image: url(${props => props.image});
  flex-grow: 1;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  min-height: 328px;
  margin: 0;
  border-radius: 20px;
  max-width: 100%;
  background-size: cover;
`

const Title = styled.h1`
  font-weight: 400;
  font-size: 40px;
  line-height: 48px;
  color: #FFFFFF;
  max-width: 300px;
  padding: 0 64px;
`

function Banner({text, bannerImg}) {
  return (
    <Figure image={bannerImg}>
      <Title>{text}</Title>
    </Figure>
  )
}

export default Banner;