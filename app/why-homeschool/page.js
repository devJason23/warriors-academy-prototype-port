import Link from "next/link";

export const metadata = {
  title: "Why Homeschool? | Warriors Academy",
  description: "The hidden history of American public education and why the homeschool model produces better athletes, better students, and better citizens.",
};

export default function WhyHomeschool() {
  return (
    <main className="bg-gray-900 text-white">
      {/* Hero */}
      <section className="py-20 px-4 text-center border-b border-gray-800">
        <div className="max-w-4xl mx-auto">
          <p className="text-green-400 font-bold tracking-widest text-sm mb-4">THE HIDDEN HISTORY</p>
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            The Public School System is Not <span className="text-green-500">Broken</span>.
            <br />
            It Is Working Exactly as <span className="text-green-500">Designed</span>.
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            For 150 years, American children have sat in rows, raised their hands, and asked permission to use the bathroom. This is not an accident. It is a system engineered in the 1800s to produce obedient soldiers, compliant factory workers, and loyal civil servants. Here is the full story, and why you need to get your athlete out.
          </p>
        </div>
      </section>

      {/* Section: Before Compulsory Schooling */}
      <section className="py-16 px-4 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <p className="text-green-400 font-bold tracking-widest text-sm mb-3">CHAPTER 1</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">America Was 99.6% Literate Before Public School</h2>
          <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
            <p>
              Before Massachusetts passed the first compulsory school attendance law in 1852, American literacy rates were among the highest in human history. In 1840, census data showed literacy rates above <span className="text-white font-semibold">99 percent</span> in states like Connecticut and Massachusetts. In the Revolutionary era, Thomas Paine's pamphlet "Common Sense" sold over 500,000 copies in a country of 3 million people, roughly the equivalent of a modern book selling 60 million copies.
            </p>
            <p>
              How did this happen without public schools, federal funding, or certified teachers? Families taught their children at home. Churches ran their own schools. Apprenticeships passed down trades. Communities built small one-room schoolhouses funded by local families. Children learned to read the Bible, run a farm, calculate interest, write letters, and think critically, all without a standardized curriculum or a superintendent.
            </p>
            <p className="text-xl text-white border-l-4 border-green-500 pl-6 py-2">
              The question is not "how will my child learn without public school?" The better question is, "how did Americans become so much less capable after we handed education over to the state?"
            </p>
          </div>
        </div>
      </section>

      {/* Section: The Prussian Blueprint */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <p className="text-green-400 font-bold tracking-widest text-sm mb-3">CHAPTER 2</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">The Prussian Military Blueprint</h2>
          <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
            <p>
              The American public school system was not designed by Americans for Americans. It was copied, almost line for line, from the Kingdom of Prussia.
            </p>
            <p>
              After Napoleon crushed Prussia at the Battle of Jena in 1806, the Prussian king decided his country had lost because its citizens were not obedient enough. The solution? A state-run education system that would produce three things: <span className="text-white font-semibold">obedient soldiers</span>, <span className="text-white font-semibold">compliant factory workers</span>, and <span className="text-white font-semibold">loyal civil servants</span>. The system was explicitly designed to break a child's will and replace it with allegiance to the state.
            </p>
            <p>
              In 1843, Massachusetts politician Horace Mann traveled to Prussia to study their schools. He came back an evangelist. Mann pushed hard for America to adopt the Prussian model, and Massachusetts became the first state to require compulsory attendance in 1852. By 1918, every state in the union had followed.
            </p>
            <p>
              The structures you recognize from your own school days are all Prussian inventions: <span className="text-white font-semibold">age-graded classrooms, bells between periods, raising your hand to speak, standardized testing, rows of desks, and the industrial school day</span>. None of this was designed to help children learn. It was designed to condition them to follow orders.
            </p>
            <p className="text-xl text-white border-l-4 border-green-500 pl-6 py-2">
              The Prussian education minister Johann Fichte wrote in 1807 that the purpose of schooling was to "fashion the person into such that he simply cannot will otherwise than you wish him to will." That was the design intent. It has not changed.
            </p>
          </div>
        </div>
      </section>

      {/* Section: The Industrial Takeover */}
      <section className="py-16 px-4 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <p className="text-green-400 font-bold tracking-widest text-sm mb-3">CHAPTER 3</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Rockefeller and Carnegie Finished the Job</h2>
          <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
            <p>
              By the early 1900s, American industrialists realized something important. They did not need a nation of thinkers. They needed a nation of workers who would show up on time, follow instructions, and not ask too many questions. They needed factory labor, and the Prussian school model was the perfect factory to make them.
            </p>
            <p>
              In 1903, John D. Rockefeller founded the General Education Board and poured the modern equivalent of billions of dollars into shaping American schools. In 1906, the General Education Board's own published mission statement, Occasional Letter Number One, said this out loud:
            </p>
            <blockquote className="bg-gray-900 border-l-4 border-red-500 p-6 my-6 italic text-gray-200 text-lg">
              "In our dream, we have limitless resources, and the people yield themselves with perfect docility to our molding hands... we shall not try to make these people or any of their children into philosophers or men of learning or of science. We have not to raise up from them authors, educators, poets or men of letters. We shall not search for embryo great artists, painters, musicians. Nor will we cherish even the humbler ambition to raise up from among them lawyers, doctors, preachers, statesmen, of whom we now have ample supply."
              <div className="not-italic text-sm text-red-400 mt-3">&mdash; General Education Board, 1906</div>
            </blockquote>
            <p>
              Read that again. The people funding and shaping American public education explicitly said they were not trying to produce scientists, thinkers, artists, or professionals. They wanted workers. They got what they paid for.
            </p>
            <p>
              Andrew Carnegie was right there with Rockefeller. The <span className="text-white font-semibold">Carnegie Unit</span>, invented in 1906, is still the foundation of American high school. It measures learning not by mastery but by <span className="text-white font-semibold">seat time</span>. Sit in a classroom for 120 hours, you get credit. That is the industrial factory metric, and we are still using it more than a century later.
            </p>
          </div>
        </div>
      </section>

      {/* Section: The Committee of Ten */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <p className="text-green-400 font-bold tracking-widest text-sm mb-3">CHAPTER 4</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">The Committee of Ten Locked It In</h2>
          <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
            <p>
              In 1892, the National Education Association formed the Committee of Ten. This small group of college presidents, school administrators, and academics met and essentially designed the modern American high school in a weekend. Four years of English. Three years of math. Standardized subject divisions. Credit hours. Uniform graduation requirements.
            </p>
            <p>
              The committee made these decisions without any research showing they produced better learners. They just picked what seemed orderly and efficient. Every American high school you have ever heard of still runs on the skeleton the Committee of Ten drew up in 1892. This is why your local high school and a school across the country look nearly identical. It was designed that way.
            </p>
          </div>
        </div>
      </section>

      {/* Section: John Taylor Gatto */}
      <section className="py-16 px-4 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <p className="text-green-400 font-bold tracking-widest text-sm mb-3">CHAPTER 5</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">A 30-Year Teacher Blew the Whistle</h2>
          <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
            <p>
              John Taylor Gatto taught in New York City public schools for 30 years. He was named <span className="text-white font-semibold">New York State Teacher of the Year</span> in 1991. Then, instead of giving a victory lap speech, he went on the attack and publicly resigned, saying he could no longer "hurt kids to make a living."
            </p>
            <p>
              Gatto wrote a series of books (most famously "Dumbing Us Down" and "The Underground History of American Education") exposing what he called the six real lessons every school teaches, regardless of what the curriculum says:
            </p>
            <ol className="space-y-3 text-gray-200 list-decimal list-inside pl-4">
              <li><span className="font-semibold text-white">Confusion.</span> Subjects are fragmented so no subject connects to any other.</li>
              <li><span className="font-semibold text-white">Class position.</span> You stay with your assigned group. Do not mix up.</li>
              <li><span className="font-semibold text-white">Indifference.</span> When the bell rings, stop caring about what you were just doing.</li>
              <li><span className="font-semibold text-white">Emotional dependency.</span> Your feelings are managed by the adult in charge.</li>
              <li><span className="font-semibold text-white">Intellectual dependency.</span> Wait to be told what to think.</li>
              <li><span className="font-semibold text-white">Provisional self-esteem.</span> Your worth is determined by grades and external approval.</li>
            </ol>
            <p className="pt-4">
              Gatto was not a conspiracy theorist. He was a decorated classroom teacher who saw it from the inside and decided the system was not broken. It was doing exactly what it was designed to do.
            </p>
          </div>
        </div>
      </section>

      {/* Section: The Current State */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-5xl mx-auto">
          <p className="text-green-400 font-bold tracking-widest text-sm mb-3">CHAPTER 6</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Where It Got Us</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-3xl">
            In 1983, the Reagan administration published <span className="text-white font-semibold">"A Nation at Risk,"</span> warning that American education was producing "a rising tide of mediocrity." The federal government has since spent trillions of dollars trying to fix it. Here is what the data looks like today:
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-red-900/20 rounded-xl p-6 border border-red-800">
              <p className="text-5xl font-black text-red-400 mb-2">45%</p>
              <p className="text-white font-semibold mb-1">of high school seniors</p>
              <p className="text-gray-300 text-sm">Test below basic in math on the NAEP, the nation's report card.</p>
            </div>
            <div className="bg-red-900/20 rounded-xl p-6 border border-red-800">
              <p className="text-5xl font-black text-red-400 mb-2">66%</p>
              <p className="text-white font-semibold mb-1">of 4th graders</p>
              <p className="text-gray-300 text-sm">Cannot read at a proficient level after five years of public schooling.</p>
            </div>
            <div className="bg-red-900/20 rounded-xl p-6 border border-red-800">
              <p className="text-5xl font-black text-red-400 mb-2">$1T+</p>
              <p className="text-white font-semibold mb-1">spent annually</p>
              <p className="text-gray-300 text-sm">On K-12 public education nationwide, with declining outcomes every decade.</p>
            </div>
            <div className="bg-red-900/20 rounded-xl p-6 border border-red-800">
              <p className="text-5xl font-black text-red-400 mb-2">26%</p>
              <p className="text-white font-semibold mb-1">chronically absent</p>
              <p className="text-gray-300 text-sm">Roughly 1 in 4 students miss 10 percent or more of the school year. Kids do not want to be there.</p>
            </div>
          </div>
          <p className="text-gray-300 text-lg leading-relaxed">
            The system now produces teenagers with record-high anxiety, record-low test scores, and record-breaking absenteeism. More money does not fix it. More rules do not fix it. More technology does not fix it. You cannot fix a system that is doing exactly what it was built to do.
          </p>
        </div>
      </section>

      {/* Section: Why Athletes Get Crushed */}
      <section className="py-16 px-4 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <p className="text-green-400 font-bold tracking-widest text-sm mb-3">CHAPTER 7</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Why the System Crushes Student Athletes</h2>
          <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
            <p>
              If the public school system is bad for the average kid, it is devastating for the serious athlete. Here is a typical day for a competitive student athlete in traditional school:
            </p>
            <ul className="space-y-3 text-gray-200">
              <li><span className="text-green-400 font-bold">6:30 AM</span> &mdash; Wake up exhausted</li>
              <li><span className="text-green-400 font-bold">7:30 AM to 3:00 PM</span> &mdash; 7 to 8 hours of classroom seat time</li>
              <li><span className="text-green-400 font-bold">3:30 PM to 5:30 PM</span> &mdash; After-school practice</li>
              <li><span className="text-green-400 font-bold">6:00 PM to 9:00 PM</span> &mdash; Dinner, homework, chores</li>
              <li><span className="text-green-400 font-bold">9:00 PM+</span> &mdash; Too tired to do anything meaningful. No family time. No training. No rest.</li>
            </ul>
            <p>
              This is not development. This is survival. Serious athletes need volume of reps, quality of training, mental recovery, film study, and fuel. Traditional school steals all of it. A homeschooled athlete can fit the same academic requirements into 2 to 3 focused hours a day and spend the rest of the day actually developing. That is not cheating. That is what elite performance has always required.
            </p>
          </div>
        </div>
      </section>

      {/* Section: The Homeschool Advantage */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-5xl mx-auto">
          <p className="text-green-400 font-bold tracking-widest text-sm mb-3">CHAPTER 8</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">The Homeschool Advantage Is Not an Opinion</h2>
          <p className="text-gray-300 text-lg mb-8">
            The data on homeschool outcomes is overwhelming and has been for decades. Homeschoolers do not just keep up. They dominate.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-green-900/20 rounded-xl p-6 border border-green-800">
              <p className="text-5xl font-black text-green-400 mb-2">87%</p>
              <p className="text-white font-semibold mb-1">college acceptance rate</p>
              <p className="text-gray-300 text-sm">Compared to 68 percent for public school students. Colleges actively recruit homeschoolers.</p>
            </div>
            <div className="bg-green-900/20 rounded-xl p-6 border border-green-800">
              <p className="text-5xl font-black text-green-400 mb-2">1190</p>
              <p className="text-white font-semibold mb-1">average SAT</p>
              <p className="text-gray-300 text-sm">Compared to 1060 for public school students. A 130-point advantage on the same test.</p>
            </div>
            <div className="bg-green-900/20 rounded-xl p-6 border border-green-800">
              <p className="text-5xl font-black text-green-400 mb-2">65th-80th</p>
              <p className="text-white font-semibold mb-1">percentile on standardized tests</p>
              <p className="text-gray-300 text-sm">Public school students average the 50th percentile. Homeschoolers outperform across every subject.</p>
            </div>
            <div className="bg-green-900/20 rounded-xl p-6 border border-green-800">
              <p className="text-5xl font-black text-green-400 mb-2">3.41</p>
              <p className="text-white font-semibold mb-1">first-year college GPA</p>
              <p className="text-gray-300 text-sm">Compared to 3.12 for public school graduates. Homeschoolers finish stronger than they started.</p>
            </div>
          </div>
          <p className="text-gray-300 text-lg leading-relaxed">
            This is not a fringe result. It is the consensus of research from the National Home Education Research Institute, the U.S. Department of Education, and multiple peer-reviewed studies going back 30 years.
          </p>
        </div>
      </section>

      {/* Section: Socialization Myth */}
      <section className="py-16 px-4 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <p className="text-green-400 font-bold tracking-widest text-sm mb-3">CHAPTER 9</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">The Socialization Myth, Debunked</h2>
          <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
            <p>
              "What about socialization?" is the first question every homeschool parent hears. It is also the easiest one to answer.
            </p>
            <p>
              <span className="text-white font-semibold">87 percent of peer-reviewed studies</span> on homeschool socialization found that homeschooled children perform significantly better than public school students in social, emotional, and psychological development. They have fewer behavioral issues, higher self-esteem, more diverse social relationships across age groups, and stronger communication skills with adults.
            </p>
            <p>
              Here is the reality check: a public school classroom is one of the <span className="text-white font-semibold">most unnatural social environments ever engineered</span>. Thirty kids of the exact same age, locked in a room for 7 hours with one adult, with bells telling them when to speak and when to be silent. Nowhere else in life will your child ever face that environment again. Not in college, not at work, not in ministry, not in family life.
            </p>
            <p>
              Homeschoolers interact with people of all ages: parents, coaches, mentors, younger and older teammates, business owners, pastors, community members. That is real socialization. That is what life actually looks like after age 18.
            </p>
          </div>
        </div>
      </section>

      {/* Section: The Homeschool Boom */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <p className="text-green-400 font-bold tracking-widest text-sm mb-3">CHAPTER 10</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">America is Voting with Its Feet</h2>
          <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
            <p>
              Homeschooling is the <span className="text-white font-semibold">fastest-growing segment of American education</span>. More than 3.7 million children were homeschooled in the 2024-25 school year, roughly triple the number from a decade ago. Families of every race, religion, and income level are pulling their kids out.
            </p>
            <p>
              Parents are not leaving because they are afraid of the world. They are leaving because they finally looked at what the public school system was built to do and decided they wanted something better for their kids. You are not alone. You are early.
            </p>
          </div>
        </div>
      </section>

      {/* Section: Elite Athletes */}
      <section className="py-16 px-4 bg-gray-800">
        <div className="max-w-5xl mx-auto">
          <p className="text-green-400 font-bold tracking-widest text-sm mb-3">CHAPTER 11</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Elite Athletes Who Were Homeschooled</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="bg-gray-900 rounded-xl p-5 border border-gray-700">
              <h3 className="text-xl font-bold text-green-400 mb-1">Tim Tebow</h3>
              <p className="text-gray-400 text-sm">Heisman Trophy winner, two-time national champion at Florida, NFL first-round pick. The "Tim Tebow law" exists because his family homeschooled him while he competed in Florida high school football.</p>
            </div>
            <div className="bg-gray-900 rounded-xl p-5 border border-gray-700">
              <h3 className="text-xl font-bold text-green-400 mb-1">Simone Biles</h3>
              <p className="text-gray-400 text-sm">7-time Olympic medalist. Most decorated gymnast in history. Homeschooled starting in 6th grade so she could train at an elite level without fighting the traditional school schedule.</p>
            </div>
            <div className="bg-gray-900 rounded-xl p-5 border border-gray-700">
              <h3 className="text-xl font-bold text-green-400 mb-1">Blake Griffin</h3>
              <p className="text-gray-400 text-sm">6-time NBA All-Star. Homeschooled through a co-op in Oklahoma City alongside his brother Taylor, then played college basketball at Oklahoma before being drafted No. 1 overall.</p>
            </div>
            <div className="bg-gray-900 rounded-xl p-5 border border-gray-700">
              <h3 className="text-xl font-bold text-green-400 mb-1">Venus &amp; Serena Williams</h3>
              <p className="text-gray-400 text-sm">Combined 30 Grand Slam singles titles. Homeschooled by their father Richard so they could train relentlessly. The entire global tennis world has been chasing them for 25 years.</p>
            </div>
            <div className="bg-gray-900 rounded-xl p-5 border border-gray-700">
              <h3 className="text-xl font-bold text-green-400 mb-1">Allonzo Trier</h3>
              <p className="text-gray-400 text-sm">McDonald's All-American, Arizona Wildcat, NBA guard. Homeschooled to maximize basketball development during his high school years.</p>
            </div>
            <div className="bg-gray-900 rounded-xl p-5 border border-gray-700">
              <h3 className="text-xl font-bold text-green-400 mb-1">Moriah Jefferson</h3>
              <p className="text-gray-400 text-sm">Four-time NCAA champion at UConn, WNBA draft pick. Another homeschool product of the elite homeschool basketball pipeline.</p>
            </div>
            <div className="bg-gray-900 rounded-xl p-5 border border-gray-700">
              <h3 className="text-xl font-bold text-green-400 mb-1">Justin Jackson</h3>
              <p className="text-gray-400 text-sm">McDonald's All-American, national champion at UNC, NBA first-round pick. Homeschooled for the same reason: time, focus, and training freedom.</p>
            </div>
            <div className="bg-gray-900 rounded-xl p-5 border border-gray-700">
              <h3 className="text-xl font-bold text-green-400 mb-1">Taylor Swift</h3>
              <p className="text-gray-400 text-sm">Not an athlete, but proof of the model. Homeschooled in high school so she could pursue her craft full-time. Now the most successful recording artist in history.</p>
            </div>
            <div className="bg-gray-900 rounded-xl p-5 border border-gray-700">
              <h3 className="text-xl font-bold text-green-400 mb-1">Countless Others</h3>
              <p className="text-gray-400 text-sm">Michelle Kwan, Bethany Hamilton, Jason Taylor, Michael Chang, Christopher Paolini. Elite performers across every field lean on flexible schedules to master their craft.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-green-900/40 via-gray-900 to-gray-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
            Your Athlete Deserves <span className="text-green-500">Better</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            The public school system was built to make compliant workers, not champions. Warriors Academy was built for the opposite. Elite basketball training. Real entrepreneurship. Christ-centered formation. 4 focused days a week with parents still leading the core subjects at home. This is the model the world's best athletes and entrepreneurs have always used.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition">
              See How Warriors Academy Works
            </Link>
            <Link href="/faq" className="bg-gray-800 hover:bg-gray-700 text-white border border-gray-600 font-bold py-4 px-8 rounded-lg text-lg transition">
              Read the FAQ
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
