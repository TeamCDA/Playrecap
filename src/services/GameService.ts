import { supabase } from "@/libs/supabaseClient";

// ⬇️ Récupérer les données de la table "game" pour l'utilisateur connecté dans l'ordre des jeux mis a jour
export const getGames = async (userId: string) => {
  const { data, error } = await supabase
    .from("game")
    .select("*")
    .eq("user_id", userId)
  if (error) throw new Error(error.message);
  return data;
};