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
    <section id="contact" className="relative flex flex-col justify-center items-center w-full mt-10 sm:mt-20 py-8 sm:py-16">
      
      {/* Section Header */}
      <div className="text-center mb-4 sm:mb-6 relative z-10 px-4">
        <p className="text-xs uppercase tracking-[0.35em] text-[#002c91] font-extrabold font-sans">Get In Touch</p>
        <h2 className="mt-3 py-2 text-slate-955 text-4xl md:text-5xl font-black leading-tight font-sans">
          Contact Me
        </h2>
        <p className="mt-3 text-slate-900 text-base md:text-lg max-w-xl mx-auto font-sans font-medium">
          Have a question, an idea, or want to collaborate? Drop a message below and let's connect.
        </p>
      </div>

      {/* Outer XP Dialog Box Wrapper */}
      <div className="max-w-screen-sm w-full mt-2 sm:mt-5 px-4">
        <div className="bg-[#ece9d8] border-[3px] border-[#0054e3] rounded-t-lg shadow-2xl flex flex-col font-sans select-none overflow-hidden text-[#333333]">
          
          {/* XP Title Bar */}
          <div className="xp-title-bar-gradient px-2 py-1.5 flex items-center justify-between text-white font-bold text-[11px] md:text-xs select-none">
            <div className="flex items-center gap-1.5">
              <span className="text-[14px]">✉</span>
              <span>Send Message - dialog.exe</span>
            </div>
            {/* Fake Controls */}
            <div className="flex items-center gap-1 flex-shrink-0">
              <div className="w-[18px] h-[18px] rounded bg-gradient-to-b from-[#7ca1e9] to-[#3b67c3] border border-[#0d2c6e] flex items-center justify-center font-bold text-[9px] text-white">_</div>
              <div className="w-[18px] h-[18px] rounded bg-gradient-to-b from-[#7ca1e9] to-[#3b67c3] border border-[#0d2c6e] flex items-center justify-center font-bold text-[9px] text-white">□</div>
              <div className="w-[18px] h-[18px] rounded bg-gradient-to-b from-[#f37a5a] to-[#c7321a] border border-[#7d1708] flex items-center justify-center font-bold text-[9px] text-white">X</div>
            </div>
          </div>

          {/* Dialog Header Content */}
          <div className="px-6 pt-6 text-left border-b border-white shadow-[inset_0_1px_0_#fff]">
            <h2 id="contact-title" className="text-xl font-bold text-[#002c91] font-sans">
              Let's Work Together
            </h2>
            <p className="mt-2 text-xs text-gray-700 leading-relaxed font-sans pb-4">
              Have a project in mind or want to collaborate? 
              Fill in your details below and click Send Message to connect.
            </p>
          </div>

          {/* Dialog Body / Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="bg-[#ece9d8] p-6 space-y-4 flex flex-col text-left shadow-[inset_1px_1px_0_#fff]">
            
            {/* Row 1: Name and Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label htmlFor="name" className="mb-1 text-xs font-bold text-gray-800 font-sans">Your Name:</label>
                <input
                  id="name"
                  {...register("name")}
                  type="text"
                  autoComplete="name"
                  required
                  className="xp-input h-10 px-3 py-2 text-sm font-sans"
                />
                {errors.name && <p className="text-red-600 text-[11px] font-sans mt-1">⚠️ {errors.name.message}</p>}
              </div>

              <div className="flex flex-col">
                <label htmlFor="email" className="mb-1 text-xs font-bold text-gray-800 font-sans">Email Address:</label>
                <input
                  id="email"
                  {...register("email")}
                  type="email"
                  autoComplete="email"
                  required
                  className="xp-input h-10 px-3 py-2 text-sm font-sans"
                />
                {errors.email && <p className="text-red-600 text-[11px] font-sans mt-1">⚠️ {errors.email.message}</p>}
              </div>
            </div>

            {/* Message Area */}
            <div className="flex flex-col">
              <label htmlFor="message" className="mb-1 text-xs font-bold text-gray-800 font-sans">Message:</label>
              <textarea
                rows={4}
                id="message"
                {...register("message")}
                required
                className="xp-input p-3 text-sm font-sans w-full resize-none"
              ></textarea>
              {errors.message && <p className="text-red-600 text-[11px] font-sans mt-1">⚠️ {errors.message.message}</p>}
            </div>

            {/* Bottom Form Actions */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-3 border-t border-[#d2cfc2] mt-4">
              
              {/* Server Msg Alert box */}
              <div className="flex-1 min-h-[20px]">
                {serverMsg.text && (
                  <div className={`border border-[#707070] px-3 py-1.5 text-xs font-sans rounded-sm bg-white ${serverMsg.ok ? "text-green-700 border-green-300" : "text-red-600 border-red-300"} flex items-center gap-1.5`}>
                    <span>{serverMsg.ok ? "✔️" : "❌"}</span>
                    <span>{serverMsg.text}</span>
                  </div>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="xp-btn-blue px-6 py-2 text-sm font-bold shadow-md hover:brightness-110 active:brightness-95 transition no-underline text-white h-10 min-w-[120px] shrink-0 inline-flex items-center justify-center cursor-pointer"
                style={{ borderRadius: "4px" }}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </div>
            
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;

