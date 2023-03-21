import express from "express";
import { createProperty,deleteProperty,getAllproperties,getAllpropertydetails,updateProperty } from "../controllers/property.controller.js";


const router = express.Router();

router.route('/').get(getAllproperties);
router.route('/:id').get(getAllpropertydetails);
router.route('/').post(createProperty);
router.route('/:id').patch(updateProperty);
router.route('/:id').delete(deleteProperty);

export default router;