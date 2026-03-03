function Subscribe() {
    return (
      <section className="py-20 px-5 bg-black text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Subscribe to MyChannel
        </h2>
        <p className="text-gray-400 mb-6 text-base md:text-lg">
          Get the latest tutorials, projects, and updates directly in your inbox.
        </p>
  
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:flex-1 px-4 py-3 rounded-lg text-black focus:outline-none"
          />
          <button className="w-full sm:w-auto bg-red-600 px-6 py-3 rounded-lg text-lg hover:scale-105 hover:bg-red-700 transition transform">
            Subscribe
          </button>
        </div>
      </section>
    );
  }
  
  export default Subscribe;