import {z} from "zod";

export const studentSchema = z.object({
    fullName : z
      .string()
      .min(1, "Full Name is required")
      .min(3, "Name must be at least 3 characters"),

    dateOfBirth: z
      .string()
      .min(1, "Date of Birth is required"),

    gender: z.enum(["Male", "Female", "Other"]),

    schoolName:z
      .string()
      .min(1, "School name is required")
      .min(3, "School name must be at least 3 characters"),

    admissionNumber: z.string().optional(),

    bloodGroup: z.string().optional(),

    address: z.
      string()
      .min(10, "Address must be at least 10 characters"),

    grade: z
       .string()
       .min(1, "Grade is required"),

    city:z
      .string()
      .min(1, "City is required"),

    state:z
      .string()
      .min(1, "State is required"),

    pinCode:z
      .string()
      .regex(/^\d{6}$/, "Invalid Pin"),


    parentName: z.string().min(1, "Parent Name required"),

    relationship:z
      .string()
      .min(1, "RelationShip with parent is required"),

    parentEmail:z
      .string()
      .min(1, "Parent email is required")
      .email("Invalid Email Address"),

    parentMobile:z
      .string()
      .min(1, "Parent Mobile number required")
      .regex(/^\d{10}$/, " mobile number must be 10 digit"),

    
      previousSchool:z
        .string()
        .min(1, "Previous School is required"),

      yearsAttended:z
        .string()
        .min(1,"Years Attended required")
});