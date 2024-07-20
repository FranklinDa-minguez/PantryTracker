"use client"
import { UUID } from "crypto"
import { createClient } from "@/utils/supabase/server"
import { redirect } from "next/navigation"
import { deleteCard } from "./ui/actions"

const Rowdata = ({Name, Quantity, Price, Id}:{Name:string, Quantity:number, Price:number, Id:UUID}) => {


    return (
        <>
        <div className=" flex flex-row justify-evenly border border-black h-1/2 w-full m-auto">
            <div>Item Name: {Name}</div>
            <div>Quantity: {Quantity}</div>
            <div>Price Per Unit: {Price}</div>
            <form onSubmit={() => deleteCard(Id)}>
                <button type="submit"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAI1JREFUSEvtlcsRgCAMRB+daSlWolampdiJTg5+BgkCA16AIwP7yAJZQ+FhCusTAuiARTnIBMy+Q34BfOKiuwEDsGoQG7BnsuzS/R2QqYBbRruDVKteenUAzipt21zzSRY1gPPpP/1uFlVgUUwDDP5okmASNjFDQqe3N2jNTsTHCIiabF+RGVOBc21xwAEypysZ8kPazQAAAABJRU5ErkJggg=="/></button>
            </form>
        </div>
        </>
    )
}

export default Rowdata