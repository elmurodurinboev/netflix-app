"use client";

import {useGlobalContext} from "@/context";
import Login from "@/components/shared/login";
import {useSession} from "next-auth/react";

const Page = () => {
  const {account} = useGlobalContext();
  const {data: session} = useSession();
  // if(account === null) return <Login />
  console.log(session)

  if (session === null) return <Login />

  return (
    <div>
      Browse Page
    </div>
  );
};

export default Page;