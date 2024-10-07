import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = ({data}: any) => {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <Image src={data.url} alt="card-image" width={400} height={400} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{data.thumbnailUrl}</h2>
        <p>{data.title}</p>
        <div className="card-actions justify-end">
          <Link className="btn btn-primary" href={`/photos/${data.id}`}>
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
