import { notFound } from "next/navigation";
import React from "react";

export type paramsType = Promise<{ id: string }>;

// only works with pages -> { params: { id } }: Props
const UserDetailPage = async (props: { params: paramsType }) => {
  const { id } = await props.params;

  if (parseInt(id) > 10) notFound();

  return <div>UserDetailPage {id}</div>;
};

export default UserDetailPage;
