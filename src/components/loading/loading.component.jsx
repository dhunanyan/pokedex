import React from "react";
import { Loader } from "./loading.styles";

const Loading = () => {
  const spans = [...Array(9).keys()];
  return (
    <div>
      <Loader className="grey" grey={true}>
        {spans.map((span) => (
          <span key={span} />
        ))}
      </Loader>
      <Loader grey={false}>
        {spans.map((span) => (
          <span key={span} />
        ))}
      </Loader>
    </div>
  );
};

export default Loading;
