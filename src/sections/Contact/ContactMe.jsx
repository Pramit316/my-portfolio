import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

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

    try{
      await new Promise((r)=> setTimeout(r,800));
      reset();
      setServerMsg({ok: true, text:"Message sent. I'll get back to you soon!"}); 
    }catch(e){
      setServerMsg({ok: false, text:`Something went wrong. Please try again!! ${e}`}); 
    }
  }

  return (
    <section aria-labelledby="contact-title" className="flex flex-col justify-center items-center w-full bg-black mt-20">
      <div className="max-w-screen-md w-full mt-10 px-6">
        {/* Header */}
        <div className="text-center">
          <h2 id = "contact-title" className="text-2xl">Let's Work Together</h2>
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
                className="h-11 border border-slate-400 rounded-lg bg-transparent px-3 py-3 outline-none focus-visible:ring-4 focus-visible:ring-slate-400/30 focus-visible:border-slate-300 transition"
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
                className="h-11 border border-slate-400 rounded-lg bg-transparent px-3 py-3 outline-none focus-visible:ring-4 focus-visible:ring-slate-400/30 focus-visible:border-slate-300 transition"
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
              className="border border-slate-500 rounded-lg bg-transparent px-3 py-3 w-full outline-none focus-visible:ring-4 focus-visible:ring-slate-500/30 focus-visible:border-slate-300 transition"
            ></textarea>
            {errors.message && <p className = "text-red-400 text-sm mt-1">{errors.message.message}</p>}
          </div>

          {/* Button */}
          <button
            type="submit"
            className="mt-4 inline-flex items-center justify-center px-5 h-11 !bg-white text-black text-sm font-medium rounded-lg shadow-lg shadow-white/10 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-slate-400/30 transition"
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

