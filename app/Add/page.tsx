"use server"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { submitForm } from "./submitForm";

const Add = () => {

    return (
        <>
            <form className="flex flex-col w-screen h-screen justify-center items-center space-y-4">
                <Input className="w-2/3" name="Name" required placeholder="Item Name" />
                <Input className="w-2/3" name="Quantity" required placeholder="Quantity" type="number" />
                <Input className="w-2/3" name="Price" required placeholder="Price per Unit" />
                <Button type="submit" formAction={submitForm}>Add</Button>
            </form>
        </>
    );
};

export default Add;

