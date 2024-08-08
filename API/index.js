import express from "express";
const app = express();

// CONFIGURANDO O EXPRESS

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// CONSTRUINDO A ROTA PRINCIPAL

app.get("/", (req, res) => {
  //   res.send("Hello Word");

  const games = [
    {
      title: "CS-GO",
      year: "2012",
      platform: "Desktop (Windows)",
      price: 20,
    },
    {
      title: "GTA-VI",
      year: "2024",
      platform: "Desktop (Windows)",
      price: 40,
    },
  ];
  res.json(games);
});

// RODANDO A API NA PORTA 4000

const port = 4000;

app.listen(port, (error) => {
  if (error) {
    console.log(error);
  }
  console.log(`API rodando em http://localhost:${port}`);
});
