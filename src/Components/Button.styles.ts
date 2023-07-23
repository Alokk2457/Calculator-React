import { createUseStyles } from "react-jss";

export default createUseStyles({
  button: {
    padding: "8px",
    margin: "10px",

    "&:hover": {
      color: "red",
      cursor: "pointer",
      padding: "12px",
    },
  },
});
