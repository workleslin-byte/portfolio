"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { cn } from "@/lib/utils";
import MaskReveal from "@/lib/motion/MaskReveal";
import MagneticButton from "@/lib/motion/MagneticButton";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(20, "Please write at least 20 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;
type SubmitState = "idle" | "loading" | "success" | "error";

const inputClass =
  "w-full min-h-[44px] bg-transparent border-0 border-b border-ink/20 py-3 px-0 font-sans text-sm text-ink placeholder:text-ink/30 focus:outline-none focus:border-accent transition-colors duration-200";

const labelClass =
  "block font-mono text-[11px] uppercase tracking-[0.25em] text-mute mb-2";

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
      className="w-full bg-paper px-6 py-24 md:px-12 md:py-36 text-ink"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 md:grid-cols-2 lg:gap-28">
        {/* ── Left ── */}
        <div>
          <p className="mb-8 font-mono text-[11px] uppercase tracking-[0.35em] text-mute">
            Get in touch
          </p>

          <MaskReveal
            as="h2"
            lineClassName="font-display font-extrabold tracking-tight leading-[0.98] text-ink text-[clamp(2.5rem,6vw,5.5rem)]"
            lines={[
              "Let's build",
              <span key="2" className="italic text-accent">
                something worth reading.
              </span>,
            ]}
          />

          <p className="mt-8 max-w-sm font-sans text-sm leading-[1.8] text-ink/60">
            Open to consulting engagements, content strategy retainers, and
            growth projects. Kerala, India. Remote and relocation both on the
            table.
          </p>

          {/* Calendly block */}
          <div className="mt-10 border border-ink/15 bg-ink/[0.02] p-7">
            <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.25em] text-mute">
              Book a call
            </p>
            <p className="mb-5 font-sans text-sm text-ink">Schedule 30 minutes</p>
            <a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-ink px-5 py-2.5 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-paper transition-opacity duration-200 hover:opacity-80"
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
                className="font-display font-bold text-ink"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
              >
                Message sent.
              </h3>
              <p className="mt-4 font-sans text-sm text-mute">
                I&apos;ll respond within 48 hours.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="flex flex-col gap-8"
            >
              <div>
                <label className={labelClass}>Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  autoComplete="name"
                  {...register("name")}
                  className={inputClass}
                />
                {errors.name && (
                  <p className="mt-1.5 font-mono text-[10px] text-red-500">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label className={labelClass}>Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  autoComplete="email"
                  {...register("email")}
                  className={inputClass}
                />
                {errors.email && (
                  <p className="mt-1.5 font-mono text-[10px] text-red-500">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label className={labelClass}>Message</label>
                <textarea
                  rows={5}
                  placeholder="Tell me what you're building..."
                  {...register("message")}
                  className={cn(inputClass, "resize-none")}
                />
                {errors.message && (
                  <p className="mt-1.5 font-mono text-[10px] text-red-500">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {submitState === "error" && serverError && (
                <p className="font-mono text-[11px] text-red-500">{serverError}</p>
              )}

              <MagneticButton strength={0.2} className="w-full">
                <button
                  type="submit"
                  disabled={submitState === "loading"}
                  className="w-full bg-accent py-4 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-white transition-opacity duration-200 hover:opacity-90 disabled:opacity-50 active:scale-[0.99]"
                >
                  {submitState === "loading" ? "Sending..." : "Send message →"}
                </button>
              </MagneticButton>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
