import { prisma } from "../config/prisma";
import { Referral } from "../types/referralTypes";

export const getAllReferrals = async (): Promise<Referral[]> => {
  return await prisma.referral.findMany();
};

export const createReferral = async (referral: Referral): Promise<Referral> => {
  const { given_name, surname, email, phone } = referral;
  const result = await prisma.referral.create({
    data: {
      given_name,
      surname,
      email,
      phone,
      home: referral.home || null,
      street: referral.street || null,
      suburb: referral.suburb || null,
      state: referral.state || null,
      postcode: referral.postcode || null,
      country: referral.country || null,
    },
  });
  return result;
};

export const getReferralById = async (id: number): Promise<Referral | null> => {
  return await prisma.referral.findUnique({
    where: { id },
  });
};

export const deleteReferral = async (id: number): Promise<void> => {
  await prisma.referral.delete({
    where: { id },
  });
};

export const updateReferral = async (
  id: number,
  referral: Partial<Referral>,
): Promise<Referral> => {
  const { given_name, surname, email, phone } = referral;
  const result = await prisma.referral.update({
    where: { id },
    data: {
      given_name: given_name || undefined,
      surname: surname || undefined,
      email: email || undefined,
      phone: phone || undefined,
      home: referral.home || null,
      street: referral.street || null,
      suburb: referral.suburb || null,
      state: referral.state || null,
      postcode: referral.postcode || null,
      country: referral.country || null,
    },
  });
  return result;
};
