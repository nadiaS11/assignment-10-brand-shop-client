import { toast } from "react-toastify";

const Newsletter = () => {
  const handleEmail = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;

    const newEmail = {
      email,
    };
    console.log("product added", newEmail);

    fetch("https://brand-shop-server-ten.vercel.app/emails", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newEmail),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast("Successfully subscribed to newsletter.");
        }
      });
  };

  return (
    <div className="mx-auto my-20 flex max-w-xs flex-col rounded-2xl border bg-black px-4 py-4 shadow-lg sm:max-w-lg sm:flex-row">
      <div className="sm:mr-6">
        <img
          className="h-[13rem] w-full rounded-2xl object-fit  sm:w-56"
          src="./logo2.png"
          alt=""
        />
      </div>
      <div className="py-8 pr-8">
        <p className="text-xl font-medium text-gray-500">
          Subscribe to Newsletter
        </p>
        <p className="mb-4 text-gray-300">Never miss any updates</p>
        <form onSubmit={handleEmail} className="space-y-6">
          <div className="flex">
            <div className="mr-1 w-full">
              <input
                type="email"
                name="email"
                className="placeholder:text-gray-400 h-12 w-full rounded-md bg-gray-200 px-4 font-medium focus:outline-none focus:ring-1 focus:ring-blue-600"
                placeholder="Enter your email"
              />
            </div>

            <button
              type="submit"
              className="shrink-0 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-600 text-white hover:bg-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6"
              >
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
