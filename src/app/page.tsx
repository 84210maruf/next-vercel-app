import React from 'react'

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center p-4">
      <h1 key="home-title" className="text-4xl font-bold mb-4">Home</h1>
      <p className="text-lg mb-8">Welcome to my portfolio</p>
      <section className="mb-8">
      <h2 className="text-3xl font-semibold mb-2">About Me</h2>
      <p className="text-base">Hi, I'm [Your Name], a passionate developer with experience in [Your Skills].</p>
      </section>
      <section className="mb-8">
      <h2 className="text-3xl font-semibold mb-2">Projects</h2>
      <ul className="list-disc list-inside">
        <li className="mb-4">
        <h3 className="text-2xl font-medium">Project 1</h3>
        <p className="text-base">Description of project 1.</p>
        </li>
        <li className="mb-4">
        <h3 className="text-2xl font-medium">Project 2</h3>
        <p className="text-base">Description of project 2.</p>
        </li>
        <li className="mb-4">
        <h3 className="text-2xl font-medium">Project 3</h3>
        <p className="text-base">Description of project 3.</p>
        </li>
      </ul>
      </section>
      <section>
      <h2 className="text-3xl font-semibold mb-2">Contact</h2>
      <p className="text-base">You can reach me at [Your Email].</p>
      </section>
    </div>
  )
}
