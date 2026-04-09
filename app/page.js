import Link from "next/link";

export const metadata = {
  title: "Warriors Academy | Homeschool Athletic Basketball Program",
  description: "A 4-day homeschool co-op in Springfield, Missouri focused on athletic development, basketball training, and entrepreneurship education.",
};

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-24 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
            Train Like a <span className="text-green-500">Warrior</span>.
            <br />Learn Like a <span className="text-green-500">Champion</span>.
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            A revolutionary 4-day homeschool co-op in Springfield, Missouri where athletes focus on basketball training, entrepreneurship, and academic excellence — without sitting in a chair for 7-8 hours a day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#apply" className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition">
              Apply Now
            </a>
            <Link href="/why-homeschool" className="border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-white font-bold py-4 px-8 rounded-lg text-lg transition">
              Why Homeschool?
            </Link>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="bg-gray-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            The Traditional School System Is <span className="text-red-500">Failing</span> Student Athletes
          </h2>
          <p className="text-gray-300 text-lg text-center mb-12 max-w-3xl mx-auto">
            Student athletes spend 7-8 hours sitting in classrooms, leaving little time or energy for serious athletic development. The rigid schedule of public schools was designed for the industrial age — not for developing the next generation of elite athletes and entrepreneurs.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
              <div className="text-4xl mb-4">⏰</div>
              <h3 className="text-xl font-bold mb-2">Wasted Time</h3>
              <p className="text-gray-400">Traditional schools demand 7-8 hours of seat time daily, leaving athletes exhausted with minimal training time.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
              <div className="text-4xl mb-4">📉</div>
              <h3 className="text-xl font-bold mb-2">One-Size-Fits-All</h3>
              <p className="text-gray-400">Cookie-cutter curriculum ignores the unique needs of student athletes who need flexible, personalized learning.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
              <div className="text-4xl mb-4">🏀</div>
              <h3 className="text-xl font-bold mb-2">Missed Potential</h3>
              <p className="text-gray-400">Elite basketball development requires dedicated training time that the traditional school schedule simply cannot provide.</p>
            </div>
          </div>
          <div className="text-center mt-10">
            <Link href="/why-homeschool" className="text-green-400 hover:text-green-300 font-semibold text-lg underline">
              Deep dive: The history of our school system and why it fails athletes →
            </Link>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="bg-gray-800 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            The <span className="text-green-500">Warriors Academy</span> Difference
          </h2>
          <p className="text-gray-300 text-lg text-center mb-12">
            Our 4-day co-op model is built for serious athletes who want to compete at the highest level while getting a superior education.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="text-green-500 text-3xl">✓</div>
              <div>
                <h3 className="text-xl font-bold mb-2">4-Day Academic Schedule</h3>
                <p className="text-gray-400">Compact, focused academics 4 days a week under Missouri homeschool co-op compliance. More learning in less time.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-green-500 text-3xl">✓</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Elite Basketball Training</h3>
                <p className="text-gray-400">Daily skill development, film review sessions, and competitive play designed to get athletes recruited to the next level.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-green-500 text-3xl">✓</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Entrepreneur Education</h3>
                <p className="text-gray-400">Real-world business skills, financial literacy, and entrepreneurship training so athletes build wealth beyond the court.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-green-500 text-3xl">✓</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Film & Analytics App</h3>
                <p className="text-gray-400">Our exclusive app turns every game into a learning experience with AI-generated highlights, player stats, and visual coaching tools.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-green-500 text-3xl">✓</div>
              <div>
                <h3 className="text-xl font-bold mb-2">College Recruitment Ready</h3>
                <p className="text-gray-400">Player profiles with highlight reels, season stats, and bios built specifically to help college coaches find and recruit our athletes.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-green-500 text-3xl">✓</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Missouri Compliant</h3>
                <p className="text-gray-400">Fully compliant with Missouri homeschool regulations including 1,000 hours of instruction and required core subjects.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Film Review Section */}
      <section className="bg-gray-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Film Review: The <span className="text-green-500">Secret Weapon</span> of Elite Programs
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-3xl mx-auto">
            Research shows that athletes who regularly review game film improve decision-making by up to 30%. Visual learning allows players to see exactly what coaches are asking them to do — bridging the gap between instruction and execution.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-gray-800 p-6 rounded-xl">
              <div className="text-5xl font-black text-green-500 mb-2">30%</div>
              <p className="text-gray-400">Improvement in on-court decision making with consistent film study</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl">
              <div className="text-5xl font-black text-green-500 mb-2">2x</div>
              <p className="text-gray-400">Faster skill acquisition when athletes visually review their performance</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl">
              <div className="text-5xl font-black text-green-500 mb-2">85%</div>
              <p className="text-gray-400">Of D1 programs use film review as a core part of player development</p>
            </div>
          </div>
          <p className="text-gray-400">
            Our exclusive Warriors app uploads game footage and uses AI to automatically generate highlights, detailed player and team statistics, turning every single game into a powerful learning and growth experience.
          </p>
        </div>
      </section>

      {/* Player Profiles CTA */}
      <section className="bg-gray-800 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet Our <span className="text-green-500">Warriors</span></h2>
          <p className="text-gray-300 text-lg mb-8">
            Every player gets a professional profile page with highlight videos, season stats, bio, and everything college coaches need to evaluate and recruit our athletes.
          </p>
          <Link href="/player" className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition inline-block">
            View Player Profiles
          </Link>
        </div>
      </section>

      {/* Apply Section */}
      <section id="apply" className="bg-gradient-to-br from-green-900 to-gray-900 text-white py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Become a Warrior?</h2>
          <p className="text-gray-300 text-lg mb-8">
            We are looking for dedicated athletes and families who want more from education. If you are ready to train harder, learn smarter, and compete at the highest level, Warriors Academy is for you.
          </p>
          <a href="mailto:missouriwarriorsbasketball@gmail.com" className="bg-white text-gray-900 font-bold py-4 px-8 rounded-lg text-lg hover:bg-gray-200 transition inline-block">
            Contact Us to Apply
          </a>
          <p className="text-gray-400 mt-4 text-sm">Springfield, Missouri | Limited spots available</p>
        </div>
      </section>
    </main>
  );
}
