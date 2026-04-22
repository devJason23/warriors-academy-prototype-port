import Link from "next/link";

export const metadata = {
  title: "FAQ | Warriors Academy",
  description: "Frequently asked questions about Warriors Academy homeschool athletic program in Springfield, Missouri.",
};

export default function FAQ() {
  const faqs = [
    {
      q: "Is this a real school? Will my child get a diploma?",
      a: "Warriors Academy operates as a Missouri-compliant homeschool co-op. Missouri law requires parents to be responsible for at least 51 percent of their child's education. Parents handle core academics like math, English, reading, and science at home. Warriors Academy handles the enrichment: marketing, sales, AI, coding, finance, entrepreneurship, and elite athletic training. Parents can issue diplomas under Missouri homeschool law."
    },
    {
      q: "Is this really homeschooling if my child attends your academy 4 days a week?",
      a: "Yes, absolutely. Under Missouri homeschool law, what matters is that parents are responsible for at least 51 percent of their child's education and that the child receives the required hours of core instruction each year. Parents remain the primary educators, teaching core subjects like math, English, reading, science, and social studies at home. Warriors Academy handles enrichment: entrepreneurship, marketing, business, finance, AI, coding, and elite athletic training. Parents are actively involved in their child's education every single day. This is still homeschooling. We just give your athlete access to world-class training and real-world skills that public schools completely ignore."
    },
    {
      q: "Can my child play sports at their public school?",
      a: "Yes. Missouri Governor Mike Kehoe signed Senate Bill 63, the Homeschoolers Sports Act, into law on July 9, 2025. This is Missouri's version of the Tim Tebow law. As of August 28, 2025, all public schools in Missouri are required to allow homeschool students to try out for sports teams and extracurricular activities. Students are treated the same as any enrolled student and must meet the same eligibility standards. Warriors Academy students are welcome to play any sport that we do not offer at their local public school. This is a major advantage for multi-sport athletes who want the best of both worlds."
    },
    {
      q: "What ages do you accept?",
      a: "Warriors Academy serves student athletes ages 10u through 18u. Our program is designed for athletes in that age range who are serious about competitive basketball, entrepreneurship, and Christ-centered development. Contact us to discuss your athlete's specific situation."
    },
    {
      q: "How does the 4-day schedule work?",
      a: "Each academy day runs Monday through Thursday and includes 2-3 hours of enrichment instruction covering entrepreneurship, business, marketing, finance, AI, and coding, with part of that time dedicated to students working on their own businesses. The rest of the day is focused athletic training and basketball-specific development. We also build in a dedicated study hall hour so students have guaranteed time on-site to knock out core academics if they need it. If your athlete is caught up on their core work at home, that hour becomes flex time they can use for extra reps on the court, deeper work on their business, or the fundraiser enterprise. Parents remain responsible for core academics (math, English, reading, science, social studies) under Missouri homeschool law, but the study hour gives families breathing room so the academy day works around real life."
    },
    {
      q: "Do colleges accept homeschooled athletes?",
      a: "Absolutely. Homeschoolers have an 87 percent college acceptance rate compared to 68 percent for public school students. Our custom recruiting profile pages with highlight films, verified stats, and interview videos give our athletes a significant edge. Multiple NCAA Division I athletes were homeschooled including Tim Tebow, Blake Griffin, and Simone Biles."
    },
    {
      q: "Does this model actually work? Who else is doing it?",
      a: "This is not an experiment. Acton Academy has over 300 campuses in 31 states and 25-plus countries, with students performing 3 to 5 grade levels above the national average. Alpha School delivers core academics via AI in two hours each morning so athletes train all afternoon, and their students score in the top 1 to 2 percent nationally. Colossal Academy in Florida was featured in Forbes with students running live businesses alongside Shark Tank investors. Warriors Academy is bringing this proven model to Springfield, Missouri."
    },
    {
      q: "Do I need to be a certified teacher to homeschool my child?",
      a: "No. Missouri has zero teacher qualification requirements for homeschool parents. There is no certification, degree, or training required. Missouri is one of the most homeschool-friendly states in the country. You do not need to notify anyone, submit to testing, or seek approval. You simply need to provide 1,000 hours of instruction per year with at least 600 hours in core subjects: reading, math, social studies, language arts, and science."
    },
    {
      q: "What is the parent's role versus the academy's role?",
      a: "Parents are required to be responsible for at least 51 percent of their child's schooling. This means parents handle core subjects at home: math, English, reading, science, and social studies. Warriors Academy handles the enrichment that public schools completely ignore: marketing, sales, AI, coding, finance, trusts, cryptocurrency, blockchain, entrepreneurship, plus elite athletic training. This is still homeschooling. Parents remain the primary educators and are actively involved in their child's learning every single day."
    },
    {
      q: "How is the program structured and what about discipline?",
      a: "Warriors Academy runs a tight ship. Academy days include 2-3 hours of enrichment instruction (entrepreneurship, business, marketing, finance, AI, coding) with time carved out for students to work on their own businesses, a dedicated study hall hour for core academics (or flex work if they are already caught up), and focused athletic training and basketball-specific development blocks. Parents stay responsible for core academics at home under Missouri homeschool law. We hold our athletes to high standards of conduct, respect, and effort. This is a Christ-centered program and we expect our students to carry themselves with discipline and integrity on and off the court."
    },
    {
      q: "What is the ATG training program?",
      a: "ATG stands for Athletic Truth Group, a knees-over-toes joint-first training system developed by Ben Patrick. Warriors Academy is the only ATG-certified training hub within a 200-mile radius. This system bulletproofs knees, ankles, and the posterior chain to increase vertical jump and speed while dramatically reducing non-contact injuries."
    },
    {
      q: "What does the entrepreneur program involve?",
      a: "Every student is required to launch and operate their own real business, which directly impacts their grade. Students also participate in a team business to fundraise for the school. Our curriculum covers AI and app development, financial literacy, marketing, sales, and coding. Students learn to leverage technology and build real wealth."
    },
    {
      q: "What if my child does not have a business idea yet?",
      a: "That is completely normal and we have a solution. We offer a Digital Marketing Track as the perfect entry point. Students learn affiliate marketing, content creation, and digital advertising through school-managed accounts. As a Christ-centered school, students never manage their own social media. The school creates business accounts, AI assists with content creation, and all posts go through teacher and coach approval before publishing. Students learn the business strategy without ever scrolling a feed."
    },
    {
      q: "Why golf? What does that have to do with basketball?",
      a: "Everything. Caitlin Clark credits golf with sharpening her mental toughness, saying when she has a bad shot on the course it is all on her with no teammates to lean on. Steph Curry famously hit the golf course after a tough playoff loss instead of the gym, then dropped 45 points the next game. Research from Frontiers in Psychology shows individual sports build self-efficacy and autonomous emotional regulation, while the APA found mental resilience can boost performance by 23 percent. Golf demands 4-plus hours of sustained concentration, training the same full-game awareness needed in the fourth quarter. That is why every Warriors athlete completes a mandatory golf season."
    },
    {
      q: "What is the difference between Dr. Dish and Shoot 360?",
      a: "Both are elite shooting technology, but they serve different purposes. The Dr. Dish CT is our in-house rebounding machine that allows players to get up to 1,000 shots per hour compared to just 50 to 100 without a machine. It is used for high-volume repetition and developing muscle memory. Shoot 360 is an immersive training facility at 4136 E. Kearney St. in Springfield that uses motion-tracking cameras and AI analytics to measure arc, depth, and alignment on every shot. Our athletes train at Shoot 360 with a minimum of 2 sessions per week. Dr. Dish builds volume and consistency. Shoot 360 builds precision and analytics."
    },
    {
      q: "Is this program only for basketball players?",
      a: "While basketball is our primary sport, we also offer a competitive Cheer and Stunt program. Every student also completes a mandatory golf season to build mental toughness. The entrepreneurship and academic curriculum benefits any student regardless of sport. With Missouri's new Homeschoolers Sports Act, our athletes can also play any sport their local public school offers that Warriors Academy does not."
    },
    {
      q: "How do homeschoolers do compared to public school students academically?",
      a: "Homeschoolers consistently outperform public school peers. They score in the 65th to 80th percentile on standardized tests versus the 50th percentile for public school. Average SAT scores are 1190 versus 1060. College acceptance rates are 87 percent versus 68 percent. And 87 percent of peer-reviewed studies show homeschoolers have superior social and emotional development."
    },
    {
      q: "What about socialization?",
      a: "The socialization myth has been thoroughly debunked. 87 percent of peer-reviewed studies prove homeschool students perform significantly better than public school peers in social, emotional, and psychological development. Our athletes train together daily, compete in tournaments, participate in community outreach and mission projects, and build deep relationships through shared faith and competition. They are not isolated. They are surrounded by like-minded athletes and mentors."
    },
    {
      q: "How does film study work in your program?",
      a: "Film study is a core part of our athletic development. Our 4-day hybrid model dedicates time specifically to reviewing game film, breaking down plays, and helping athletes visually understand what coaches are asking them to do. Research shows that visual learning through film review significantly accelerates player development and game IQ."
    },
    {
      q: "What is Shoot 360 and how do your athletes use it?",
      a: "Shoot 360 is the world's leading immersive basketball training system with 60 locations worldwide. It just opened in Springfield, MO, and our athletes train there at least 2 sessions per week. The system uses motion-tracking cameras and AI analytics to measure arc, depth, and alignment on every shot. Players report shooting percentage improvements of up to 18 percent. It is the same technology Damian Lillard and the Golden State Warriors Basketball Academy use."
    },
    {
      q: "Is Warriors Academy a Christian program?",
      a: "Yes. Everything we do is rooted in faith. We are a Christ-centered program that blends spiritual growth with athletic achievement. Players are required to apply biblical principles in their daily lives and participate in community outreach and mission projects. We honor God in everything we do on and off the court."
    },
    {
      q: "What is HoopSmith?",
      a: "HoopSmith is our proprietary software platform for film review, game statistics, and player analytics. It gives coaches and players access to detailed performance data, highlight clips, and recruiting-ready content. HoopSmith is a key part of how we develop elite athletes and prepare them for the next level."
    },
    {
      q: "What is the Big Brother Mentor Program?",
      a: "Our Big Brother program is a development engine where older athletes take younger players under their wing and teach them the game from their own perspective. To qualify, older players must pass strict written AND on-court performance tests to earn specific skill badges: Knockdown Shooter, Lockdown Defender, Rebounding, and Court IQ. Each badge is earned independently. Once a player earns a badge, younger athletes can specifically book sessions with that Big Brother to develop that exact skill. Research shows that teaching a skill forces you to process it at a far deeper level than simply practicing it, so our older athletes are not just giving back, they are locking in their own mastery."
    },
    {
      q: "How much does the program cost?",
      a: "Contact us directly for current tuition and fee information. We work with families to make our program accessible. Our athletes also participate in team fundraising businesses as part of the entrepreneur curriculum, which helps offset costs."
    }
  ];

  return (
    <main className="bg-gray-900 text-white">
      <section className="py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black mb-6">
            Frequently Asked <span className="text-green-500">Questions</span>
          </h1>
          <p className="text-xl text-gray-300">Everything you need to know about Warriors Academy.</p>
        </div>
      </section>

      <section className="py-8 px-4 pb-20">
        <div className="max-w-4xl mx-auto space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <h3 className="text-lg font-bold text-green-400 mb-2">{faq.q}</h3>
              <p className="text-gray-300">{faq.a}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a href="mailto:missouriwarriorsbasketball@gmail.com" className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition">
            Still Have Questions? Contact Us
          </a>
        </div>
      </section>
    </main>
  );
}
