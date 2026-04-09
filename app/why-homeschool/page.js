import Link from "next/link";

export const metadata = {
  title: "Why Homeschool? | Warriors Academy",
  description: "A deep dive into the history of the American school system and why homeschooling is the superior choice for student athletes.",
};

export default function WhyHomeschool() {
  return (
    <main className="bg-gray-900 text-white">
      {/* Hero */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black mb-6">
            Why <span className="text-green-500">Homeschool</span>?
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The American education system was not designed for your child. It was designed for factories. Here is the full story of how we got here and why homeschooling is the way forward for serious athletes.
          </p>
        </div>
      </section>

      {/* Timeline / History */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">The History of American Public Education</h2>

          <div className="space-y-12">
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-xl font-bold text-green-400">1830s-1850s: The Common School Movement</h3>
              <p className="text-gray-300 mt-2">
                Horace Mann championed the common school movement in Massachusetts, pushing for standardized, state-funded education. The goal was civic unity and basic literacy for factory workers during the Industrial Revolution. Schools were designed to produce obedient, punctual workers — not independent thinkers or athletes.
              </p>
            </div>

            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-xl font-bold text-green-400">1892: The Committee of Ten</h3>
              <p className="text-gray-300 mt-2">
                A group of educators standardized the high school curriculum into the rigid subject-based system we still use today. This committee decided that every student should learn the same subjects in the same way, regardless of their individual talents, goals, or career aspirations.
              </p>
            </div>

            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-xl font-bold text-green-400">Early 1900s: The Factory Model Takes Hold</h3>
              <p className="text-gray-300 mt-2">
                Inspired by Prussian military education and Frederick Taylor's factory efficiency principles, American schools adopted bells, rigid schedules, age-based grouping, and assembly-line teaching. Students were sorted, graded, and moved through the system like products on a conveyor belt. This model persists largely unchanged today.
              </p>
            </div>

            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-xl font-bold text-green-400">1950s-1970s: Expansion Without Innovation</h3>
              <p className="text-gray-300 mt-2">
                Post-war America expanded public education massively but never questioned the fundamental model. More buildings, more students, more standardized tests — but the same factory approach. Meanwhile, the economy was shifting from manufacturing to knowledge and service-based work.
              </p>
            </div>

            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-xl font-bold text-green-400">1983: A Nation at Risk</h3>
              <p className="text-gray-300 mt-2">
                The landmark report declared American education was failing. The response? More standardization, more testing, more seat time. No one questioned whether the 130-year-old factory model itself was the problem.
              </p>
            </div>

            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-xl font-bold text-green-400">2001-Present: No Child Left Behind & Beyond</h3>
              <p className="text-gray-300 mt-2">
                Federal mandates doubled down on standardized testing and rigid curriculum requirements. Schools became focused on test scores rather than actual learning and development. Student athletes were forced into an increasingly rigid system that left zero room for serious athletic training.
              </p>
            </div>

            <div className="border-l-4 border-red-500 pl-6">
              <h3 className="text-xl font-bold text-red-400">Today: The Breaking Point</h3>
              <p className="text-gray-300 mt-2">
                Students spend 6-8 hours per day in classrooms, plus homework, leaving student athletes with almost no time for dedicated training. Mental health issues are skyrocketing. Engagement is at historic lows. The system designed for 1890s factory workers is failing 2020s students in every measurable way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Fails Athletes */}
      <section className="bg-gray-800 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Why This System <span className="text-red-500">Fails</span> Student Athletes</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-700 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3">Time Poverty</h3>
              <p className="text-gray-300">Between 7+ hours of school, homework, and commute time, student athletes are left with maybe 1-2 hours for training. Elite development requires 3-4+ hours of focused practice daily. The math simply does not work in the traditional system.</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3">Physical Exhaustion</h3>
              <p className="text-gray-300">Sitting for 7-8 hours creates physical fatigue, poor posture, and reduced athletic performance. By the time practice starts, athletes are mentally and physically drained from a day of passive sitting.</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3">No Personalization</h3>
              <p className="text-gray-300">Every student gets the same schedule, same pace, same approach. An athlete who excels at math but needs more time in reading gets no flexibility. The system treats all students as identical.</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3">Zero Entrepreneurship</h3>
              <p className="text-gray-300">Public schools teach students to be employees, not entrepreneurs. Athletes have short career windows and need financial literacy and business skills that the traditional system completely ignores.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Homeschool Advantage */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">The <span className="text-green-500">Homeschool</span> Advantage for Athletes</h2>
          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="text-green-500 text-2xl font-bold mt-1">01</div>
              <div>
                <h3 className="text-xl font-bold">Flexible Schedule</h3>
                <p className="text-gray-300">Complete academics in focused 4-5 hour blocks, freeing up the rest of the day for elite-level basketball training, film study, and skill development.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="text-green-500 text-2xl font-bold mt-1">02</div>
              <div>
                <h3 className="text-xl font-bold">Personalized Learning</h3>
                <p className="text-gray-300">Every student learns at their own pace with curriculum tailored to their strengths and needs. No waiting for 30 other students to catch up. No being held back by a rigid class schedule.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="text-green-500 text-2xl font-bold mt-1">03</div>
              <div>
                <h3 className="text-xl font-bold">Real-World Education</h3>
                <p className="text-gray-300">Instead of memorizing facts for standardized tests, students learn entrepreneurship, financial literacy, leadership, and practical skills they will actually use in life.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="text-green-500 text-2xl font-bold mt-1">04</div>
              <div>
                <h3 className="text-xl font-bold">Missouri Compliant</h3>
                <p className="text-gray-300">Missouri homeschool law allows parents to educate their children with flexibility. Our co-op model meets all 1,000 hours of instruction requirements while covering required subjects including math, reading, social studies, English, and science.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="text-green-500 text-2xl font-bold mt-1">05</div>
              <div>
                <h3 className="text-xl font-bold">Proven Results</h3>
                <p className="text-gray-300">Homeschooled students consistently outperform public school peers on standardized tests, have higher college graduation rates, and report greater life satisfaction. For athletes, the additional training time can be the difference between playing in college or not.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-800 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Homeschooling by the Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl font-black text-green-500">3.7M</div>
              <p className="text-gray-400 mt-2">Students homeschooled in the US</p>
            </div>
            <div>
              <div className="text-4xl font-black text-green-500">15-30%</div>
              <p className="text-gray-400 mt-2">Higher test scores vs public school averages</p>
            </div>
            <div>
              <div className="text-4xl font-black text-green-500">67%</div>
              <p className="text-gray-400 mt-2">College graduation rate vs 59% national average</p>
            </div>
            <div>
              <div className="text-4xl font-black text-green-500">3-4hrs</div>
              <p className="text-gray-400 mt-2">Extra training time available daily</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Ready to Break Free from the <span className="text-red-500">Factory Model</span>?</h2>
          <p className="text-gray-300 text-lg mb-8">
            Warriors Academy gives your athlete the time, training, and education they deserve. Stop fitting your child into a system that was never designed for them.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#apply" className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition">
              Apply Now
            </Link>
            <Link href="/" className="border-2 border-gray-600 text-gray-300 hover:border-green-500 hover:text-green-400 font-bold py-4 px-8 rounded-lg text-lg transition">
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
