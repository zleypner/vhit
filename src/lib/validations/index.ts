import { z } from "zod";

export const emailSchema = z.string().email("Email inválido");

export const passwordSchema = z
  .string()
  .min(8, "La contraseña debe tener al menos 8 caracteres");

export const requiredString = z.string().min(1, "Este campo es requerido");
