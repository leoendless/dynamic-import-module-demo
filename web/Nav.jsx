import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

function Navs({ data = [] }) {
  const location = useLocation();
  return (
    <NavWrapper>
      <ul>
        {data.map(item => (
          <li
            key={item.name}
            className={item.name === location.pathname.slice(1) ? "active" : ""}
          >
            <a href={item.name}>{item.title}</a>
          </li>
        ))}
      </ul>
    </NavWrapper>
  );
}

const NavWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 80px 32px;
  font-size: 24px;

  & > ul > li {
    padding-bottom: 24px;

    &.active {
      & > a {
        color: #55bc8a;
      }
    }

    & > a {
      color: #eff4f9;

      &:hover {
        color: #55bc8a;
      }
    }
  }
`;

export default Navs;
