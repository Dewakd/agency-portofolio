import React from 'react'

export default function ContactInfo() {
    return (
        <div className="flex flex-1 flex-col bg-gray-800 text-white p-8">
          <h2 className="text-xl font-bold">Genox Studio</h2>
          <p>119 W 24th Street</p>
          <p>4th New York, USA</p>
          <p>+1 917 330 3116</p>
          <p>hello@this.work.com</p>
          <button className="mt-auto bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Get Directions</button>
        </div>
      );
}
