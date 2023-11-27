import fs from "fs";
import path from "path";
import axios from "axios";

type People = {
  name: string;
  image: string;
  twitter: string;
};

const downloadImage = async (
  imageUrl: string,
  fileName: string
): Promise<string> => {
  const response = await axios.get(imageUrl, { responseType: "arraybuffer" });

  const fileExtension = imageUrl.split("?")[0].split(".").pop();

  const relativePath = `/public/avatars/${fileName}.${fileExtension}`;
  fs.writeFileSync(
    path.join(path.resolve(), relativePath),
    Buffer.from(response.data)
  );

  console.log(`Downloaded ${fileName}`);

  return relativePath;
};

const extractTwitterHandle = (twitterUrl: string): string =>
  (twitterUrl.split("/").pop() || "").toLocaleLowerCase();

const main = async (dataFile: string) => {
  console.log("Downloading and updating resource file:", dataFile);

  try {
    const jsonString = fs.readFileSync(dataFile, "utf-8");
    const people: People[] = JSON.parse(jsonString);

    const updatePeople = people.map(async (p) => {
      if (p.image.startsWith("http") && p.twitter.length > 0) {
        const newFile = await downloadImage(
          p.image,
          extractTwitterHandle(p.twitter)
        );

        return {
          ...p,
          image: newFile,
        };
      } else {
        console.log(`Skipping ${p.name}`);
        return p;
      }
    });

    const newData = await Promise.all(updatePeople);
    fs.writeFileSync(jsonFilePath, JSON.stringify(newData, null, 2));

    console.log("All images downloaded successfully!");
  } catch (error) {
    console.error("Error downloading images:", error);
  }
};

const jsonFilePath = process.argv[2];

if (!jsonFilePath) {
  console.error(
    "Please provide the path to the JSON file as a command-line argument."
  );
} else {
  main(jsonFilePath).catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
}
