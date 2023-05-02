import { Router } from "express";
import hotelRoutes from "./hotel";

const routes: Router = Router();

routes.use('/hotel', hotelRoutes);


export default routes;