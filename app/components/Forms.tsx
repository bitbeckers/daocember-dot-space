import Image from "next/image";

interface FormLinkProps {
  name: string;
  href: string;
  key: number;
  children?: any;
}

const FormLink = ({ name, href, key }: FormLinkProps) => {
  const handleClick = (e: any) => {
    e.preventDefault();
    console.log("The link was clicked.");
    // Open href in new tab
    window.open(href, "_blank");
  };

  return (
    <div
      className="w-60 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100"
      key={key}
    >
      <Image
        src="/logo.jpg"
        alt=""
        width={150}
        height={150}
        className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
      />
      <div className="flex flex-col justify-between p-6 space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold tracki">{name}</h2>
          <p className="dark:text-gray-100">
            Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.
          </p>
        </div>
        <button
          onClick={handleClick}
          type="button"
          className="flex items-center justify-center w-full p-3 font-semibold tracki rounded-md dark:bg-violet-400 dark:text-gray-900"
        >
          Apply
        </button>
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
    <div className="max-w-screen flex flex-row space-x-4 mt-10 justify-center">
      {forms.map((t, i) => (
        <FormLink key={i} name={t.name} href={t.href} />
      ))}
    </div>
  );
};

export default Forms;
