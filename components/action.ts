"use server"

import { createClient } from "@/utils/supabase/server"
import { UUID } from "crypto"

export const Delete = async (Id:UUID) => {
    const supabase = createClient()
    const { error } = await supabase.from("Pantry").delete().eq("Id", Id)
    if (error) {
        console.log(error)
        return
    }
}