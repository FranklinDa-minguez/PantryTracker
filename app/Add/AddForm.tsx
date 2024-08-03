"use client"

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { AddsubmitForm } from "./submitForm";
import { useRouter } from "next/navigation";

const AddForm = () => {
    const router = useRouter();

    const Back = () => {
        router.back();
    }

    return (
        <form className="flex flex-col w-1/2 h-screen justify-center items-center space-y-4 m-auto">
            <Input className="w-2/3" name="Name" required placeholder="Item Name" />
            <Input className="w-2/3" name="Quantity" required placeholder="Quantity" type="number" />
            <Input className="w-2/3" name="Price" required placeholder="Price per Unit" />
            <div className="flex justify-around w-1/2">
                <Button onClick={Back}>Back</Button>
                <Button type="submit" formAction={AddsubmitForm}>Add</Button>
            </div>
        </form>
    );
};

export default AddForm;