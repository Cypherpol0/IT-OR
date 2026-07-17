export const Intro = () => {
  return (
    <section className="relative flex items-center justify-center min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <img src="../Intro.jpg" alt="Intro Image" 
             className="w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background"></div>
      </div>

      <div>
        {[...Array(30)].map((_, index) => (
          <div className= "absolute w-1.5 h-1.5 rounded-full opacity-60"
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
            <div>
              <h1>
                <span> Create </span>, <span> Design </span>, and <span className="text-accent">Develop</span>
                <br/>
                interactive web applications that 
                <br/>
                leave a lasting impression.
              </h1>
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