import styled from "styled-components";


const RouteUl = styled('ul').attrs(() => ({
	className: 'route-breadcrumps'
}))`
  list-style: none;
  padding-left: 0px;
  display: flex;
  align-items: center;
`;

RouteUl.displayName = 'RouteUl';

const RouteLi = styled('li').attrs(() => ({
	className: 'route-breadcrumps-item'
}))`
  padding: 1rem 0;
  margin-right: 8px;
`;

RouteLi.displayName = 'RouteLi';

export {
	RouteUl,
	RouteLi
}