"use server"

import { createClient } from "@/utils/supabase/server"

export const submitForm = async (formData: FormData) => {
    // Create a Supabase client
    const supabase = createClient()

    const stuff = {
        Name:formData.get("Name"),
        Quantity:formData.get("Quantity"),
        Price:formData.get("Price")
    }

    const { error } = await supabase.from("Pantry").insert(stuff);

    if (error) {
        console.log("error", { error })
        throw error
    }
};
