import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1>Buy Airtime Anywhere in Africa</h1>
        <h1>Lipad</h1>
      </div>
      <div>
        <h1>Login to your account</h1>
        <form>
          <div className="flex flex-col mb-4">
            <label className="mb-2">Email/Username</label> <br />
            <input placeholder="username" required />
            <label className="mb-2">password</label> <br />
            <input placeholder="username" required />
            <button>Login to your dashboard</button>

            <p>Dont have a LIPAD account? Click here to <a href=""> sign up</a> </p>

          </div>
        </form>

      </div>
      <div>
        <h1>Register an account</h1>
        <form>
          <div className="flex flex-col mb-4">
            <label className="mb-2">Email/Username</label> <br />
            <input placeholder="username" required />
            <label className="mb-2">password</label> <br />
            <input placeholder="username" required />
            <button>Register account</button>

            <p>Do you have a LIPAD account? Click here to <a href=""> sign in</a> </p>

          </div>
        </form>

      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <div>
          <h2 className="text-4xl font-bold">Welcome to Lipad </h2>
        </div>
      </div>
    </main>
  );
}
