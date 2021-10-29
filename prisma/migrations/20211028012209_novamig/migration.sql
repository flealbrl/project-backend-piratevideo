/*
  Warnings:

  - Added the required column `nome2` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "nome2" TEXT NOT NULL;
