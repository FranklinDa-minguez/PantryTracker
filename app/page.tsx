"use client"
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
import Rowdata from "@/components/rowdata";
import { useState } from "react";
export default function Home() {

  const supabase = createClient()
  const router = useRouter()

  const [data, setData] = useState<any[] | null>(null);

  const routeAdd = (e:any) => {
    e.preventDefault()
    router.push("/Add")
  }


  const fetchpantrydata = async () => {
    const {data} = await supabase.from("Pantry").select("*")
    console.log(data)
    setData(data);
  }

  useEffect(() => {
    fetchpantrydata();
  }, []);

  return (
    <>
      <h1 className=" text-center">PANTRY MANAGER</h1>
      <div className=" flex flex-col h-1/2 w-10/12 m-auto">
        <div className=" flex justify-center border border-black ">
          <button onClick={routeAdd}>Add</button>
        </div>
        {data && data.map((x:any) =>
          <>
          <Rowdata Name={x.Name} Quantity={x.Quantity} Price={x.Price} Id={x.id}/>
          </>
          )
        }
      </div>
      
    </>
  );
}
