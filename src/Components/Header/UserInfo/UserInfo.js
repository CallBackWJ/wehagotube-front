import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import { SIGN_UP, ME } from "../../../Graphql/queries";
import { useMutation, useQuery } from "react-apollo-hooks";

const User = styled.div`
  width: 15rem;
  height: 2rem;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Avatar = styled.img`
  background-size: cover;
  width: 2rem;
  height: 2rem;
  border-radius: 1rem;
`;
const LogOut = styled.button`
  flex:0.3;
  color: white;
  border-radius: 0.2rem;
  background-color:gray;
`;
const Admin = styled.button`
  flex:0.3;
  color: white;
  border-radius: 0.2rem;
  background-color:darkgray;
`;

const UserInfo = props => {
  const [signUp] = useMutation(SIGN_UP);
  const signUpBinder = (name, avatar, email, accessToken, googleId) =>
    signUp({
      variables: {
        name: name,
        avatar: avatar,
        email: email,
        accessToken: accessToken,
        googleId: googleId
      }
    });
  const responseGoogle = async response => {
    const token = await signUpBinder(
      response.profileObj.name,
      response.profileObj.imageUrl,
      response.profileObj.email,
      response.accessToken,
      response.profileObj.googleId
    );
    

    await window.sessionStorage.setItem("token", token.data.signUp);
    window.location.reload();
    console.log("google::",response)
  };

  const { data, loading } = useQuery(ME);

  return (
    <div>
      {loading ? null : data.me ? (
        <User>
          <Avatar src={data.me.avatar} />
          {data.me.name}
          <LogOut
            onClick={e => {
              window.sessionStorage.removeItem("token");
              window.location.reload();
            }}
          >
            로그아웃
          </LogOut>
          {data.me.permission==="ADMIN"?(<Admin onClick={e=>{
              props.history.push('/admin');
          }}>관리</Admin>):null}
        </User>
      ) : (
        <GoogleLogin
          clientId="471063291259-4n327gl2b2rtp7vpcqmghhuk91q86k0h.apps.googleusercontent.com"
          buttonText="구글 계정으로 이용하기"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          scope="profile"
         
          
          
        />
      )}
    </div>
  );
};

UserInfo.propTypes = {};

export default withRouter(UserInfo);
