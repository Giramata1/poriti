"use client";

import { useForm, SubmitHandler } from 'react-hook-form';
import { motion } from 'framer-motion';

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactSection() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactForm>({
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit: SubmitHandler<ContactForm> = async (data) => {
    try {
      console.log('Submitting form data:', data);

      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('email', data.email);
      formData.append('subject', data.subject);
      formData.append('message', data.message);

      const response = await fetch('https://formspree.io/f/xgvyayre', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      });

      if (response.ok) {
        reset();
        alert('Message sent successfully!');
      } else {
        const errorData = await response.json();
        alert(errorData.message || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form', error);
      alert('Failed to send message. Please try again.');
    }
  };

  return (
    <section id="contact" className="py-20 flex items-center justify-center p-6 bg-white dark:bg-gray-900 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white relative">
          Contact Me
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-blue-600 dark:bg-blue-400"></span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-xl mx-auto text-center">
          Interested in working together? I&apos;d love to hear from you!
        </p>
        <div className="flex flex-col md:flex-row gap-12 mt-8">
          <div className="md:w-3/5">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Get In Touch</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
                    Full Name
                  </label>
                  <input
                    {...register('name', { required: 'Name is required' })}
                    id="name"
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="NZASINGIZIMANA Jean Bonheur"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
                    Email Address
                  </label>
                  <input
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                        message: 'Invalid email address',
                      },
                    })}
                    id="email"
                    type="email"
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="leatusbonheur@gmail.com"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
                  Subject
                </label>
                <input
                  {...register('subject', { required: 'Subject is required' })}
                  id="subject"
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Software Development Opportunity"
                />
                {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>}
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
                  Message
                </label>
                <textarea
                  {...register('message', { required: 'Message is required' })}
                  id="message"
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                  rows={5}
                  placeholder="Tell me about your project or opportunity ..."
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition duration-300 shadow-md"
              >
                Send Message
              </motion.button>
            </form>
          </div>
          <div className="md:w-2/5">
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Contact Information</h3>
              <address className="space-y-6 not-italic">
                <div className="flex items-start">
                  <div className="bg-blue-600 p-3 rounded-full text-white mr-4">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white">Email</h4>
                    <a href="mailto:leatusbonheur@gmail.com" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors">
                      leatusbonheur@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-600 p-3 rounded-full text-white mr-4">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white">Phone</h4>
                    <p className="text-gray-600 dark:text-gray-300">+250 791 467 695</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-600 p-3 rounded-full text-white mr-4">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white">Location</h4>
                    <p className="text-gray-600 dark:text-gray-300">Kigali, Rwanda</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-600 p-3 rounded-full text-white mr-4">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z" />
                      <path d="M10 8a1 1 0 00-1 1v2a1 1 0 002 0V9a1 1 0 00-1-1z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white">Availability</h4>
                    <p className="text-gray-600 dark:text-gray-300">Open for full-time, internship, or contract</p>
                  </div>
                </div>
              </address>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}