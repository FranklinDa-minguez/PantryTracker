"use client"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useEffect, useState, ChangeEvent, FormEvent } from "react";
import { createClient } from "@/utils/supabase/client";

interface FormData {
    id: string;
    Name: string;
    Quantity: string;
    Price: string;
}

const updateForm = ({params}:{params:any}) => {
    const {id} = params
    console.log(params)
    const supabase = createClient()
    const router = useRouter()
    const [formData, setFormData] = useState<FormData>({id: id, Name: '', Quantity: '', Price: '' })

    useEffect(() => {
        const getRow = async () => {
            const { data, error } = await supabase.from("Pantry").select("*").eq("id", id).single()
            if (error) {
                console.error(error)
            } else if (data) {
                console.log(data)
                setFormData(data as FormData)
            }
        }
        getRow()
    }, [id, supabase])

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const { error } = await supabase
            .from('Pantry')
            .update(formData)
            .eq('id', id)
        if (error) {
            console.error('Error updating row:', error)
        } else {
            router.push('/') // Redirect to home page or wherever you want after update
        }
    }

    const Back = () => {
        router.back();
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col w-1/2 h-screen justify-center items-center space-y-4 m-auto">
            <Input 
                className="w-2/3" 
                name="Name" 
                required 
                placeholder="Item Name" 
                value={formData.Name}
                onChange={handleInputChange}
            />
            <Input 
                className="w-2/3" 
                name="Quantity" 
                required 
                placeholder="Quantity" 
                type="number" 
                value={formData.Quantity}
                onChange={handleInputChange}
            />
            <Input 
                className="w-2/3" 
                name="Price" 
                required 
                placeholder="Price per Unit" 
                value={formData.Price}
                onChange={handleInputChange}
            />
            <div className="flex justify-around w-1/2">
                <Button type="button" onClick={Back}>Back</Button>
                <Button type="submit">Update</Button>
            </div>
        </form>
    )
}

export default updateForm