import { useAuth } from "@/contexts/AuthContext"
import type Game from "@/models/Game"
import { getGames } from "@/services/GameService"
import { useCallback, useEffect, useState } from "react"

export const useGame = () => {
const { user } = useAuth()
  const [games, setGames] = useState<Game[]>([])
  const [loading, setLoading] = useState(false)

  //  récupere toutes les jeux de l'utilisateur
const fetchGames = useCallback(async () => {
  if (!user) return
  setLoading(true)
  try {
    const data = await getGames(user.id)
    setGames(data)
  } catch (err) {
    console.error(err)
  } finally {
    setLoading(false)
  }
}, [user])


// Effect pour charger les données initiales
  useEffect(() => {
    const load = async () => {
      if (user) {
        await fetchGames()
      } else {
        setGames([])
        // setError(null)
      }
    }
    load()
  }, [user, fetchGames])

return {
    fetchGames,
    games,
    loading
}
}