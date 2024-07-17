const fs = require("fs");
const superagent = require("superagent");

// fs.readFile(`./dog.txt`, (err, data) => {
//   console.log(`Breed: ${JSON.stringify(data)}`);

//   superagent
//     .get(`https://dog.ceo/api/breed/${data}/images/random`)
//     .end((err, res) => {
//       if (err) return console.log(err.message);
//       console.log(res.body.message);

//       fs.writeFile("dog-img.txt", res.body.message, (err, res) => {
//         console.log("Random image saved");
//       });
//     });
// });

//how to use promise
// fs.readFile(`./dog.txt`, (err, data) => {
//   console.log(`Breed: ${JSON.stringify(data)}`);
//   superagent
//     .get(`https://dog.ceo/api/breed/${data}/images/random`)
//     .then((res) => {
//       console.log(res.body.message);
//       fs.writeFile("dog-img.txt", res.body.message, (err, res) => {
//         console.log("Random image saved");
//       });
//     })
//     .catch((err) => {
//       console.log(err.message);
//     });
// });

//Promise Pro
const readFilePro = (file) => {
  return new Promise((resolve, regect) => {
    fs.readFile(file, (err, data) => {
      if (err) regect("I could not find the file 😭");
      resolve(data);
    });
  });
};
const writeFilePro = (file, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, (err) => {
      if (err) reject("I could not write to the file ��");
      resolve("File saved successfully");
    });
  });
};

// readFilePro(`./dog.txt`).then((data) => {
//   console.log(`Breed: ${JSON.stringify(data)}`);
//   return superagent
//     .get(`https://dog.ceo/api/breed/${data}/images/random`)
//     .then((res) => {
//       console.log(res.body.message);
//       return writeFilePro("dog-img.txt", res.body.message);
//     })
//     .catch((err) => {
//       console.log("File cannot be found");
//     });
// });

//async await
// const getDocPic = async () => {
//   try {
//     const data = await readFilePro(`${__dirname}/dog.txt`);
//     console.log(`Breed: ${data}`);
//     const res = await superagent.get(
//       `https://dog.ceo/api/breed/${data}/images/random`
//     );
//     console.log("the response is" + res.body.message);
//     await writeFilePro("dog-img.txt", res.body.message);
//     console.log("Random image saved");
//   } catch (err) {
//     throw(err);
//   }
// };

// (async () => {
//   try {
//     const x = await getDocPic();
//     console.log(x);
//   } catch (error) {
//     console.log('error');
//   }
// })();

const getDocPic = async () => {
  try {
    const data = await readFilePro(`${__dirname}/dog.txt`);
    console.log(`Breed: ${data}`);
    const res1Pro = superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );
    const res2Pro = superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );
    const res3Pro = superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );
    const all = await Promise.all([res1Pro, res2Pro, res3Pro]);
    const imgs = all.map((el) => el.body.message);
    console.log(imgs);
    await writeFilePro("dog-img.txt", imgs.join("\n"));
    console.log("Random image saved");
  } catch (err) {
    throw err;
  }
};

(async () => {
  try {
    const x = await getDocPic();
    console.log(x);
  } catch (error) {
    console.log("error");
  }
})();
