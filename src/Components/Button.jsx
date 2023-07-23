import buttonStyles from "./Button.styles.ts";
export const Button = (props) => {
  const classes = buttonStyles();
  return (
    <button
      className={classes.button}
      onClick={props.onClickHandler}
      value={props.value}
    >
      {props.children}
    </button>
  );
};
