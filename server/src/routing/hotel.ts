import { Router } from "express"
import HotelController from "../controllers/hotelcontroller"

const hotelRoutes: Router = Router();

// Create Hotel
// hotelRouters.post('/')
// Get all hotels
hotelRoutes.get('/', HotelController.getHotels)
// Get one hotels
// hotelRouters.get('/:id')

export default hotelRoutes