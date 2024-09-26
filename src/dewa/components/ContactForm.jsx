import React from 'react'

export default function ContactForm() {
    return (
        <div className="flex-1 bg-black text-white p-8 w-[60vw]">
          <h2 className="text-3xl font-bold mb-6">Describe your project and leave us your contact info</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <input className="w-full bg-transparent border-b border-gray-500 py-2 mb-4" placeholder="Your Name" />
              <input className="w-full bg-transparent border-b border-gray-500 py-2 mb-4" placeholder="Your Address" />
              <input className="w-full bg-transparent border-b border-gray-500 py-2 mb-4" placeholder="When do you want to start?" />
            </div>
            <div>
              <input className="w-full bg-transparent border-b border-gray-500 py-2 mb-4" placeholder="Your Email" />
              <input className="w-full bg-transparent border-b border-gray-500 py-2 mb-4" placeholder="Your Company" />
              <select className="w-full bg-transparent border-b border-gray-500 py-2 mb-4">
                <option>What your Budget</option>
              </select>
            </div>
            <div className="flex flex-1 flex-col bg-gray-800 text-white p-8">
                <h2 className="text-xl font-bold">Genox Studio</h2>
                <p>119 W 24th Street</p>
                <p>4th New York, USA</p>
                <p>+1 917 330 3116</p>
                <p>hello@this.work.com</p>
                <button className="mt-auto bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Get Directions</button>
            </div>
          </div>
          <textarea className="w-full bg-transparent border-b border-gray-500 py-2 mb-4" placeholder="Briefly tell us about your project." />
          <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">Send Message</button>
        </div>
      );
}
