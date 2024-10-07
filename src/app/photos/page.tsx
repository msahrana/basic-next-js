import Card from "@/components/Card";
import React from "react";

const Photos = async () => {
  interface Photo {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
  }

  const res = await fetch(
    "https://jsonplaceholder.typicode.com/photos?_limit=10"
  );
  const data = await res.json();

  return (
    <div className="grid grid-cols-4 gap-3">
      {data.map((photo: Photo) => (
        <Card key={photo.id} data={photo} />
      ))}
    </div>
  );
};

export default Photos;
