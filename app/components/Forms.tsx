import Image from "next/image";

interface FormLinkProps {
  name: string;
  href: string;
  children?: any;
}

const FormCard = ({ name, href }: FormLinkProps) => {
  const handleClick = (e: any) => {
    e.preventDefault();
    console.log("The link was clicked.");
    // Open href in new tab
    window.open(href, "_blank");
  };

  return (
    <div className="flex max-w-sm">
      <div className="bg-red-500 bg-opacity-50 rounded-lg shadow-lg p-6">
        <div className="flex flex-col items-center">
          <div className="bg-white bg-opacity-50 rounded-full h-24 w-24 mb-4 flex items-center justify-center">
            <Image
              src="/logo.jpg"
              alt=""
              width={150}
              height={150}
              className="object-cover object-center w-full rounded-t-md dark:bg-gray-500"
            />
          </div>
          <h2 className="text-xl font-semibold tracki">{name}</h2>
          <p className="text-white text-center">To learn about DAOs</p>
          <div className="flex flex-col justify-between p-2 space-y-2">
            <button
              onClick={handleClick}
              type="button"
              className="flex items-center justify-center w-full p-3 font-semibold tracki rounded-md dark:bg-violet-400 dark:text-gray-900"
            >
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Forms = () => {
  const forms = [
    {
      name: "DAO Apprentice",
      href: "https://tally.so/r/w8Zq0l",
    },
    {
      name: "DAO Builder",
      href: "https://tally.so/r/w8Zq0l",
    },
    {
      name: "DAO Veteran",
      href: "https://tally.so/r/mJlYzR",
    },
  ];
  return (
    <div className="max-w-screen flex flex-col mt-10 justify-center mb-60">
      <span className="flex text-3xl justify-center mb-10">Sign up as...</span>
      <div className="flex flex-row space-x-6 justify-center">
        {forms.map((t, i) => (
          <FormCard key={i} name={t.name} href={t.href} />
        ))}
      </div>
    </div>
  );
};

export default Forms;
