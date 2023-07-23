'use client';
import Form from "@components/Form";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { encrypt } from "@utils/crypto";

const page = () => {
    const router = useRouter();
    const { data: session } = useSession();

    const [submitting, setSubmitting] = useState(false);
    const [card, setCard] = useState({ siteUrl: "", email: "", password: "" });

    const addPassword = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        try {
            card.siteUrl = encrypt(card.siteUrl).encryptedData;
            card.email = encrypt(card.email).encryptedData;
            card.password = encrypt(card.password).encryptedData;

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
            text="Add password"
            card={card}
            setCard={setCard}
            submitting={submitting}
            handleSubmit={addPassword}
        />
    )
}

export default page;