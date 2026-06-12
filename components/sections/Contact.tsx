"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { cn } from "@/lib/utils";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(20, "Please write at least 20 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

type SubmitState = "idle" | "loading" | "success" | "error";

const inputClass =
  "w-full min-h-[44px] bg-transparent border-0 border-b border-linen/30 py-3 px-0 font-sans text-sm text-linen placeholder:text-muted focus:outline-none focus:border-gold transition-colors duration-200";

const labelClass =
  "block font-mono text-[11px] uppercase tracking-[0.25em] text-gold mb-2";

export default function Contact() {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmitState("loading");
    setServerError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Server error");
      setSubmitState("success");
    } catch {
      setSubmitState("error");
      setServerError(
        "Something went wrong. Please try again or email me directly."
      );
    }
  };

  return (
    <section
      id="contact"
      className="w-full bg-obsidian px-6 py-24 md:px-12 md:py-36"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 md:grid-cols-2 lg:gap-28">
        {/* ── Left ── */}
        <div>
          <p className="mb-8 font-mono text-[11px] uppercase tracking-[0.35em] text-gold">
            ( GET IN TOUCH )
          </p>

          <h2
            className="font-serif leading-[0.9] text-linen"
            style={{ fontSize: "clamp(3rem, 6vw, 6rem)" }}
          >
            Let&apos;s build
          </h2>
          <h2
            className="font-serif italic leading-[0.9] text-gold"
            style={{ fontSize: "clamp(3rem, 6vw, 6rem)" }}
          >
            something worth reading.
          </h2>

          <p className="mt-8 max-w-sm font-sans text-sm leading-[1.8] text-muted">
            Open to consulting engagements, content strategy retainers, and AI
            growth projects. Kerala, India — remote and relocation both on the
            table.
          </p>

          {/* Calendly block */}
          <div className="mt-10 rounded-lg border border-gold/20 bg-linen/[0.05] p-7">
            <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.25em] text-gold">
              ( BOOK A CALL )
            </p>
            <p className="mb-5 font-sans text-sm text-linen">
              Schedule 30 minutes
            </p>
            <a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gold px-5 py-2.5 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-obsidian transition-opacity duration-200 hover:opacity-80"
            >
              Open Calendly →
            </a>
          </div>
        </div>

        {/* ── Right — form ── */}
        <div>
          {submitState === "success" ? (
            <div className="flex h-full flex-col justify-center">
              <h3
                className="font-serif italic text-gold"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
              >
                ( MESSAGE SENT )
              </h3>
              <p className="mt-4 font-sans text-sm text-muted">
                I&apos;ll respond within 48 hours.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="flex flex-col gap-8"
            >
              {/* Name */}
              <div>
                <label className={labelClass}>( NAME )</label>
                <input
                  type="text"
                  placeholder="Your name"
                  {...register("name")}
                  className={inputClass}
                />
                {errors.name && (
                  <p className="mt-1.5 font-mono text-[10px] text-red-400">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className={labelClass}>( EMAIL )</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  {...register("email")}
                  className={inputClass}
                />
                {errors.email && (
                  <p className="mt-1.5 font-mono text-[10px] text-red-400">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className={labelClass}>( MESSAGE )</label>
                <textarea
                  rows={5}
                  placeholder="Tell me what you're building..."
                  {...register("message")}
                  className={cn(inputClass, "resize-none")}
                />
                {errors.message && (
                  <p className="mt-1.5 font-mono text-[10px] text-red-400">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Server error */}
              {submitState === "error" && serverError && (
                <p className="font-mono text-[11px] text-red-400">
                  {serverError}
                </p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={submitState === "loading"}
                className="w-full bg-gold py-4 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-obsidian transition-opacity duration-200 hover:opacity-85 disabled:opacity-50"
              >
                {submitState === "loading" ? "Sending..." : "Send message →"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
