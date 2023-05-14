import React from "react";

const CardGrid = (props) => {
  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
      {props.children}
    </section>
  );
};

export default CardGrid;
