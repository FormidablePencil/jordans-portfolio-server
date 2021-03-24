import express from "express";
import ContentModel from "../model/content";
const getContentRouter = express.Router();

getContentRouter.get("/getcontentdata", async (req, res, next) => {
  const data = await ContentModel.find();
  console.log(data);
  if (data[0]) res.status(200).send(data[0]);
  else res.sendStatus(500);
});

export default getContentRouter;

const getContentExampRouter = express.Router();
getContentExampRouter.get("/getcontentdataexmp", async (req, res, next) => {
  const data = await ContentModel.find();
  console.log(data);
  if (data[1]) res.status(200).send(data[1]);
  else res.sendStatus(500);
});
export { getContentExampRouter };

