"use server"

import { createClient } from "@/utils/supabase/server";
import { UUID } from "crypto";

export const deleteCard = async (Id:UUID) => {
    const supabase = createClient();
    const {data, error} = await supabase.from("Pantry").delete().eq("id", Id);
    console.log(Id);
    if (error) {
        console.error('Error deleting data:', error);
        return;
    }
}