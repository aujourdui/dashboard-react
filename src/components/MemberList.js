import React, { useState, useEffect } from "react";
// import axios from "axios";

import {
  MainContentsContainer,
  MemberCardContainer,
  MemberCard,
  MemberCardContent,
  MemberCardAvatarContainer,
  MemberCardAvatarImage,
} from "../styles/styles";

import * as api from "../api/index";

const MemberList = () => {
  const [member, setMember] = useState([]);

  useEffect(() => {
    const getMember = async () => {
      try {
        const { data } = await api.fetchMembers();
        setMember(data);
        console.log(member);
      } catch (error) {
        console.log(error);
      }
    };
    getMember();
  }, []);
  //   axios
  //   .get("https://jsonblob.com/api/961737343807799296")
  //   .then((res) => {
  //     setMember(res.data);
  //   })
  //   .catch((error) => console.error(`Error: ${error}`));
  // };

  return (
    <MainContentsContainer>
      <MemberCardContainer>
        {member.map((member) => (
          <MemberCard key={member.id}>
            <MemberCardContent>
              <MemberCardAvatarContainer>
                <MemberCardAvatarImage
                  src={member.image}
                  alt="avatar"
                ></MemberCardAvatarImage>
                {member.name}
              </MemberCardAvatarContainer>
            </MemberCardContent>
            <MemberCardContent>{member.position}</MemberCardContent>
          </MemberCard>
        ))}
      </MemberCardContainer>
    </MainContentsContainer>
  );
};

export default MemberList;
