const HeroSection = () => {

    return (
        <section className="w-full mt-[100px] box-border px-4 py-4 md:px-8 lg:px-20 mb-4">
            <div className="flex flex-col text-center max-w-screen-4xl mx-auto md:flex-row items-center md:items-end justify-between gap-8 md:text-left" > 
                <div className = "md:max-w-2xl">
                    <h1>Hey, I am Birkhe!</h1>
                    <h2 className = "text-4xl mt-8">Web Developer</h2>
                    <p className = "text-2xl mt-8 text-slate-500 text-justify ">This is some text.I'm a passionate developer who loves creating beautiful, functional web experiences. With expertise in modern web technologies, I bring ideas to life through clean code and thoughtful design. Currently exploring the intersection of AI and user experience.</p>
                </div>
            <div className="bg-[url('/images/portfolio.png')] w-70 h-70 md:w-80 md:h-80 lg:w-92 lg:w-92 bg-cover bg-center flex-shrink-0 rounded-xl py-8"></div>
            </div>
        </section>
    );
}

export default HeroSection;