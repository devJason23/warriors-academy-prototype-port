import Link from "next/link";

export const metadata = {
  title: "Player Profile | Warriors Academy",
  description: "Player profile page with highlights, stats, and bio for college recruitment.",
};

// Sample player data - will be dynamic later
const player = {
  name: "Marcus Johnson",
  number: 23,
  position: "Point Guard",
  height: "6'1\"",
  weight: "175 lbs",
  grade: "11th Grade",
  gpa: "3.5",
  hometown: "Springfield, MO",
  favoritePlayer: "Kyrie Irving",
  favoriteAthlete: "Kobe Bryant",
  bio: "Marcus is a dynamic point guard with elite court vision and a relentless work ethic. A natural leader on and off the court, Marcus has been with the Warriors program since its inception. He combines explosive athleticism with a high basketball IQ, making him one of the top recruits in the region. Off the court, Marcus is passionate about entrepreneurship and technology, maintaining a 3.5 GPA while dedicating himself to becoming a complete student athlete.",
  interests: ["Entrepreneurship", "Technology", "Music Production", "Community Service"],
  stats: {
    gamesPlayed: 28,
    ppg: 18.5,
    apg: 7.2,
    rpg: 4.1,
    spg: 2.3,
    fgPct: 47.8,
    threePct: 38.2,
    ftPct: 82.5,
    topg: 2.1,
  },
  seasonHighlights: [
    { title: "vs Springfield Central - 32 pts, 10 ast", videoId: "placeholder" },
    { title: "vs Ozark Eagles - Game Winner", videoId: "placeholder" },
    { title: "Tournament Semifinal - Triple Double", videoId: "placeholder" },
  ],
};

export default function PlayerProfile() {
  return (
    <main className="bg-gray-900 text-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-green-900/20 to-gray-900 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="text-green-500 font-bold text-lg mb-2">#{player.number}</div>
              <h1 className="text-4xl md:text-5xl font-black mb-2">{player.name}</h1>
              <p className="text-2xl text-green-400 font-semibold mb-6">{player.position}</p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="bg-gray-800/50 p-3 rounded-lg">
                  <span className="text-gray-400">Height</span>
                  <p className="font-bold text-lg">{player.height}</p>
                </div>
                <div className="bg-gray-800/50 p-3 rounded-lg">
                  <span className="text-gray-400">Weight</span>
                  <p className="font-bold text-lg">{player.weight}</p>
                </div>
                <div className="bg-gray-800/50 p-3 rounded-lg">
                  <span className="text-gray-400">Grade</span>
                  <p className="font-bold text-lg">{player.grade}</p>
                </div>
                <div className="bg-gray-800/50 p-3 rounded-lg">
                  <span className="text-gray-400">GPA</span>
                  <p className="font-bold text-lg">{player.gpa}</p>
                </div>
                <div className="bg-gray-800/50 p-3 rounded-lg">
                  <span className="text-gray-400">Hometown</span>
                  <p className="font-bold text-lg">{player.hometown}</p>
                </div>
                <div className="bg-gray-800/50 p-3 rounded-lg">
                  <span className="text-gray-400">Fav Player</span>
                  <p className="font-bold text-lg">{player.favoritePlayer}</p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-72 h-96 bg-gray-800 rounded-2xl border-2 border-green-500/30 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">&#127936;</div>
                  <p className="text-gray-400">Player Photo</p>
                  <p className="text-gray-500 text-sm">Coming Soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bio */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">About <span className="text-green-500">{player.name}</span></h2>
          <p className="text-gray-300 text-lg leading-relaxed">{player.bio}</p>
          <div className="mt-6">
            <h3 className="font-bold text-gray-400 mb-3">Interests</h3>
            <div className="flex flex-wrap gap-2">
              {player.interests.map((interest, i) => (
                <span key={i} className="bg-green-500/20 text-green-400 px-4 py-1.5 rounded-full text-sm font-medium">
                  {interest}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-4">
            <p className="text-gray-400"><span className="font-semibold">Favorite Athlete:</span> {player.favoriteAthlete}</p>
          </div>
        </div>
      </section>

      {/* Season Stats */}
      <section className="bg-gray-800 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">Season Statistics</h2>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-4 text-center">
            <div className="bg-gray-700 p-4 rounded-xl">
              <div className="text-3xl font-black text-green-500">{player.stats.ppg}</div>
              <div className="text-gray-400 text-sm mt-1">PPG</div>
            </div>
            <div className="bg-gray-700 p-4 rounded-xl">
              <div className="text-3xl font-black text-green-500">{player.stats.apg}</div>
              <div className="text-gray-400 text-sm mt-1">APG</div>
            </div>
            <div className="bg-gray-700 p-4 rounded-xl">
              <div className="text-3xl font-black text-green-500">{player.stats.rpg}</div>
              <div className="text-gray-400 text-sm mt-1">RPG</div>
            </div>
            <div className="bg-gray-700 p-4 rounded-xl">
              <div className="text-3xl font-black text-green-500">{player.stats.spg}</div>
              <div className="text-gray-400 text-sm mt-1">SPG</div>
            </div>
            <div className="bg-gray-700 p-4 rounded-xl">
              <div className="text-3xl font-black text-green-500">{player.stats.gamesPlayed}</div>
              <div className="text-gray-400 text-sm mt-1">Games</div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 text-center mt-4">
            <div className="bg-gray-700 p-4 rounded-xl">
              <div className="text-2xl font-bold text-white">{player.stats.fgPct}%</div>
              <div className="text-gray-400 text-sm mt-1">FG%</div>
            </div>
            <div className="bg-gray-700 p-4 rounded-xl">
              <div className="text-2xl font-bold text-white">{player.stats.threePct}%</div>
              <div className="text-gray-400 text-sm mt-1">3PT%</div>
            </div>
            <div className="bg-gray-700 p-4 rounded-xl">
              <div className="text-2xl font-bold text-white">{player.stats.ftPct}%</div>
              <div className="text-gray-400 text-sm mt-1">FT%</div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Interview */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Player Interview</h2>
          <div className="aspect-video bg-gray-800 rounded-2xl border border-gray-700 flex items-center justify-center">
            <div className="text-center">
              <div className="text-5xl mb-4">&#127909;</div>
              <p className="text-gray-400 text-lg">Video Interview Coming Soon</p>
              <p className="text-gray-500 text-sm mt-2">Player interview footage will be uploaded here</p>
            </div>
          </div>
        </div>
      </section>

      {/* Highlight Videos */}
      <section className="bg-gray-800 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Highlight Reel</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {player.seasonHighlights.map((highlight, i) => (
              <div key={i} className="bg-gray-700 rounded-xl overflow-hidden">
                <div className="aspect-video bg-gray-600 flex items-center justify-center">
                  <div className="text-4xl">&#9654;</div>
                </div>
                <div className="p-4">
                  <p className="font-semibold text-sm">{highlight.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact for Recruiting */}
      <section className="py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Interested in Recruiting {player.name}?</h2>
          <p className="text-gray-400 mb-6">College coaches can contact us for additional game film, transcripts, and to schedule a visit.</p>
          <a href="mailto:missouriwarriorsbasketball@gmail.com" className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg transition inline-block">
            Contact for Recruitment
          </a>
        </div>
      </section>
    </main>
  );
}
