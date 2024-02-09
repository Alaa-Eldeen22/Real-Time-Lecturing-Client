import React from "react";
import { styled } from "@mui/system";
import Title from "../../shared/components/Title";
import FileList from "./FilesList/FilesList";

const MainContainer = styled("div")({
  width: "224px",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#2F3136",
});

const Files = () => {
  return (
    <MainContainer>
      <Title title="Files" />
      <FileList />
    </MainContainer>
  );
};

export default Files;
