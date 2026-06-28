import API from "./api";

export const submitCourseEnquiry = async (data: unknown) => {
  const response = await API.post(
    "/api/contact/course-enquiry",
    data
  );

  return response.data;
};

export const submitConsultation = async (data: unknown) => {
  const response = await API.post(
    "/api/contact/consultation",
    data
  );

  return response.data;
};

export const getContacts = async () => {
  const response = await API.get("/api/contact");

  return response.data;
};