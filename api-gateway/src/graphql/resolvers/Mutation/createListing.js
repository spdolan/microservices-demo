import ListingsService from '#root/adapters/ListingsService';

const createListingResolver = async (obj,  {description, title}, context) => {
  // handling here so the service doesn't have to deal with Authentication
  if(!context.res.locals.userSession) throw new Error("You must be logged in to create a Listing!")
  return await ListingsService.createListing({description, title})
};

export default createListingResolver;