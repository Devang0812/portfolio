import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";




const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_qpfolwg"; //  service ID
    const templateId = "template_qtaj5fb"; //  template ID
    const userId = "Yhfo3hzSbHvzC6N4K"; //  user ID

    let name;
    let email;
    let message;

    if (form.name.length > 3 && !/\d/.test(form.name)) {
      name = form.name;
      if (/^[\w.-]+@[a-zA-Z\d.-]+\.com$/.test(form.email)) {
        email = form.email;
        if (form.message.length >= 10) {
          message = form.message
          setLoading(true);
          emailjs
            .send(
              serviceId,
              templateId,
              {
                from_name: name, 
                from_email: email,
                to_email: "devangsingh87262@gmail.com",
                message: message,
              },
              userId
            )
            .then(
              () => {
                setLoading(false);
                alert("Thank you. I will get back to you as soon as possible.");

              
                setForm({
                  name: "",
                  email: "",
                  message: "",
                });
              },
              (error) => {
                setLoading(false);
                console.error(error);
                alert("Ahh, something went wrong. Please try again.");
              }
            );
        } else {
          alert("Please enter a valid name at least 10 characters in meaasge")
        }
      } else {
        alert("Please enter a valid email ending with .com");
      }
    } else {
      alert("Please enter a valid name (at least 4 characters and no numbers).");
    }
  };


  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your mail address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");