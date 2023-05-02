import { Request, Response } from "express"
import Hotels from "../models/models"

class HotelController {
    async getHotels(req: Request, res: Response) {
        const hotels = await Hotels.findAll()
        return res.json(hotels)
    }
}

export default new HotelController()