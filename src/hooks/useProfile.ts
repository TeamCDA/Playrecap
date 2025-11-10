import { useAuth } from "@/contexts/AuthContext"
import { deleteUser } from "@/services/ProfileService"

export const useProfile = () => {
const { user } = useAuth()

//   supprimer une candidature
  const removeUser = async () => {
    if (!user) return
    await deleteUser(user.id)
  }

return {
    removeUser
}
}