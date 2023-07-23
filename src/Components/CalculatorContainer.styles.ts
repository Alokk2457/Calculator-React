import { createUseStyles } from "react-jss";

export default createUseStyles({
  container: {
    top: "40%",
    left: "40%",
    position: "absolute",
    border: "10px solid turquoise",
    padding: "30px",
    background: "beige",

    "&:hover": {
      background: "bisque",
      border: "10px solid red",
      color: "purple",
    },
  },
  h1: {
    textAlign: "center",
    "&:hover": {
      cursor: "grab",
    },
  },
  innerDiv: {
    background: "yellow",
    padding: "10px",
  },
  success: {
    color: "green",
  },
  failure: {
    color: "red",
  },
});
