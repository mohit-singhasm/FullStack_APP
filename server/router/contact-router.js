import { Router } from "express";
import {
  deleteContact,
  getAllContacts,
  contact,
} from "../controlers/contact-controller.js";
import jwtvarifyMiddleware from "../middlewares/jwtvarify-middleware.js";
import admin_middleware from "../middlewares/admin-middleware.js";

const contact_router = Router();

contact_router
  .route("/contact")
  .post(jwtvarifyMiddleware, admin_middleware, contact);
contact_router
  .route("/contacts/delete/:id")
  .delete(jwtvarifyMiddleware, admin_middleware, deleteContact);
contact_router
  .route("/contacts")
  .get(jwtvarifyMiddleware, admin_middleware, getAllContacts);

export default contact_router;
