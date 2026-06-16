import { notFound } from 'next/navigation'
import PlayerProfile from '../../../components/warriors/PlayerProfile'
import { PLAYERS } from '../../../components/warriors/rosterData'

export function generateStaticParams() {
  return Object.keys(PLAYERS).map((slug) => ({ slug }))
}

export function generateMetadata({ params }) {
  const p = PLAYERS[params.slug]
  return {
    title: p ? `${p.name} — The Warriors` : 'The Warriors — Warriors Academy',
  }
}

export default function PlayerPage({ params }) {
  if (!PLAYERS[params.slug]) notFound()
  return <PlayerProfile playerId={params.slug} />
}
