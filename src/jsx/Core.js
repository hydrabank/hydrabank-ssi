import "./css/Core.css";

const match = {
  69: {
    tagline: "Nice.",
    message: "😼😼😼😼",
  },
  200: {
    tagline: "OK.",
    message: "How the hell did you get this as an error?!?!?!"
  },
  400: {
    tagline: "Bad Request",
    message: "The server reported a user-side error! 😱 Try to fix certain variables in your request 🧮, or check that your request is valid ✅. Otherwise, contact the webmaster 🧑.",
  },
  401: {
    tagline: "Unauthenticated Access?",
    message: "You are not authorized to access this page! 🤔 You're probably not authenticated 🗳️, so log in first 🔐, or contact the webmaster for further assistance 🧑.",
  },
  403: {
    tagline: "Forbidden (Access Denied)",
    message: "You are not authorized to access this page! 😱 You probably don't have access to this service ❌, so contact the webmaster for further assistance 🧑.",
  },
  404: {
    tagline: "Not Found",
    message: "The page that you were looking for wasn't found. 🤔 Maybe you've mistyped the address 🌎, or perhaps the page 💻 was moved? 🤔"
  },
  418: {
    tagline: "I'm a teapot",
    message: "I'm a teapot 🫖. That's all there is to it."
  },
  420: {
    tagline: "Calming. Nice.",
    message: "The server could be under heavy load 🔥, or maybe it's having a quick break for relaxation 🛀. Please try again in a few minutes 🕑. If the problem persists, contact the webmaster 🧑."
  },
  500: {
    tagline: "Internal Server Error",
    message: "The server reported an error within itself! 😱 Ensure that your request is valid ✅. If it is, and the error still occurs, contact the webmaster for further assistance 🧑.",
  },
  502: {
    tagline: "Bad Gateway",
    message: "CrossGuard reported that the response from the gateway was invalid! 😱 This usually means that CrossGuard isn't configured with the address that you're trying to get to 😕. Contact the webmaster 🧑 for further assistance.",
  },
  503: {
    tagline: "Service Unavailable",
    message: "CrossGuard reported that the service is unavailable! 😱 The server that CrossGuard is trying to connect to is probably offline 🔌. Contact the webmaster 🧑 for further assistance.",
  },
  504: {
    tagline: "Gateway Timeout",
    message: "CrossGuard reported that the gateway timed out! 😱 This is probably an issue with the software that the website's server uses ⚠️. Contact the webmaster 🧑 for further assistance.",
  }
};

function App() {
  const statusCode = window.SSI.variables.statusCode;
  if (!match[statusCode]) match[statusCode] = {
    tagline: "Unknown Error",
    message: "The server reported an error that CrossGuard was unable to identify! 😱 Not to worry, though! 😊 Just contact the webmaster 🧑 in order to find out the meaning of the error.",
  };
  return (
      <div>
      <div className="h-screen w-screen flex justify-center content-center md:content-end flex-col gap-y-6 flex-wrap bg-gradient-to-r from-sky-300 via-sky-500 to-blue-700">
        <div className="flex flex-row">
          <div className="px-10 py-10 bg-gray-900 rounded-3xl mx-16 sm:mx-32 flex flex-col gap-y-2 flex-wrap content-end lg:w-[48rem]">
            <h1 className="font-bold font-BreezeHeader text-2xl text-white text-right">Error: <span className="font-BreezeMono">{statusCode}</span> - {match[statusCode].tagline}</h1>
            <p className="font-medium font-BreezeText text-md sm:text-lg md:text-xl text-white text-right break-words">
                {match[statusCode].message}
            </p>
            <hr className="my-4" />
            <p className="font-medium font-BreezeText text-md sm:text-lg text-white text-right break-words">
              <p className="font-BreezeHeader font-bold text-white">If you encounter an issue or a site in violation of our Terms of Service, contact the maintainers of CrossGuard at <a href="mailto:link@hydrabank.systems" rel="noreferrer noopener" target="_blank" className="text-blue-300">link@hydrabank.systems</a>.</p>
            </p>
          </div>
        </div> 
      </div>

      <div className="absolute bottom-0 left-0 px-8 py-6">
        <a href="https://hydrabank.systems" target="_blank" rel="noreferrer">
          <img src="/HBWaveSquare.png" width="64px" alt="Wave" />
        </a>
      </div>
    </div>
  );
}

export default App;
