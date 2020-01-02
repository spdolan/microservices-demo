import {Listing} from "#root/db/models"

const setupRoutes = app => {
  app.get("/listings", async (req, res, next) => {
    const Listings = await Listing.findAll()
    return res.json(Listings)
  })
}

export default setupRoutes;