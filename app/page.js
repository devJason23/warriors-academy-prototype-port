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
            "I can do all things through Christ who strengthens me." - Philippians 4:13
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
      <section className="py-16 px-4 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
            The Traditional System Is <span className="text-green-500">Failing</span> Student Athletes
          </h2>
          <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            The modern school system forces kids to sit in class all day, followed by exhausting after-school practices, homework, and chores, leaving zero time for family connection. Meanwhile, 45% of high school seniors test below basic in math despite nearly a trillion dollars in annual government spending.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-900/30 border border-red-800 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-red-400 mb-4">The Traditional Model</h3>
              <ul className="space-y-3 text-gray-300">
                <li>7-8 hours of seat time daily</li>
                <li>Exhausted by practice time</li>
                <li>Homework kills family evenings</li>
                <li>Zero entrepreneurship training</li>
                <li>System designed for factory workers, not athletes</li>
              </ul>
            </div>
            <div className="bg-green-900/30 border border-green-800 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-green-400 mb-4">The Warriors Way</h3>
              <ul className="space-y-3 text-gray-300">
                <li>4-day focused schedule with parent-led academics</li>
                <li>Up to 4 hours of elite training daily</li>
                <li>Families get their evenings back</li>
                <li>Every student launches a real business</li>
                <li>Christ-centered mentorship and discipleship</li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link href="/why-homeschool" className="text-green-400 hover:text-green-300 underline text-lg">
              Deep dive: The hidden history of public school and why our model wins
            </Link>
          </div>
        </div>
      </section>

      {/* Athletic Edge */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
            The <span className="text-green-500">Warriors Academy</span> Athletic Edge
          </h2>
          <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            We are the only ATG-certified training center within a 200-mile radius. Our knees-over-toes, joint-first approach builds bulletproof, explosive athletes who stay injury-free.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
              <div className="text-green-500 text-3xl mb-4">&#10003;</div>
              <h3 className="text-xl font-bold text-green-400 mb-3">ATG Certified Training</h3>
              <p className="text-gray-300">The only ATG-certified hub within 200 miles. We bulletproof knees, ankles, and the posterior chain to increase vertical jump and speed while reducing non-contact injuries.</p>
              <a href="https://atgonlinecoaching.com" target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-green-400 hover:text-green-300 underline text-sm">Learn more about ATG &#8594;</a>
            </div>
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
              <div className="text-green-500 text-3xl mb-4">&#10003;</div>
              <h3 className="text-xl font-bold text-green-400 mb-3">Elite Basketball Development</h3>
              <p className="text-gray-300">Up to 4 hours daily of basketball practice, conditioning, film study, strength and agility training built into the school week, not crammed into exhausting after-school sessions.</p>
            </div>
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
              <div className="text-green-500 text-3xl mb-4">&#10003;</div>
              <h3 className="text-xl font-bold text-green-400 mb-3">Entrepreneur Unschool</h3>
              <p className="text-gray-300">Every student launches and operates their own business, plus participates in a team fundraising venture. We teach students to leverage AI to build applications, marketing platforms, and real wealth.</p>
            </div>
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
              <div className="text-green-500 text-3xl mb-4">&#10003;</div>
              <h3 className="text-xl font-bold text-green-400 mb-3">College Recruitment Ready</h3>
              <p className="text-gray-300">Custom profile pages for every athlete featuring highlight films, verified stats, and personalized interview videos. The most high-tech homeschool recruiting platform in the country.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Shooting Technology */}
      <section className="py-16 px-4 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
            Shooting <span className="text-green-500">Technology</span> That Builds Elite Scorers
          </h2>
          <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Warriors Academy leverages the same shooting technology used by NBA players to develop elite scorers. Our athletes do not just practice, they train with data.
          </p>
          <div className="bg-gray-900 rounded-2xl p-8 md:p-12 border border-gray-700 mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Dr. Dish CT <span className="text-green-500">Rebounding Machine</span></h3>
            <p className="text-gray-300 text-lg mb-8">
              Every Warriors player is required to hit a weekly shot count on our Dr. Dish CT. Research shows it takes 20,000 correct repetitions for a jump shot to become automatic. With the Dr. Dish, players get up to 1,000 shots per hour compared to just 50-100 without a machine. Stephen Curry takes 500 shots per day to maintain his stroke. Our athletes train the same way.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-green-500">1,000</p>
                <p className="text-gray-400 text-sm">Shots per hour with Dr. Dish vs 50-100 without</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-green-500">8-12%</p>
                <p className="text-gray-400 text-sm">Shooting percentage increase for HS teams in one season</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-green-500">15-20%</p>
                <p className="text-gray-400 text-sm">Three-point accuracy improvement at the college level</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-green-500">20,000</p>
                <p className="text-gray-400 text-sm">Correct reps needed to make your shot automatic</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4">Real-time stat tracking with heatmaps, progress charts, and custom drills for every player.</p>
            <a href="https://www.drdishbasketball.com" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 underline text-sm">Learn more about Dr. Dish &#8594;</a>
          </div>
          <div className="bg-gray-900 rounded-2xl p-8 md:p-12 border border-gray-700">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Shoot 360 <span className="text-green-500">Immersive Training</span></h3>
            <p className="text-gray-300 text-lg mb-8">
              Shoot 360 just opened in Springfield, MO, and Warriors Academy athletes will train there as part of our program. The same technology Damian Lillard used to post 1,000 makes out of 1,090 shots. The same system the Golden State Warriors Basketball Academy uses. Shoot 360 is the world's leading immersive basketball training system with 60 locations worldwide.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="bg-gray-800 rounded-lg p-6">
                <div className="text-2xl mb-2">&#127919;</div>
                <h4 className="text-lg font-bold text-green-400 mb-2">Splash Meter</h4>
                <p className="text-gray-400 text-sm">Motion-tracking cameras measure arc, depth, and alignment on every single shot with instant feedback.</p>
              </div>
              <div className="bg-gray-800 rounded-lg p-6">
                <div className="text-2xl mb-2">&#128200;</div>
                <h4 className="text-lg font-bold text-green-400 mb-2">AI Shot Analytics</h4>
                <p className="text-gray-400 text-sm">Every rep is recorded, every improvement measured, all synced to the mobile app to track progress over time.</p>
              </div>
              <div className="bg-gray-800 rounded-lg p-6">
                <div className="text-2xl mb-2">&#127942;</div>
                <h4 className="text-lg font-bold text-green-400 mb-2">Proven Results</h4>
                <p className="text-gray-400 text-sm">Players report shooting percentage improvements of up to 18%. Three core training areas: shooting, passing, and ball handling.</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4">Shoot 360 Springfield | 4136 E. Kearney St. | Warriors athletes train with minimum 2 sessions per week.</p>
            <a href="https://www.shoot360.com" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 underline text-sm">Learn more about Shoot 360 &#8594;</a>
          </div>
        </div>
      </section>

      {/* Golf & Mental Toughness */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
            Our Secret Weapon for Your <span className="text-green-500">Mental Game</span>
          </h2>
          <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Caitlin Clark credits golf with sharpening her mental toughness, saying when she has a bad shot on the course, it is all on her with no teammates to lean on. Steph Curry famously hit the golf course after a tough playoff loss instead of the gym, then dropped 45 points the next game. Research from Frontiers in Psychology shows individual sports build self-efficacy and autonomous emotional regulation, while the APA found mental resilience can boost performance by 23 percent. That is why every Warriors athlete completes a mandatory golf season.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 text-center">
              <div className="text-4xl mb-4">&#9971;</div>
              <h3 className="text-xl font-bold text-green-400 mb-3">Mental Toughness</h3>
              <p className="text-gray-300">Neuroimaging research shows individual sport athletes develop enhanced prefrontal-limbic connectivity, acting as emotional circuit breakers that restore focus under pressure. Golf demands 4-plus hours of sustained concentration, training the same full-game awareness needed in the fourth quarter.</p>
            </div>
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 text-center">
              <div className="text-4xl mb-4">&#129309;</div>
              <h3 className="text-xl font-bold text-green-400 mb-3">Lifelong Networking</h3>
              <p className="text-gray-300">Golf is the sport of business. Our athletes learn a game they can play with friends, family, and future business partners for life.</p>
            </div>
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 text-center">
              <div className="text-4xl mb-4">&#127947;</div>
              <h3 className="text-xl font-bold text-green-400 mb-3">ATG Golf Performance</h3>
              <p className="text-gray-300">Our ATG training builds hip and spinal robustness, allowing greater clubhead speed with less strain. Better bodies, better swings.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Cheer & Stunt */}
      <section className="py-16 px-4 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
            Competitive <span className="text-green-500">Cheer & Stunt</span>
          </h2>
          <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Warriors Academy is more than basketball. Our competitive Cheer Squad builds strength, coordination, discipline, and teamwork. Athletes train alongside our basketball program in a Christ-centered environment with the same commitment to excellence.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900 rounded-xl p-8 border border-gray-700 text-center">
              <div className="text-4xl mb-4">&#128170;</div>
              <h4 className="text-lg font-bold text-green-400 mb-2">Strength & Agility</h4>
              <p className="text-gray-300">Stunting builds explosive power, balance, and body control that transfers to any sport.</p>
            </div>
            <div className="bg-gray-900 rounded-xl p-8 border border-gray-700 text-center">
              <div className="text-4xl mb-4">&#129504;</div>
              <h4 className="text-lg font-bold text-green-400 mb-2">Mental Discipline</h4>
              <p className="text-gray-300">Cheer requires precision under pressure, building focus and confidence in young athletes.</p>
            </div>
            <div className="bg-gray-900 rounded-xl p-8 border border-gray-700 text-center">
              <div className="text-4xl mb-4">&#127752;</div>
              <h4 className="text-lg font-bold text-green-400 mb-2">Team Unity</h4>
              <p className="text-gray-300">Our Cheer Squad performs at Warriors basketball games, building school spirit and community.</p>
            </div>
          </div>
          <p className="text-center text-gray-400 mt-8">Interested in joining the Cheer Squad? Select Cheer Squad on our contact form for more information.</p>
        </div>
      </section>

      {/* Entrepreneur Unschool Expanded */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
            The <span className="text-green-500">Entrepreneur Unschool</span>
          </h2>
          <p className="text-xl text-gray-300 text-center mb-4 max-w-3xl mx-auto italic">
            "Start children off on the way they should go, and even when they are old they will not turn from it." - Proverbs 22:6
          </p>
          <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Public schools teach kids to be employees. Warriors Academy teaches them to be owners. Every student launches a real business, learns AI and technology, and builds skills that create wealth beyond the court.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
              <h3 className="text-xl font-bold text-green-400 mb-3">Launch Your Own Business</h3>
              <p className="text-gray-300">Every student is required to launch and operate their own individual business, which directly impacts their grade. Students also participate in a team business used to fundraise for the school programs. This is not a simulation. It is real.</p>
            </div>
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
              <h3 className="text-xl font-bold text-green-400 mb-3">AI and Technology</h3>
              <p className="text-gray-300">Students learn to build applications, software, and SAAS platforms using artificial intelligence. We teach them to leverage technology to level the playing field and position themselves ahead of the curve for lifelong success.</p>
            </div>
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
              <h3 className="text-xl font-bold text-green-400 mb-3">Financial Literacy & Marketing</h3>
              <p className="text-gray-300">Our enrichment days cover financial literacy, marketing, sales, coding, trusts, cryptocurrency, and blockchain. Warriors students understand money, resources, and how to build real wealth.</p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-8">
            <div className="text-center">
              <p className="text-3xl font-bold text-green-500">60%</p>
              <p className="text-gray-400 text-sm">of teens prefer starting a business over a traditional job</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-green-500">69%</p>
              <p className="text-gray-400 text-sm">of teens have a business idea but do not know how to start</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-green-500">78%</p>
              <p className="text-gray-400 text-sm">of entrepreneurs say work experience beats a college degree</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-green-500">4-9x</p>
              <p className="text-gray-400 text-sm">more likely to start a venture after entrepreneurship training</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-green-500">24%</p>
              <p className="text-gray-400 text-sm">of 18-24 year olds are now active entrepreneurs, highest ever</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-green-500">300+</p>
              <p className="text-gray-400 text-sm">Acton Academy campuses in 31 states proving this model works</p>
            </div>
          </div>
          <div className="text-center">
            <Link href="/entrepreneur" className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition">
              Learn More About Our Entrepreneur Program
            </Link>
          </div>
        </div>
      </section>

      {/* Warriors Fight Song */}
      <section className="py-16 px-4 bg-gray-800">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            The <span className="text-green-500">Warriors Fight Song</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Every Warriors athlete gets their name featured in our custom-produced team fight song. This is our anthem, our identity, and our culture.
          </p>
          <div className="bg-gray-900 rounded-2xl p-6 border border-green-500/30 max-w-md mx-auto">
            <div className="flex items-center gap-4 mb-4">
              <div className="text-green-500 text-2xl">&#9835;</div>
              <div className="text-left">
                <p className="text-white font-bold text-lg">Warriors Fight Song</p>
                <p className="text-green-400 text-sm">Warriors Academy</p>
              </div>
            </div>
            <audio controls className="w-full" style={{filter: 'invert(1) hue-rotate(140deg)'}}>
              <source src="/warriors-fight-song.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
            <p className="text-gray-500 text-xs mt-3">Song coming soon. Check back for the official Warriors anthem.</p>
          </div>
        </div>
      </section>

      {/* Real Stats */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
            Homeschoolers <span className="text-green-500">Dominate</span> the Numbers
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-8">
            <div className="text-center">
              <p className="text-3xl font-bold text-green-500">65-80th</p>
              <p className="text-gray-400 text-sm">Percentile on standardized tests vs 50th for public school</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-green-500">1190</p>
              <p className="text-gray-400 text-sm">Average SAT score vs 1060 for public school students</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-green-500">87%</p>
              <p className="text-gray-400 text-sm">College acceptance rate vs 68% for public school</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-green-500">66.7%</p>
              <p className="text-gray-400 text-sm">4-year college graduation rate vs 57.5% public school</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-green-500">3.41</p>
              <p className="text-gray-400 text-sm">First-year college GPA vs 3.12 for public school students</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-green-500">87%</p>
              <p className="text-gray-400 text-sm">Of peer-reviewed studies show homeschoolers have superior social and emotional development</p>
            </div>
          </div>
          <p className="text-center text-gray-400">Homeschoolers achieve these results studying just 2-3 hours per day compared to 6-8 hours in public school.</p>
        </div>
      </section>

      {/* Elite Homeschooled Athletes */}
      <section className="py-16 px-4 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
            Elite Athletes Who Were <span className="text-green-500">Homeschooled</span>
          </h2>
          <p className="text-xl text-gray-300 text-center mb-12">The best athletes in the world escaped the classroom to train. So do Warriors.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-gray-900 rounded-xl p-6 text-center border border-gray-700">
              <h3 className="text-lg font-bold text-white">Tim Tebow</h3>
              <p className="text-gray-400 text-sm">Heisman Trophy Winner, NFL QB</p>
            </div>
            <div className="bg-gray-900 rounded-xl p-6 text-center border border-gray-700">
              <h3 className="text-lg font-bold text-white">Blake Griffin</h3>
              <p className="text-gray-400 text-sm">#1 NBA Draft Pick, 6x All-Star</p>
            </div>
            <div className="bg-gray-900 rounded-xl p-6 text-center border border-gray-700">
              <h3 className="text-lg font-bold text-white">Simone Biles</h3>
              <p className="text-gray-400 text-sm">Most Decorated US Gymnast, 11 Olympic Medals</p>
            </div>
            <div className="bg-gray-900 rounded-xl p-6 text-center border border-gray-700">
              <h3 className="text-lg font-bold text-white">Venus & Serena Williams</h3>
              <p className="text-gray-400 text-sm">23 Combined Grand Slam Titles</p>
            </div>
            <div className="bg-gray-900 rounded-xl p-6 text-center border border-gray-700">
              <h3 className="text-lg font-bold text-white">Shaun White</h3>
              <p className="text-gray-400 text-sm">3x Olympic Gold Medalist</p>
            </div>
            <div className="bg-gray-900 rounded-xl p-6 text-center border border-gray-700">
              <h3 className="text-lg font-bold text-white">Michelle Kwan</h3>
              <p className="text-gray-400 text-sm">5x World Champion Figure Skater</p>
            </div>
          </div>
        </div>
      </section>

      {/* Player Profiles CTA */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Meet Our <span className="text-green-500">Warriors</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Every player gets a professional profile page with highlight videos, season stats, bio, and everything college coaches need to evaluate and recruit our athletes.
          </p>
          <Link href="/player" className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition">
            View Player Profiles
          </Link>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-16 px-4 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
            Frequently Asked <span className="text-green-500">Questions</span>
          </h2>
          <div className="space-y-6">
            <div className="bg-gray-900 rounded-xl p-6 border border-gray-700">
              <h3 className="text-lg font-bold text-green-400 mb-2">Is this a real school? Will my child get a diploma?</h3>
              <p className="text-gray-300">Warriors Academy operates as a Missouri-compliant homeschool co-op. Missouri law requires parents to be responsible for at least 51 percent of their child's education. Parents handle core academics like math, English, reading, and science. Warriors Academy handles the enrichment: marketing, sales, AI, coding, finance, entrepreneurship, and elite athletic training. Students have a dedicated study hour each day to work on parent or teacher assignments. Parents can issue diplomas under Missouri homeschool law.</p>
            </div>
            <div className="bg-gray-900 rounded-xl p-6 border border-gray-700">
              <h3 className="text-lg font-bold text-green-400 mb-2">Does this model actually work? Who else is doing it?</h3>
              <p className="text-gray-300">This is not an experiment. Acton Academy has over 300 campuses in 31 states and 25-plus countries with students performing 3 to 5 grade levels above average. Alpha School delivers core academics via AI in two hours each morning and their students score in the top 1 to 2 percent nationally. Colossal Academy in Florida was featured in Forbes with students running live businesses alongside Shark Tank investors. Warriors Academy is bringing this proven model to Springfield, Missouri.</p>
            </div>
            <div className="bg-gray-900 rounded-xl p-6 border border-gray-700">
              <h3 className="text-lg font-bold text-green-400 mb-2">Can my child play sports at their public school?</h3>
              <p className="text-gray-300">Yes. Missouri Governor Mike Kehoe signed Senate Bill 63, the Homeschoolers Sports Act, into law on July 9, 2025. As of August 28, 2025, all public schools in Missouri are required to allow homeschool students to try out for sports teams and extracurricular activities. Warriors Academy students are welcome to play any sport that we do not offer at their local public school. This is a major advantage for multi-sport athletes who want the best of both worlds.</p>
            </div>
            <div className="bg-gray-900 rounded-xl p-6 border border-gray-700">
              <h3 className="text-lg font-bold text-green-400 mb-2">What is the parent's role versus the academy's role?</h3>
              <p className="text-gray-300">Parents are required to be responsible for at least 51 percent of their child's schooling. This means parents handle core subjects: math, English, reading, science, and social studies. Warriors Academy handles the enrichment that public schools completely ignore: marketing, sales, AI, coding, finance, entrepreneurship, and elite athletic training. Students have a dedicated study hour each day at the academy to work on parent or teacher assignments. This is still homeschooling. Parents are actively involved.</p>
            </div>
            <div className="bg-gray-900 rounded-xl p-6 border border-gray-700">
              <h3 className="text-lg font-bold text-green-400 mb-2">What if my child does not have a business idea yet?</h3>
              <p className="text-gray-300">That is completely normal. We offer a Digital Marketing Track as the perfect entry point. Students learn affiliate marketing, content creation, and digital advertising through school-managed accounts. As a Christ-centered school, students never manage their own social media. The school creates business accounts, AI assists with content creation, and all posts go through teacher and coach approval before publishing. Students learn the business strategy without ever scrolling a feed.</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link href="/faq" className="text-green-400 hover:text-green-300 underline text-lg">
              View All 22 Questions Answered
            </Link>
          </div>
        </div>
      </section>

      {/* Apply Section */}
      <section id="apply" className="py-20 px-4 bg-gradient-to-br from-green-900 via-gray-900 to-gray-900 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Become a Warrior?</h2>
          <p className="text-xl text-gray-300 mb-4 italic">
            "Whatever you do, work at it with all your heart, as working for the Lord." - Colossians 3:23
          </p>
          <p className="text-xl text-gray-300 mb-8">
            We honor God in everything we do on and off the court. If you are a dedicated athlete and family seeking Christ-centered mentorship, elite training, and real entrepreneurship education, Warriors Academy is your home.
          </p>
          <a href="mailto:missouriwarriorsbasketball@gmail.com" className="inline-block bg-white text-green-900 font-bold py-4 px-10 rounded-lg text-lg hover:bg-gray-100 transition">
            Contact Us to Apply
          </a>
          <p className="text-gray-400 mt-4">Springfield, Missouri | Limited spots available</p>
        </div>
      </section>
    </main>
  );
}
