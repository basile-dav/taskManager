-- AlterTable
ALTER TABLE "Users" ALTER COLUMN "password_digest" DROP NOT NULL,
ALTER COLUMN "preferences" DROP NOT NULL;
