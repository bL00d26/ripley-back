import { Request, Response } from "express";
import User from "../models/user";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.findAll();
    res.status(200).json({
      success: true,
      users,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "Error al obtener usuarios",
    });
  }
};

export const createUser = async (req: Request, res: Response) => {
  const { body } = req;

  try {
    const user = await User.create(body);
    res.status(201).json({
      success: true,
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "Error al conectarse",
    });
  }
};

export const getAverageAge = async (req: Request, res: Response) => {
  try {
    const users = await User.findAll();

    return users;
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "Error al conectarse",
    });
  }
};
