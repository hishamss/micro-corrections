import React from "react";
import styled from "styled-components";

const StoryWrapper = styled.div`
  .demo-content {
    background-color: #434448;
    border: 1px solid #888b8d;
    color: #ffffff;
    padding: 0.5rem;
  }
`;

export const AllBreakpointsExample = () => (
  <>
    <StoryWrapper>
      <div className="grid">
        <div className="row">
          <div className="col-12">
            <div className="demo-content">Full Width</div>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="demo-content">1/2</div>
          </div>
          <div className="col-6">
            <div className="demo-content">1/2</div>
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <div className="demo-content">1/3</div>
          </div>
          <div className="col-4">
            <div className="demo-content">1/3</div>
          </div>
          <div className="col-4">
            <div className="demo-content">1/3</div>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <div className="demo-content">1/4</div>
          </div>
          <div className="col-3">
            <div className="demo-content">1/4</div>
          </div>
          <div className="col-3">
            <div className="demo-content">1/4</div>
          </div>
          <div className="col-3">
            <div className="demo-content">1/4</div>
          </div>
        </div>
        <div className="row">
          <div className="col-2">
            <div className="demo-content">1/6</div>
          </div>
          <div className="col-2">
            <div className="demo-content">1/6</div>
          </div>
          <div className="col-2">
            <div className="demo-content">1/6</div>
          </div>
          <div className="col-2">
            <div className="demo-content">1/6</div>
          </div>
          <div className="col-2">
            <div className="demo-content">1/6</div>
          </div>
          <div className="col-2">
            <div className="demo-content">1/6</div>
          </div>
        </div>
        <div className="row">
          <div className="col-1">
            <div className="demo-content">1/12</div>
          </div>
          <div className="col-1">
            <div className="demo-content">1/12</div>
          </div>
          <div className="col-1">
            <div className="demo-content">1/12</div>
          </div>
          <div className="col-1">
            <div className="demo-content">1/12</div>
          </div>
          <div className="col-1">
            <div className="demo-content">1/12</div>
          </div>
          <div className="col-1">
            <div className="demo-content">1/12</div>
          </div>
          <div className="col-1">
            <div className="demo-content">1/12</div>
          </div>
          <div className="col-1">
            <div className="demo-content">1/12</div>
          </div>
          <div className="col-1">
            <div className="demo-content">1/12</div>
          </div>
          <div className="col-1">
            <div className="demo-content">1/12</div>
          </div>
          <div className="col-1">
            <div className="demo-content">1/12</div>
          </div>
          <div className="col-1">
            <div className="demo-content">1/12</div>
          </div>
        </div>
      </div>
    </StoryWrapper>
  </>
);