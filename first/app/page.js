import { submitAction } from "./actions/form";
export default function Home() {
 
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-900 p-6">
      <div className="w-full max-w-md rounded-2xl bg-slate-800 p-8 shadow-xl border border-slate-700">
        <h2 className="mb-6 text-2xl font-bold text-white text-center">Contact Information</h2>

        <form className="space-y-5" action={submitAction}>
          <div>
            <label htmlFor="Name" className="block text-sm font-semibold text-slate-200 mb-2">
              Name
            </label>
            <input
              type="text"
              name="Name"
              id="Name"
              placeholder="John Doe"
              className="w-full rounded-lg border border-slate-600 bg-slate-700 px-4 py-2.5 text-white placeholder-slate-400 outline-none transition focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20"
            />
          </div>

          <div>
            <label htmlFor="ADD" className="block text-sm font-semibold text-slate-200 mb-2">
              Address
            </label>
            <input
              type="text"
              name="ADD"
              id="ADD"
              placeholder="123 Main St"
              className="w-full rounded-lg border border-slate-600 bg-slate-700 px-4 py-2.5 text-white placeholder-slate-400 outline-none transition focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full rounded-lg bg-amber-400 px-4 py-3 font-bold text-slate-900 transition hover:bg-amber-300 active:scale-[0.98]"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
