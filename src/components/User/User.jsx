import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
    const {userid} = useParams()
  return <div className="flex justify-center bg-gray-600 text-4xl p-5 text-white">User: {userid}</div>;
};

export default User;
