import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "emailjs-com";


const schema = z.object ({
  name: z.string().min(2, "Please enter your full name."),
  email: z.email("Enter a valid email address"),
  message: z.string().min(10, "Message must be atlease 10 characters"),
})

const ContactMe = () => {

  const [serverMsg, setServerMsg] = useState({ok: null, text: ""});

  const{
    register,
    handleSubmit,
    formState: {errors, isSubmitting},
    reset
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {name: "", email: "", message: "", company: ""}
  });


  //Faking the submitting action
  const onSubmit = async (data) => {
    setServerMsg({ok: null, text:""})

    try {
    await emailjs.send(
      "service_t6awkp5",
      "template_qpq8o74",
      {
        name: data.name,
        email: data.email,
        message: data.message,
      },
      "WUI-uHnSVbJAAqZho"
    );

    reset();
    setServerMsg({
      ok: true,
      text: "Message sent successfully! I'll get back to you soon.",
    });
  }  catch (error) {
  console.error("EmailJS status:", error.status);
  console.error("EmailJS text:", error.text);

  setServerMsg({
    ok: false,
    text: error?.text || "Something went wrong. Please try again.",
  });
}


  }

  return (
    <section id="contact" aria-labelledby="contact-title" className="relative flex flex-col justify-center items-center w-full bg-gradient-to-b from-[#040712] to-[#090f24] mt-20 py-16 border-t border-cyan-500/10">
      <div className="max-w-screen-md w-full mt-10 px-6">
        {/* Header */}
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">Get in touch</p>
          <h2 id="contact-title" className="mt-3 text-3xl md:text-4xl font-semibold bg-gradient-to-r from-cyan-200 to-blue-200 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="mt-4 text-slate-400">
            Have a project in mind or want to collaborate? I'd love to hear from you.
            Send me a message and let's create something amazing together.
          </p>
        </div>

        {/* Form */}
        <form onSubmit= {handleSubmit(onSubmit)}className="py-10 mt-10 space-y-6">
          {/* Row 1 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label htmlFor = "name" className="mb-2">Your Name</label>
              <input
                id = "name"
                {...register("name")}
                type="text"
                autoComplete="name"
                required
                className="h-11 border border-cyan-500/30 rounded-lg bg-cyan-950/20 px-3 py-3 outline-none focus-visible:ring-4 focus-visible:ring-cyan-500/25 focus-visible:border-blue-400/50 transition"
              />
              {errors.name && <p className = "text-red-400 text-sm mt-1">{errors.name.message}</p>}
            </div>

            <div className="flex flex-col">
              <label htmlFor = "email" className="mb-2">Email</label>
              <input
                id = "email"
                {...register("email")}
                type="email"
                autoComplete="email"
                required
                className="h-11 border border-cyan-500/30 rounded-lg bg-cyan-950/20 px-3 py-3 outline-none focus-visible:ring-4 focus-visible:ring-cyan-500/25 focus-visible:border-blue-400/50 transition"
              />
              {errors.email && <p className = "text-red-400 text-sm mt-1">{errors.email.message}</p>}
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex flex-col">
            <label htmlFor = "message" className="mb-2">Message</label>
            <textarea
              rows={4}
              id = "message"
              {...register("message")}
              required
              className="border border-cyan-500/30 rounded-lg bg-cyan-950/20 px-3 py-3 w-full outline-none focus-visible:ring-4 focus-visible:ring-cyan-500/25 focus-visible:border-blue-400/50 transition"
            ></textarea>
            {errors.message && <p className = "text-red-400 text-sm mt-1">{errors.message.message}</p>}
          </div>

          {/* Button */}
          <button
            type="submit"
            className="mt-4 inline-flex items-center justify-center px-5 h-11 bg-gradient-to-r from-cyan-500 to-blue-600 !text-white text-sm font-medium rounded-lg shadow-lg shadow-cyan-500/30 hover:from-cyan-400 hover:to-blue-500 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-cyan-500/30 transition"
          >
            Send Message
          </button>
          {serverMsg.text && (
            <p className = {`mt-3 text-sm ${serverMsg.ok ? "text-green-400" : "text-red-400"}`}>
              {serverMsg.text}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactMe;

