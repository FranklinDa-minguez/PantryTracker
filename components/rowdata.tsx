"use client"
import { UUID } from "crypto"
import { deleteCard } from "./ui/actions"
import { useRouter } from "next/navigation"

const Rowdata = ({Name, Quantity, Price, Id}:{Name:string, Quantity:number, Price:number, Id:UUID}) => {

    const router = useRouter()

    return (
        <>
        <div className=" flex flex-row justify-around border border-black h-1/2 w-full m-auto">
            <div className=" px-3">{Name}</div>
            <div className=" mx-5">{Quantity}</div>
            <div className=" pl-7">{Price}</div>
            <div className=" flex justify-around w-1/5">
            <form onSubmit={() => deleteCard(Id)}>
                <button type="submit">Delete</button>
            </form>
            <button onClick={() => router.push(`/Update/${Id}`)}>Update</button>
            </div>
        </div>
        </>
    )
}

export default Rowdata