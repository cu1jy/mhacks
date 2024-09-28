import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-gray-100">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex gap-4 items-center flex-col sm:flex-col">
          <h2 className="text-xl font-semibold text-black">Login</h2>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center bg-blue-800 hover:bg-[#f2f2f2] dark:hover:bg-blue-500 hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="/home"
            rel="noopener noreferrer"
          >
            Student
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center bg-blue-800 hover:bg-[#f2f2f2] dark:hover:bg-blue-500 hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="/login"
            rel="noopener noreferrer"
          >
            RA
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center bg-blue-800 hover:bg-[#f2f2f2] dark:hover:bg-blue-500 hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="/login"
            rel="noopener noreferrer"
          >
            Admin
          </a>
        </div>
      </main>
    </div>
  );
}
