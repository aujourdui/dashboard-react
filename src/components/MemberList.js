import React from "react";
import {
  MainContentsContainer,
  MemberCardContainer,
  MemberCard,
  MemberCardContent,
  MemberCardAvatarContainer,
  MemberCardAvatarImage,
} from "../styles/styles";

const MemberList = () => {
  return (
    <MainContentsContainer>
      Member
      <MemberCardContainer>
        <MemberCard>
          <MemberCardContent>
            <MemberCardAvatarContainer>
              <MemberCardAvatarImage src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"></MemberCardAvatarImage>
              John{" "}
            </MemberCardAvatarContainer>
          </MemberCardContent>
          <MemberCardContent>Frontend Developer</MemberCardContent>
        </MemberCard>
        <MemberCard>
          <MemberCardContent>
            <MemberCardAvatarContainer>
              <MemberCardAvatarImage src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"></MemberCardAvatarImage>
              Fred{" "}
            </MemberCardAvatarContainer>
          </MemberCardContent>
          <MemberCardContent>Product Manager</MemberCardContent>
        </MemberCard>
        <MemberCard>
          <MemberCardAvatarContainer>
            <MemberCardAvatarImage src="https://images.unsplash.com/photo-1603383928972-2116518cd3f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aHVtYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"></MemberCardAvatarImage>
            Jonathan
          </MemberCardAvatarContainer>
          <MemberCardContent>Backend Developer</MemberCardContent>
        </MemberCard>
      </MemberCardContainer>
      <MemberCardContainer>
        <MemberCard>
          <MemberCardContent>
            <MemberCardAvatarContainer>
              <MemberCardAvatarImage src="https://images.unsplash.com/photo-1585675100414-add2e465a136?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGh1bWFuJTIwZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"></MemberCardAvatarImage>
              Mathew
            </MemberCardAvatarContainer>
          </MemberCardContent>
          <MemberCardContent>Web Director</MemberCardContent>
        </MemberCard>
        <MemberCard>
          <MemberCardContent>
            <MemberCardAvatarContainer>
              <MemberCardAvatarImage src="https://images.unsplash.com/photo-1586822339087-80cc375ac083?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGh1bWFuJTIwZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"></MemberCardAvatarImage>
              Wiliam
            </MemberCardAvatarContainer>
          </MemberCardContent>
          <MemberCardContent>IT consultant</MemberCardContent>
        </MemberCard>
        <MemberCard>
          <MemberCardContent>
            <MemberCardAvatarContainer>
              <MemberCardAvatarImage src="https://images.unsplash.com/photo-1621012649112-d1724740b0da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGh1bWFuJTIwZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"></MemberCardAvatarImage>
              Elsa{" "}
            </MemberCardAvatarContainer>
          </MemberCardContent>
          <MemberCardContent>Web Designer</MemberCardContent>
        </MemberCard>
      </MemberCardContainer>
    </MainContentsContainer>
  );
};

export default MemberList;
