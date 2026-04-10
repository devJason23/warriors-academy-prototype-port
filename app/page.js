import Link from "next/link";

export const metadata = {
  title: "Warriors Academy | Faith-Based Homeschool Athletic Program",
  description: "A Christ-centered 4-day homeschool co-op in Springfield, Missouri building elite athletes, entrepreneurs, and leaders.",
};

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-24 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-green-400 font-semibold tracking-wide mb-4 text-sm uppercase">Faith. Performance. Entrepreneurship.</p>
          <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
            Train Like a <span className="text-green-500">Warrior</span>.
            <br />Learn Like a <span className="text-green-500">Champion</span>.
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-4 max-w-3xl mx-auto italic">
            "Whatever you do, work at it with all your heart, as working for the Lord." - Colossians 3:23
          </p>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            A Christ-centered 4-day homeschool co-op in Springfield, Missouri where athletes get up to 4 hours of elite training daily, launch real businesses, and reclaim family time.
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

      {/* Problem vs Solution */}
      <section className="bg-gray-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            The Traditional System Is <span className="text-red-500">Failing</span> Student Athletes
          </h2>
          <p className="text-gray-300 text-lg text-center mb-12 max-w-3xl mx-auto">
            The modern school system forces kids to sit in class all day, followed by exhausting after-school practices, homework, and chores, leaving zero time for family connection. Meanwhile, 45% of high school seniors test below basic in math despite nearly a trillion dollars in annual government spending.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-900/20 border border-red-800/30 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3 text-red-400">The Traditional Model</h3>
              <ul className="space-y-3 text-gray-300">
                <li>7-8 hours of seat time daily</li>
                <li>Exhausted by practice time</li>
                <li>Homework kills family evenings</li>
                <li>Zero entrepreneurship training</li>
                <li>System designed for factory workers, not athletes</li>
              </ul>
            </div>
            <div className="bg-green-900/20 border border-green-800/30 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3 text-green-400">The Warriors Way</h3>
              <ul className="space-y-3 text-gray-300">
                <li>4-day focused academic schedule</li>
                <li>Up to 4 hours of elite training daily</li>
                <li>Families get their evenings back</li>
                <li>Every student launches a real business</li>
                <li>Christ-centered mentorship and discipleship</li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-10">
            <Link href="/why-homeschool" className="text-green-400 hover:text-green-300 font-semibold text-lg underline">
              Deep dive: The hidden history of public school and why our model wins
            </Link>
          </div>
        </div>
      </section>

      {/* Athletic Edge */}
      <section className="bg-gray-800 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            The <span className="text-green-500">Warriors Academy</span> Athletic Edge
          </h2>
          <p className="text-gray-300 text-lg text-center mb-12">
            We are the only ATG-certified training center within a 200-mile radius. Our knees-over-toes, joint-first approach builds bulletproof, explosive athletes who stay injury-free.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="text-green-500 text-3xl">&#10003;</div>
              <div>
                <h3 className="text-xl font-bold mb-2">ATG Certified Training</h3>
                <p className="text-gray-400">The only ATG-certified hub within 200 miles. We bulletproof knees, ankles, and the posterior chain to increase vertical jump and speed while reducing non-contact injuries.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-green-500 text-3xl">&#10003;</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Elite Basketball Development</h3>
                <p className="text-gray-400">Up to 4 hours daily of basketball practice, conditioning, film study, strength and agility training built into the school week, not crammed into exhausting after-school sessions.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-green-500 text-3xl">&#10003;</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Entrepreneur Unschool</h3>
                <p className="text-gray-400">Every student launches and operates their own business, plus participates in a team fundraising venture. We teach students to leverage AI to build applications, marketing platforms, and real wealth.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-green-500 text-3xl">&#10003;</div>
              <div>
                <h3 className="text-xl font-bold mb-2">College Recruitment Ready</h3>
                <p className="text-gray-400">Custom profile pages for every athlete featuring highlight films, verified stats, and personalized interview videos. The most high-tech homeschool recruiting platform in the country.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Golf & Mental Toughness - Caitlin Clark */}
      <section className="bg-gray-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            Why Basketball Players <span className="text-green-500">Play Golf</span>
          </h2>
          <p className="text-gray-300 text-lg text-center mb-8 max-w-3xl mx-auto">
            Caitlin Clark, the record-breaking Iowa basketball star, credits golf with building her clutch mental performance. When it is just you, the ball, and your clubs, there are no teammates to pass to if your shot is not falling. That is why every Warriors athlete completes a mandatory 6-week golf season.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-gray-800 p-6 rounded-xl text-center">
              <div className="text-4xl mb-3">&#9971;</div>
              <h3 className="text-lg font-bold mb-2">Mental Toughness</h3>
              <p className="text-gray-400 text-sm">Golf teaches athletes to perform under pressure when it is just them and the moment. No teammates, no excuses.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl text-center">
              <div className="text-4xl mb-3">&#129309;</div>
              <h3 className="text-lg font-bold mb-2">Lifelong Networking</h3>
              <p className="text-gray-400 text-sm">Golf is the sport of business. Our athletes learn a game they can play with friends, family, and future business partners for life.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl text-center">
              <div className="text-4xl mb-3">&#127947;</div>
              <h3 className="text-lg font-bold mb-2">ATG Golf Performance</h3>
              <p className="text-gray-400 text-sm">Our ATG training builds hip and spinal robustness, allowing greater clubhead speed with less strain. Better bodies, better swings.</p>
            </div>
          </div>
          <p className="text-gray-400 text-center text-sm">Competitive cheer/stunt also available. Football coming soon.</p>
        </div>
      </section>

      {/* Real Stats */}
      <section className="bg-gray-800 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            Homeschoolers <span className="text-green-500">Dominate</span> the Numbers
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-12">
            <div className="bg-gray-700 p-5 rounded-xl">
              <div className="text-3xl font-black text-green-500">65-80th</div>
              <p className="text-gray-400 mt-2 text-sm">Percentile on standardized tests vs 50th for public school</p>
            </div>
            <div className="bg-gray-700 p-5 rounded-xl">
              <div className="text-3xl font-black text-green-500">1190</div>
              <p className="text-gray-400 mt-2 text-sm">Average SAT score vs 1060 for public school students</p>
            </div>
            <div className="bg-gray-700 p-5 rounded-xl">
              <div className="text-3xl font-black text-green-500">87%</div>
              <p className="text-gray-400 mt-2 text-sm">College acceptance rate vs 68% for public school</p>
            </div>
            <div className="bg-gray-700 p-5 rounded-xl">
              <div className="text-3xl font-black text-green-500">66.7%</div>
              <p className="text-gray-400 mt-2 text-sm">4-year college graduation rate vs 57.5% public school</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6 text-center">
            <div className="bg-gray-700 p-5 rounded-xl">
              <div className="text-3xl font-black text-green-500">3.41</div>
              <p className="text-gray-400 mt-2 text-sm">First-year college GPA vs 3.12 for public school students</p>
            </div>
            <div className="bg-gray-700 p-5 rounded-xl">
              <div className="text-3xl font-black text-green-500">87%</div>
              <p className="text-gray-400 mt-2 text-sm">Of peer-reviewed studies show homeschoolers have superior social and emotional development</p>
            </div>
          </div>
          <p className="text-gray-500 text-center text-xs mt-6">Homeschoolers achieve these results studying just 3-5 hours per day compared to 6-8 hours in public school.</p>
        </div>
      </section>

      {/* Elite Homeschooled Athletes */}
      <section className="bg-gray-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Elite Athletes Who Were <span className="text-green-500">Homeschooled</span>
          </h2>
          <p className="text-gray-300 text-lg mb-10">The best athletes in the world escaped the classroom to train. So do Warriors.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-gray-800 p-4 rounded-xl">
              <p className="font-bold">Tim Tebow</p>
              <p className="text-gray-400 text-sm">Heisman Trophy Winner, NFL QB</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-xl">
              <p className="font-bold">Blake Griffin</p>
              <p className="text-gray-400 text-sm">#1 NBA Draft Pick, 6x All-Star</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-xl">
              <p className="font-bold">Simone Biles</p>
              <p className="text-gray-400 text-sm">Most Decorated US Gymnast, 11 Olympic Medals</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-xl">
              <p className="font-bold">Venus & Serena Williams</p>
              <p className="text-gray-400 text-sm">23 Combined Grand Slam Titles</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-xl">
              <p className="font-bold">Shaun White</p>
              <p className="text-gray-400 text-sm">3x Olympic Gold Medalist</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-xl">
              <p className="font-bold">Michelle Kwan</p>
              <p className="text-gray-400 text-sm">5x World Champion Figure Skater</p>
            </div>
          </div>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Become a Warrior?</h2>
          <p className="text-gray-300 text-lg mb-3 italic">
            "Whatever you do, work at it with all your heart, as working for the Lord." - Colossians 3:23
          </p>
          <p className="text-gray-300 text-lg mb-8">
            We honor God in everything we do on and off the court. If you are a dedicated athlete and family seeking Christ-centered mentorship, elite training, and real entrepreneurship education, Warriors Academy is your home.
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
