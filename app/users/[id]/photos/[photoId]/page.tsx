import React from "react";

interface Props {
  params: { id: number, photoId: number };
}

const PhotoPage = ({ params: { id, photoId } }: Props) => {
  return (
    <div>
      <div>PhotoPage is here {id} , {photoId}</div>
    </div>
  );
};

export default PhotoPage;
