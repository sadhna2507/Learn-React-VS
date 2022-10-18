import React from "react";
import { useParams } from "react-router-dom";

export function Content() {
  const { id } = useParams();
  console.log("ID -->", id);
  return (
    <div>
      <p>This is the page for Content{id}</p>
    </div>
  );
}
