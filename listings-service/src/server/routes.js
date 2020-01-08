import {Listing} from "#root/db/models"

const setupRoutes = app => {
  app.get("/listings", async (req, res, next) => {
    try {
      const Listings = await Listing.findAll()
      return res.json(Listings)
    } catch (error) {
      return next(error);
    }
  })

  app.post("/listings", async (req, res, next) => {
    if (!req.body.description || !req.body.title) {
      return next(new Error("Invalid body!"));
    }

    try {
      const listing = await Listing.create({ description: req.body.description, title: req.body.title });
      return res.json(listing);
    } catch (e) {
      return next(e);
    }
  });
}

export default setupRoutes;