import React from "react";
import styled from "styled-components";

export const Loader = () => {
  return (
    <Loading>
      <div className="loading"></div>
    </Loading>
  );
};

const Loading = styled.div`
  @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }

  .loading {
    width: 6rem;
    height: 6rem;
    margin: 0 auto;
    margin-top: 10rem;
    border-radius: 50%;
    border: 3px solid #bee3f8;
    border-top-color: #63b3ed;
    animation: spinner 0.6s linear infinite;
  }
`;
