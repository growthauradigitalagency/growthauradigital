import {
  DataTypes,
  Model,
  Optional,
} from "sequelize";
import sequelize from "../config/database";

export type ContactType = "course" | "consultation";
export type ContactStatus = "new" | "in_progress" | "closed";

export interface ContactAttributes {
  id: number;
  type: ContactType;

  fullName: string;
  phoneNumber: string;
  email?: string | null;

  preferredCourse?: string | null;
  learningMode?: string | null;
  experienceLevel?: string | null;

  businessName?: string | null;
  serviceNeeded?: string | null;
  preferredDate?: string | null;
  preferredTime?: string | null;

  message?: string | null;
  status: ContactStatus;

  createdAt?: Date;
  updatedAt?: Date;
}

export interface ContactCreationAttributes
  extends Optional<
    ContactAttributes,
    | "id"
    | "email"
    | "preferredCourse"
    | "learningMode"
    | "experienceLevel"
    | "businessName"
    | "serviceNeeded"
    | "preferredDate"
    | "preferredTime"
    | "message"
    | "status"
    | "createdAt"
    | "updatedAt"
  > {}

class Contact
  extends Model<ContactAttributes, ContactCreationAttributes>
  implements ContactAttributes
{
  public id!: number;
  public type!: ContactType;

  public fullName!: string;
  public phoneNumber!: string;
  public email!: string | null;

  public preferredCourse!: string | null;
  public learningMode!: string | null;
  public experienceLevel!: string | null;

  public businessName!: string | null;
  public serviceNeeded!: string | null;
  public preferredDate!: string | null;
  public preferredTime!: string | null;

  public message!: string | null;
  public status!: ContactStatus;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Contact.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    type: {
      type: DataTypes.ENUM("course", "consultation"),
      allowNull: false,
    },
    fullName: {
      type: DataTypes.STRING(120),
      allowNull: false,
    },
    phoneNumber: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(120),
      allowNull: true,
    },
    preferredCourse: {
      type: DataTypes.STRING(150),
      allowNull: true,
    },
    learningMode: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    experienceLevel: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    businessName: {
      type: DataTypes.STRING(150),
      allowNull: true,
    },
    serviceNeeded: {
      type: DataTypes.STRING(150),
      allowNull: true,
    },
    preferredDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    preferredTime: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    status: {
      type: DataTypes.ENUM("new", "in_progress", "closed"),
      allowNull: false,
      defaultValue: "new",
    },
  },
  {
    sequelize,
    tableName: "contacts",
    modelName: "Contact",
    timestamps: true,
  }
);

export default Contact;