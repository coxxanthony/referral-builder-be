import { Request, Response, NextFunction } from "express";
import {
  getAllReferrals,
  createReferral,
  getReferralById,
  updateReferral,
  deleteReferral,
} from "../models/referralModel";

import { Referral } from "../types/referralTypes";

import { successResponse } from "../utils/response";

export const fetchReferrals = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const referrals = await getAllReferrals();
    return successResponse(res, referrals, "Referrals fetched successfully");
  } catch (err) {
    next(err);
  }
};

export const addReferral = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const referralData: Referral = req.body;
    const referral = await createReferral(referralData);
    return successResponse(res, referral, "Referral created successfully", 201);
  } catch (err) {
    next(err);
  }
};

export const getReferral = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id as string);
    const referral = await getReferralById(id);
    if (!referral) {
      return res.status(404).json({ message: "Referral not found" });
    } else {
      return successResponse(res, referral, "Referral fetched successfully");
    }
  } catch (err) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export const updateReferralById = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id as string);
    const referralData: Partial<Referral> = req.body;
    const updatedReferral = await updateReferral(id, referralData);
    return successResponse(
      res,
      updatedReferral,
      "Referral updated successfully",
    );
  } catch (err) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export const deleteReferralById = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id as string);
    await deleteReferral(id);
    return successResponse(res, null, "Referral deleted successfully");
  } catch (err) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};
