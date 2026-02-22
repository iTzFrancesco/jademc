import React, { useState, useEffect } from 'react'
import Home from './pages/Home.jsx'

function App() {
  const [copied, setCopied] = useState(false)
  const [mcPlayers, setMcPlayers] = useState(0)
  const [discordOnline, setDiscordOnline] = useState(0)
  const serverIP = "play.icemc.it"
  const serverName = "IceMC"
  const discordInvite = "https://discord.gg/cU6x8t49B3"
  const modesMaxWidth = "34rem"

  const copyToClipboard = () => {
    navigator.clipboard.writeText(serverIP)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const mcResponse = await fetch(`https://api.mcstatus.io/v2/status/java/${serverIP}`)
        const mcData = await mcResponse.json()
        if (mcData.online) {
          setMcPlayers(mcData.players.online)
        } else {
          setMcPlayers(0)
        }
      } catch (err) {
        console.error("Error fetching stats:", err)
      }

      try {
        const discordResponse = await fetch('https://discord.com/api/v9/invites/cU6x8t49B3?with_counts=true')
        const discordData = await discordResponse.json()
        if (discordData.approximate_presence_count) setDiscordOnline(discordData.approximate_presence_count)
      } catch (err) {
        console.error("Error fetching stats:", err)
      }
    }

    fetchStats()
    const interval = setInterval(fetchStats, 60000)
    return () => clearInterval(interval)
  }, [])

  return (
    <Home
      serverIP={serverIP}
      serverName={serverName}
      mcPlayers={mcPlayers}
      discordOnline={discordOnline}
      discordInvite={discordInvite}
      modesMaxWidth={modesMaxWidth}
      copyToClipboard={copyToClipboard}
      copied={copied}
    />
  )
}

export default App
