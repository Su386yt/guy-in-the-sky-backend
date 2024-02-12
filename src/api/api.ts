import express from "express";

export const api = express()

export function run() {
  const port = 3000;

  api.get('/', (req, res) => {
    res.send('Guy in the sky API');
  });

  api.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}



