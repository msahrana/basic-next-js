import React from "react";

const page = ({params}: {params: {id: string}}) => {
  return (
    <div>
      <h2>Shirt: {params.id}</h2>
    </div>
  );
};

export default page;
