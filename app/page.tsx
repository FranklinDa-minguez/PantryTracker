"use client"
import React from "react";
import { useRouter } from "next/navigation";
export default function Home() {

  const router = useRouter()

  const routeAdd = (e:any) => {
    e.preventDefault()
    router.push("/Add")
  }

  return (
    <>
      <h1 className=" text-center">PANTRY MANAGER</h1>
      <div className=" flex flex-col border border-black h-1/2 w-10/12 m-auto">
        <div className=" flex justify-center">
          <button onClick={routeAdd}>Add</button>
        </div>
      </div>
    </>
  );
}
