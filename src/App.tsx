import Lightning from "./components/bg-lights";

function App() {
  return (
    <>
      <div className="w-full h-screen relative flex items-center justify-center">
        <Lightning hue={210} speed={0.2} intensity={0.2} size={1.5} xOffset={0}/>
        <div className="flex flex-col items-center justify-center text-center absolute z-10">
          <img src="/ess-logo.svg" alt="Essence Logo" className="w-22 h-22 hover:scale-110 transition duration-200 hover:rotate-45" />
          <p className="text-5xl font-semibold text-white mt-6 uppercase">Development stage</p>
          <p className="text-white mt-20"> 
            receiving demos at
          </p>
          <a href="mailto:demos@essencelabel.com.ar" className="text-white underline underline-offset-4">demos@essencelabel.com.ar</a>
        </div>
      </div>
    </>
  )
}

export default App
