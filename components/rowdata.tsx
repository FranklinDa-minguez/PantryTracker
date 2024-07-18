"use server"
import { UUID } from "crypto"
import { Delete } from "./action"

const Rowdata = ({Name, Quantity, Price, Id}:{Name:string, Quantity:number, Price:number, Id:UUID}) => {

    const handlesubmit = async () => {
        await Delete(Id)
    }

    return (
        <>
        <form className=" flex flex-row justify-evenly border border-black h-1/2 w-full m-auto">
            <div>Item Name: {Name}</div>
            <div>Quantity: {Quantity}</div>
            <div>Price Per Unit: {Price}</div>
            <button type="submit" formAction={handlesubmit}><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAI1JREFUSEvtlcsRgCAMRB+daSlWolampdiJTg5+BgkCA16AIwP7yAJZQ+FhCusTAuiARTnIBMy+Q34BfOKiuwEDsGoQG7BnsuzS/R2QqYBbRruDVKteenUAzipt21zzSRY1gPPpP/1uFlVgUUwDDP5okmASNjFDQqe3N2jNTsTHCIiabF+RGVOBc21xwAEypysZ8kPazQAAAABJRU5ErkJggg=="/></button>
        </form>
        </>
    )
}

export default Rowdata