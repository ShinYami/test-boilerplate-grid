import React from "react";
import styled from "styled-components";
import Exemple from "./components/exemple/exemple";

const StyledHome = styled.div`
  height: 100vh;
  background-color: #000;
`;

function Home() {
	const array = [1, 2, 3]

	return (
		<StyledHome>
			<Exemple />
		</StyledHome>
	);
}

export default Home;
