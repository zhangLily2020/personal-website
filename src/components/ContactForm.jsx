/* eslint-disable react/no-unescaped-entities */
import { useState } from "react"
import emailjs from "@emailjs/browser"
import { Toaster, toast } from 'react-hot-toast';
import {motion} from "framer-motion"

const ContactForm = () => {
        const [formData, setFormData] = useState({
            name: "",
            email: "",
            message: "",
        })
        const [errors, setErrors] = useState({});
        const [isSending, setIsSending] = useState(false);
        const handleChange = (e) => {
            const{name, value} = e.target;
            setFormData({
                ...formData,
                [name]: value,
            })
        }

        const validate = () => {
            let errors = {};
            if(!formData.name) errors.name = "Name is required";
            if(!formData.email) {
                errors.email = "Email is required";
            } else if(!/\S+@\S+\.\S+/.test(formData.email)) {
                errors.email = "Email is invalid";
            }
            if (!formData.message) errors.message = "Message is required";
            return errors;
        }

        const handleSubmit = (e) => {
            e.preventDefault();
            const validationErrors = validate();
            if (Object.keys(validationErrors).length > 0) {
                setErrors(validationErrors);
            } else {
                setErrors({});
                setIsSending(true);

                emailjs
                    .send(
                        "service_ucmslwj",
                        "template_rbehihi",
                        formData,
                        "blNXsEkFgPGtVCIc2"
                    )
                    .then((response) => {
                        console.log("SUCCESS!", response.status, response.text);
                        toast.success("Message sent successfully!");
                        setFormData({name:"", email: "", message: "" });
                    })
                    .catch((error) => {
                        console.log("FAILED...", error);
                        toast.error("Failed to send the message. Please try again later.");
                    })
                    .finally(() => {
                        setIsSending(false);
                    })

            }
        }
    return (
        <div className="mx-auto max-w-3xl p-4">
            <Toaster />
            <div className="flex justify-center mb-14">
                <motion.h2 id="contact"
                    initial={{opacity:0, y:-20}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration:0.5}}
                    viewport={{once:true}}
                    className="mt-16 text-center text-4xl font-semibold ">
                    LET'S CONNECT
                    <div className=" h-1.5 min-w-full bg-teal-400"></div>
                </motion.h2> 
            </div>
            
            <motion.form 
                initial ={{opacity:0}}
                whileInView={{opacity:1}}
                transition={{duration:0.8, delay:0.5}}
                viewport={{once: true}}
                onSubmit={handleSubmit}>
                <div className="mb-4">
                    <input type = "text"
                        id= "name"
                        name = "name"
                        value= {formData.name}
                        placeholder="Name"
                        onChange = {handleChange}
                        className="mb-8 w-full appearance-none rounded-lg border-2 border-gray-700 bg-transparent px-3 py-2 
                        text-sm focus:border-gray-400 focus:outline-none"/>
                        {errors.name && (
                            <motion.p 
                            initial={{opacity: 0}}
                            whileInView={{opacity:1}}
                            viewport={{once: true}}
                            aria-live="polite"
                            className="text-sm text-pink-700">{errors.name}</motion.p>
                        )}
                </div>
                <div className="mb-4">
                    <input type = "email"
                        id= "email"
                        name = "email"
                        value= {formData.email}
                        placeholder="Email"
                        onChange = {handleChange}
                        className="mb-8 w-full appearance-none rounded-lg border-2 border-gray-700 bg-transparent px-3 py-2 
                        text-sm focus:border-gray-400 focus:outline-none"/>
                        {errors.email && (
                            <motion.p 
                            initial={{opacity: 0}}
                            whileInView={{opacity:1}}
                            aria-live="polite"
                            className="text-sm text-pink-700">{errors.email}</motion.p>
                        )}
                </div>
                <div className="mb-4">
                    <textarea
                        id= "message"
                        name = "message"
                        value= {formData.message}
                        placeholder="Message"
                        onChange = {handleChange}
                        className="mb-8 w-full appearance-none rounded-lg border-2 border-gray-700 bg-transparent px-3 py-2 
                        text-sm focus:border-gray-400 focus:outline-none" rows="4"/>
                        {errors.message && (
                            <motion.p initial={{opacity: 0}}
                            whileInView={{opacity:1}}
                            aria-live="polite"
                            className="text-sm text-pink-700">{errors.message}</motion.p>
                        )}
                </div>
                <button type="submit" className={`mb-8 w-full rounded bg-teal-600 px-4 py-2 text-sm font-semibold text-white hover:bg-teal-500 ${isSending ? "cursor-not-allowed opacity-50" : ""}`} 
                disabled={isSending}>
                    {isSending ? "Sending..." : "Send"}
                </button>

            </motion.form>
        </div>
    )
}

export default ContactForm