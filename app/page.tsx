
import { createClient } from "@/utils/supabase/client";
import Rowdata from "@/components/rowdata";
import { redirect } from "next/navigation";

export const revalidate = 0;
export default async function Home() {

  const supabase = createClient()

  const routeAdd = async () => {
    "use server"
    redirect("/Add")
  }
  const fetchpantrydata = async () => {
      const {data} = await supabase.from("Pantry").select()
      console.log(data);
      return data;
  }
  const data = await fetchpantrydata();

  return (
    <>
      <h1 className=" text-center">PANTRY MANAGER</h1>
      <div className=" flex flex-col h-1/2 w-2/3 m-auto">
        <form className=" flex justify-center border border-black ">
          <button formAction={routeAdd}>Add</button>
        </form>
        <div className="flex justify-around w-full border border-black">
            <p>Item Name</p>
            <p>Quantity</p>
            <p className=" mr-7">Price Per Unit</p>
            <p></p>
            <p></p>
          </div>
        {data && data?.map((x:any) =>
          <>
            <Rowdata Name={x.Name} Quantity={x.Quantity} Price={x.Price} Id={x.id}/>
          </>
          )
        }
      </div>
      
    </>
  );
}
