export const Intro = () => {
  return (
    <section className="relative flex items-center justify-center min-h-screen overflow-hidden min-w-screen">
      <div className="absolute inset-0">
        <img src="../Intro.jpg" alt="Intro Image" 
             className="w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background"></div>
      </div>

      <div>
        {[...Array(30)].map((_, index) => (
          <div className= "absolute w-1.5 h-1.5 rounded-full opacity-70"
          style={{
            backgroundColor: "#D4D4D4",
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation:`slow-drift ${Math.random() * 20}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`,
          }} />
        ))}
      </div>

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/*Left Column*/}
          <div className="space-y-8">

            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="font-bold bg-primary rounded-full w-2 h-2 animate-pulse"/>
                Software Engineer  •  Web Developer
              </span>
            </div>

            <div classname="space-y-4">
              <h1 classname="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-200">
                <span className="text-primary glow-text">Create</span>, <span className="text-primary italic text-cyan-400">Design</span>, and <span className="font-serif font-bold">Develop</span>
              </h1>
              <p className="text-lg text-gray-200 max-w-lg animate-fade-in animation-delay-400">
                interactive web applications that 
                <br/>
                leave a lasting impression.
              </p>
            </div>

          </div>

          {/*Right Column*/}
          <div>

            <div className="animate-fade-in">
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}