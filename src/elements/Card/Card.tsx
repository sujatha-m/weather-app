import React from "react";

import classes from "./Card.module.css";

type Props = React.PropsWithChildren<{}>;

const Card: React.FunctionComponent<Props> = (props: Props) => {
  return <div className={classes.Card}>{props.children}</div>;
};

export default Card;
