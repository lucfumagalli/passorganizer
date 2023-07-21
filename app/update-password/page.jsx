"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import Form from "@components/Form";

const UpdatePassword = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pswId = searchParams.get("id");

  const [card, setCard] = useState({ siteUrl: "", email: "", password: "" });
  const [submitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const getPromptDetails = async () => {
      const response = await fetch(`/api/password/${pswId}`);
      const data = await response.json();
      setCard({
        siteUrl: data.siteUrl,
        email: data.email,
        password: data.password
      });
    };

    if (pswId) getPromptDetails();
  }, [pswId]);

  const updatePassword = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!pswId) return alert("Missing Password ID!");

    try {
      const response = await fetch(`/api/password/${pswId}`, {
        method: "PATCH",
        body: JSON.stringify({
          siteUrl: card.siteUrl,
          email: card.email,
          password: card.password
        }),
      });

      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form
      text="Update password"
      card={card}
      setCard={setCard}
      submitting={submitting}
      handleSubmit={updatePassword}
    />
  );
};

export default UpdatePassword;
