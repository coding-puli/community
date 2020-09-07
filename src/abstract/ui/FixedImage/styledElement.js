/*
position: fixed;
top: 64px;
right: 4px;
z-index: 2;*/


import styled from "styled-components";

export const StyleImg = styled('img').attrs(() => ({
	className: 'fixed-img'
}))`
  position: fixed;
top: 64px;
right: 4px;
z-index: 2;
`;

StyleImg.displayName = 'StyleImg';