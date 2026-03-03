function FeatureVideos() {
    return (
        <section className="text-black">
            <h2 className="text-3xl font-bold mb-8 text-center">Featured Videos</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="rounded shadow-lg overflow-hidden">
                    <img src="..\src\assets\Flipkart.jpg" alt="YT 1" className="w-full" />
                    <div className="p-4">
                        <h3 className="font-bold text-xl mb-2">Web Development</h3>
                        <p className="text-black-400">Learn WebDevelopment step by step from scratch.</p>
                    </div>
                </div>

                <div className="rounded shadow-lg overflow-hidden">
                    <img src="..\src\assets\BMS.webp" alt="YT 2" className="w-full" />
                    <div className="p-4">
                        <h3 className="font-bold text-xl mb-2">Frontend Development</h3>
                        <p className="text-black-400">Create a Attrative Web Pages.</p>
                    </div>
                </div>

                <div className="rounded shadow-lg overflow-hidden">
                    <img src="..\src\assets\Pizza.jpg" alt="YT 3" className="w-full" />
                    <div className="p-4">
                        <h3 className="font-bold text-xl mb-2">UI Design</h3>
                        <p className="text-black-400">Create a UI Designs.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FeatureVideos;