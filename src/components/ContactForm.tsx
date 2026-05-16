import { useState } from "react";
import type { CSSProperties } from "react";
import { useToast } from "@/hooks/use-toast";

const inputClass =
  "w-full rounded-lg px-4 py-3 font-body text-sm outline-none transition-opacity focus:opacity-100 placeholder:text-white/35";

const inputStyle: CSSProperties = {
  background: "rgba(18, 34, 59, 0.35)",
  backdropFilter: "blur(20px)",
  WebkitBackdropFilter: "blur(20px)",
  border: "0.5px solid rgba(255, 255, 255, 0.12)",
  color: "hsl(33, 30%, 90%)",
};

const ContactForm = () => {
  const { toast } = useToast();
  const [agreed, setAgreed] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) {
      toast({
        title: "Demo acknowledgement",
        description: "Privacy checkbox required — swap messaging when policies go live.",
        variant: "destructive",
      });
      return;
    }
    if (!form.firstName || !form.email || !form.phone) {
      toast({
        title: "Validation",
        description: "Demo form wants first name, email, and phone filled.",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Demo submit recorded",
      description: "Nothing leaves the browser — hook your API next.",
    });
    setForm({
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      phone: "",
      message: "",
    });
    setAgreed(false);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          name="firstName"
          value={form.firstName}
          onChange={handleChange}
          placeholder="First name *"
          className={inputClass}
          style={inputStyle}
          autoComplete="given-name"
        />
        <input
          name="lastName"
          value={form.lastName}
          onChange={handleChange}
          placeholder="Last name"
          className={inputClass}
          style={inputStyle}
          autoComplete="family-name"
        />
      </div>
      <input
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email *"
        className={inputClass}
        style={inputStyle}
        autoComplete="email"
      />
      <input
        name="company"
        value={form.company}
        onChange={handleChange}
        placeholder="Company"
        className={inputClass}
        style={inputStyle}
        autoComplete="organization"
      />
      <input
        name="phone"
        type="tel"
        value={form.phone}
        onChange={handleChange}
        placeholder="Phone *"
        className={inputClass}
        style={inputStyle}
        autoComplete="tel"
      />
      <textarea
        name="message"
        value={form.message}
        onChange={handleChange}
        placeholder="Message"
        rows={5}
        className={`${inputClass} resize-y min-h-[120px]`}
        style={inputStyle}
      />
      <label className="flex items-start gap-3 cursor-pointer select-none">
        <input
          type="checkbox"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
          className="mt-1 rounded border-white/20 bg-white/5"
        />
        <span className="font-body text-xs leading-relaxed text-white/55">
          I acknowledge this checkbox demo ties to a pretend Privacy Policy link.
        </span>
      </label>
      <button
        type="submit"
        className="mt-2 font-body text-xs tracking-[0.2em] uppercase py-4 rounded-lg transition-opacity hover:opacity-90"
        style={{
          background: "linear-gradient(135deg, rgba(153,153,153,0.35), rgba(179,151,86,0.45))",
          border: "0.5px solid rgba(255,255,255,0.15)",
          color: "hsl(33, 30%, 96%)",
        }}
      >
        Send message
      </button>
    </form>
  );
};

export default ContactForm;
