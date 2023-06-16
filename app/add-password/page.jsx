'use client';
import Form from "@components/Form";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const page = () => {
    const router = useRouter();
    const { data: session } = useSession();

    const [submitting, setSubmitting] = useState(false);
    const [card, setCard] = useState({ siteUrl: "", email: "", password: "" });

    const addPassword = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        try {
            const response = await fetch("/api/password/new", {
                method: "POST",
                body: JSON.stringify({
                    userId: session?.user.id,
                    siteUrl: card.siteUrl, 
                    email: card.email, 
                    password: card.password
                })
            });
            
            if(response.ok){
                router.push("/");
            }
        } catch (error) {
            console.log(error)
        }finally{
            setSubmitting(false);
        }
    }

    return (
        <Form
            card={card}
            setCard={setCard}
            submitting={submitting}
            handleSubmit={addPassword}
        />
    )
}

export default page;