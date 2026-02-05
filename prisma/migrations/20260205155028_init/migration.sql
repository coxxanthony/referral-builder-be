-- CreateTable
CREATE TABLE "Referral" (
    "id" SERIAL NOT NULL,
    "given_name" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "home" TEXT,
    "street" TEXT,
    "suburb" TEXT,
    "state" TEXT,
    "postcode" TEXT,
    "country" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Referral_pkey" PRIMARY KEY ("id")
);
