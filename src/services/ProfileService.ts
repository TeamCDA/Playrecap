import { supabase } from "@/libs/supabaseClient";

// ❌ Supprimer toutes les infos dans game de l'utilisateur puis l'utilisateur
export const deleteUser = async (userId: string) => {
  // Supprimer les données liées
  const { error: canError } = await supabase.from("game").delete().eq("user_id", userId)
  if (canError) throw canError

  // Supprimer l'utilisateur
  const { error: userError } = await supabase.auth.admin.deleteUser(userId)
  if (userError) throw userError

  return true
}