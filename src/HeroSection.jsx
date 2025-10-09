const HeroSection = () => {

    return (
        <div className="flex border-red-200 border-2 items-start mt-[50px] justify-center box-border w-screen px-4 py-4 items-center">
            <div>
                <div>Hey, I am Birkhe!</div>
                <div className = "text-4xl mt-8">Web Developer</div>
                <div className = "text-2xl mt-8 text-slate-500 w-[500px] text-justify ">This is some text.I'm a passionate developer who loves creating beautiful, functional web experiences. With expertise in modern web technologies, I bring ideas to life through clean code and thoughtful design. Currently exploring the intersection of AI and user experience.</div>
            </div>
            <div className="bg-[url('https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg')] w-64 h-64 bg-cover"></div>
        </div>
    );
}

export default HeroSection;