"use client";
import Image from "next/image";

interface FormLinkProps {
  name: string;
  href: string;
  clr?: string;
  subtext?: string;
  img?: string;
  children?: any;
}

const FormCard = ({ name, href, img, subtext }: FormLinkProps) => {
  return (
    <article className="flex">
      <div className="w-52 bg-red-500 bg-opacity-50 rounded-2xl shadow-lg p-6 border-2 border-yellow-600">
        <div className="flex flex-col items-center">
          <div
            className={`bg-opacity-70 h-36 w-36 mb-4 flex items-center justify-center rounded-full dark:bg-violet-400`}
          >
            <Image
              src={img ? img : "/logo.jpg"}
              alt=""
              width={175}
              height={175}
              className="object-cover object-center w-full rounded-full"
            />
          </div>
          <h2 className="text-xl font-semibold font-pixelify ">{name}</h2>
          <p className="text-white text-center">
            {subtext ? subtext : "To learn about DAOs"}
          </p>
          <div className="flex flex-col justify-between p-2 space-y-2">
            <a href={href} target="_blank" rel="noopener noreferrer">
              <button
                type="button"
                className="flex items-center justify-center w-full p-3 font-semibold tracki rounded-md dark:bg-violet-400 text-white shadow-lg"
              >
                Apply
              </button>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};

const Forms = () => {
  const forms: FormLinkProps[] = [
    {
      name: "Beginner",
      subtext: "To learn about DAOs",
      href: "https://tally.so/r/w8Zq0l",
      img: "/noob.png",
      clr: "red",
    },
    {
      name: "Summoner",
      subtext: "To accelerate your DAO",
      href: "https://tally.so/r/3l6BJo",
      img: "/builder.png",
      clr: "blue",
    },
    {
      name: "Veteran",
      subtext: "To pass on wisdom",
      img: "/veteran.png",
      href: "https://tally.so/r/mJlYzR",
      clr: "green",
    },
  ];
  return (
    <div className="max-w-screen flex flex-col mt-20 justify-center mb-60">
      <span className="flex text-4xl justify-center my-10 font-pixelify">
        Sign up as...
      </span>
      <div className="flex flex-row space-x-20 justify-left md:justify-center p-6 overflow-x-auto">
        {forms.map((form, index) => (
          <FormCard
            key={index}
            name={form.name}
            href={form.href}
            img={form.img}
            clr={form.clr}
            subtext={form.subtext}
          />
        ))}
      </div>

      <span className="flex text-4xl justify-center my-10 font-pixelify">
        Then jump in:{" "}
      </span>
      <div className="flex flex-row space-x-6 justify-center m-4 transition-transform hover:translate-x-2 hover:-translate-y-2">
        <a
          href="https://t.me/daocember"
          target="_blank"
          rel="noopener noreferrer"
          title="Telegram"
        >
          <Image
            src="/tg_logo_yellow.jpg"
            alt="Telegram"
            width={50}
            height={50}
            className="object-cover object-center w-full rounded-t-m drop-shadow-2xl"
          />
        </a>
      </div>
    </div>
  );
};

export default Forms;
