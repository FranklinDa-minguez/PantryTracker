const Rowdata = ({Name, Quantity, Price}:{Name:String, Quantity:number, Price:number}) => {
    return (
        <>
        <div className=" flex flex-row justify-evenly border border-black h-1/2 w-full m-auto">
            <div>Item Name: {Name}</div>
            <div>Quantity: {Quantity}</div>
            <div>Price Per Unit: {Price}</div>
        </div>
        </>
    )
}

export default Rowdata