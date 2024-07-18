"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";
import { submitForm } from "@/utils/supabase/server/submitForm";

const Add = () => {
    const router = useRouter();

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);

        try {
            await submitForm(formData);
            router.back()
        } catch (error) {
            console.log("Submission error", error);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="flex flex-col w-screen h-screen justify-center items-center space-y-4">
                <Input className="w-2/3" name="Name" required placeholder="Item Name" />
                <Input className="w-2/3" name="Quantity" required placeholder="Quantity" type="number" />
                <Input className="w-2/3" name="Price" required placeholder="Price per Unit" />
                <Button type="submit">Add</Button>
            </form>
        </>
    );
};

export default Add;

