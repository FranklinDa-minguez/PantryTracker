import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { createClient } from "@/utils/supabase/server"

const Add = async () => {

    const Submit = async (Formdata:FormData) => {

        "use server"
        // 1.Create a Supabase client
        const supabase = createClient()

        const stuff = {

            Name:Formdata.get("Name"),
            Quantity:Formdata.get("Quantity"),
            Price:Formdata.get("Price")
            
        }

        const {error} = await supabase.from("Pantry").insert(stuff)
        
        if(error) {
            console.log("error", {error})
            return 
        }

        

    }



    return (
        <>
            <form action={Submit} className="flex flex-col w-screen h-screen justify-center items-center space-y-4">
                <Input className="w-2/3" name="Name" required placeholder="Item Name"/>
                <Input className="w-2/3" name="Quantity" required placeholder="Quantity" type="number"/>
                <Input className="w-2/3" name="Price" required placeholder="Price per Unit"/>
                <Button type="submit">Add</Button>
            </form>
        </>
    )
}

export default Add