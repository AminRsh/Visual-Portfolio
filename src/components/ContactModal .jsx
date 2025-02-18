
import { useRef, useState } from 'react';
import {
    Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle
} from "../components/components/ui/dialog"
import { Input } from "./components/ui/input"
import { Label } from "./components/ui/label"
import { Textarea } from "./components/ui/textarea"
import emailjs from "@emailjs/browser"
import { toast } from 'react-toastify';

emailjs.init(import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY);


export function ContactModal({ isOpen, onClose }) {

    const formRef = useRef();
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [loading, setLoading] = useState(false);

    const handleChange = ({ target: { name, value } }) => {
        setForm({ ...form, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .send(
                import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,

                {
                    from_name: form.name,
                    to_name: "Nc",
                    from_email: form.email,
                    to_email: "Ensieh.lali@gmail.com",
                    message: form.message,
                },
                import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
            )
            .then(
                () => {
                    setLoading(false);
                    toast.success("Thank you for your message  🎉", {
                        position: "bottom-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                    setTimeout(() => {
                        setForm({ name: "", email: "", message: "" });
                        onClose(); 
                    }, 3000);
                },
                (error) => {
                    setLoading(false);
                    console.error(error);
                    toast.error("Failed to send message. Please try again.", {
                        position: "bottom-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                }
            );
    };


    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Let&apos;s talk</DialogTitle>
                    <DialogDescription>
                        Need a new design, brand refresh, or creative touch? I’ll bring your vision to life.
                    </DialogDescription>
                </DialogHeader>
                <form ref={formRef} onSubmit={handleSubmit}>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="email" className="text-right">Email</Label>
                            <Input id="email" name="email" placeholder="ex., Johndoe@gmail.com" className="col-span-3" required onChange={handleChange} value={form.email} />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">Name</Label>
                            <Input id="name" name="name" placeholder="ex., John Doe" className="col-span-3" required onChange={handleChange} value={form.name} />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="message" className="text-right">Note</Label>
                            <Textarea id="message" name="message" placeholder="Share your thoughts or inquires..." className="col-span-3" required onChange={handleChange} value={form.message} />
                        </div>
                    </div>
                    <DialogFooter>
                        <button type="submit" className="cursor-pointer rounded-full bg-violet-50 px-[12px] py-[6px] text-sm text-black" disabled={loading}>
                            {loading ? "Sending..." : "Send Message"}                        
                        </button>
                    </DialogFooter>
                </form>

            </DialogContent>
        </Dialog>
    )
}

export default ContactModal 