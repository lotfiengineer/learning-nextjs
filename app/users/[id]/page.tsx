import React from "react";

interface Props {
  params: { id: number };
}

// only works with pages -> { params: { id } }: Props
const UserDetailPage = ({ params: { id } }: Props) => {
  return <div>UserDetailPage {id}</div>;
};

export default UserDetailPage;
