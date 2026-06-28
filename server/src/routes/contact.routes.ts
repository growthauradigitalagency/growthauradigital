import { Router } from "express";
import {
  createCourseEnquiry,
  createConsultationBooking,
  getContacts,
  getContactById,
} from "../controllers/contact.controller";

const router = Router();

router.post("/course-enquiry", createCourseEnquiry);
router.post("/consultation", createConsultationBooking);
router.get("/", getContacts);
router.get("/:id", getContactById);

export default router;