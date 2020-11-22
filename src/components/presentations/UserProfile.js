import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const Avatar = styled.img`
width:200px;
`;

const Info = styled.div`
  display:flex;
  flex-direction: column;
  margin-left: 30px;
`;

const DisplayName = styled.h2`
 font-size: 1.5rem;
 font-weight: bold;
 margin-bottom: 15px;
 text-transform: uppercase;
`;

const Reputation = styled.h2`
  font-size: 1.0rem;
  margin: auto 0 15px;
  text-transform: uppercase;
`;
const AcceptRate = styled.h2`
  font-size: 1.0rem;
  text-transform: uppercase;
`;

const UserProfile = ({avatarUrl, displayName, reputation, acceptRate}) => {
    return <Wrapper>
        <Avatar src={avatarUrl}/>
        <Info>
            <DisplayName>{displayName}</DisplayName>
            <Reputation>Reputation: {reputation}</Reputation>
            <AcceptRate>Accept Rate: {acceptRate}</AcceptRate>
        </Info>
    </Wrapper>
}


export default UserProfile;
