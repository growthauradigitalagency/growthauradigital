import { Request, Response } from "express";
import Contact from "../models/contact.model";
import { sendMail } from "../utils/sendMail";

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "innovixtrio@gmail.com";

export const createCourseEnquiry = async (req: Request, res: Response) => {
  try {
    const {
      fullName,
      phoneNumber,
      email,
      preferredCourse,
      learningMode,
      experienceLevel,
      message,
    } = req.body;

    if (!fullName || !phoneNumber || !preferredCourse) {
      return res.status(400).json({
        success: false,
        message: "fullName, phoneNumber, and preferredCourse are required.",
      });
    }

    const enquiry = await Contact.create({
      type: "course",
      fullName,
      phoneNumber,
      email: email || null,
      preferredCourse: preferredCourse || null,
      learningMode: learningMode || null,
      experienceLevel: experienceLevel || null,
      message: message || null,
    });

    const adminHtml = `
      <h2>New Course Enquiry</h2>
      <p><b>Name:</b> ${fullName}</p>
      <p><b>Phone:</b> ${phoneNumber}</p>
      <p><b>Email:</b> ${email || "-"}</p>
      <p><b>Preferred Course:</b> ${preferredCourse}</p>
      <p><b>Learning Mode:</b> ${learningMode || "-"}</p>
      <p><b>Experience Level:</b> ${experienceLevel || "-"}</p>
      <p><b>Message:</b> ${message || "-"}</p>
    `;

    try {
      await sendMail({
        to: ADMIN_EMAIL,
        subject: "New Course Enquiry",
        html: adminHtml,
      });

      if (email) {
        await sendMail({
          to: email,
          subject: "We received your course enquiry",
          html: `
            <h2>Thank you for contacting Growth Aura</h2>
            <p>We have received your course enquiry and will get back to you soon.</p>
            <p><b>Course:</b> ${preferredCourse}</p>
          `,
        });
      }
    } catch (mailError) {
      console.error("MAIL ERROR (Course Enquiry):", mailError);
    }

    return res.status(201).json({
      success: true,
      message: "Course enquiry submitted successfully.",
      data: enquiry,
    });
  } catch (error) {
    console.error("createCourseEnquiry error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error.",
    });
  }
};

export const createConsultationBooking = async (req: Request, res: Response) => {
  try {
    const {
      fullName,
      businessName,
      serviceNeeded,
      phoneNumber,
      email,
      preferredDate,
      preferredTime,
      message,
    } = req.body;

    if (!fullName || !businessName || !serviceNeeded || !phoneNumber) {
      return res.status(400).json({
        success: false,
        message:
          "fullName, businessName, serviceNeeded, and phoneNumber are required.",
      });
    }

    const booking = await Contact.create({
      type: "consultation",
      fullName,
      phoneNumber,
      email: email || null,
      businessName: businessName || null,
      serviceNeeded: serviceNeeded || null,
      preferredDate: preferredDate || null,
      preferredTime: preferredTime || null,
      message: message || null,
    });

    const adminHtml = `
      <h2>New Consultation Booking</h2>
      <p><b>Name:</b> ${fullName}</p>
      <p><b>Company:</b> ${businessName}</p>
      <p><b>Service Needed:</b> ${serviceNeeded}</p>
      <p><b>Phone:</b> ${phoneNumber}</p>
      <p><b>Email:</b> ${email || "-"}</p>
      <p><b>Preferred Date:</b> ${preferredDate || "-"}</p>
      <p><b>Preferred Time:</b> ${preferredTime || "-"}</p>
      <p><b>Project Details:</b> ${message || "-"}</p>
    `;

    try {
      await sendMail({
        to: ADMIN_EMAIL,
        subject: "New Consultation Booking",
        html: adminHtml,
      });

      if (email) {
        await sendMail({
          to: email,
          subject: "We received your consultation booking",
          html: `
            <h2>Thank you for booking a consultation</h2>
            <p>We have received your consultation request and will contact you soon.</p>
            <p><b>Service:</b> ${serviceNeeded}</p>
            <p><b>Date:</b> ${preferredDate || "-"}</p>
            <p><b>Time:</b> ${preferredTime || "-"}</p>
          `,
        });
      }
    } catch (mailError) {
      console.error("MAIL ERROR (Consultation):", mailError);
    }

    return res.status(201).json({
      success: true,
      message: "Consultation booking submitted successfully.",
      data: booking,
    });
  } catch (error) {
    console.error("createConsultationBooking error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error.",
    });
  }
};

export const getContacts = async (_req: Request, res: Response) => {
  try {
    const data = await Contact.findAll({
      order: [["createdAt", "DESC"]],
    });

    return res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    console.error("getContacts error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error.",
    });
  }
};

export const getContactById = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    if (Number.isNaN(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid contact id.",
      });
    }

    const contact = await Contact.findByPk(id);

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: "Contact not found.",
      });
    }

    return res.status(200).json({
      success: true,
      data: contact,
    });
  } catch (error) {
    console.error("getContactById error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error.",
    });
  }
};