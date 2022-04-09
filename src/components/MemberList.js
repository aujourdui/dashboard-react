import React, { useState, useEffect } from "react";

import {
  MemberCardContainer,
  MemberCard,
  MemberCardContent,
  MemberCardAvatarContainer,
  MemberCardAvatarImage,
} from "../styles/member";

import * as api from "../api/index";

const MemberList = () => {
  const [member, setMember] = useState([]);

  useEffect(() => {
    const getMember = async () => {
      try {
        const { data } = await api.fetchMembers();
        setMember(data);
      } catch (error) {
        console.log(error);
      }
    };
    getMember();
  }, []);

  return (
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
  );
};

export default MemberList;
