import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <section className="md:text-xl">
      <section className="w-full bg-gray-50  border-y text-slate-700 py-16">
        <div className="max-w-5xl mx-auto px-6 space-y-6">
          <p className="leading-relaxed">
            Charttix began with a simple idea: managing your student finances
            shouldn{"’"}t be a confusing or stressful experience. Students
            juggle pocket money, part-time income, rent, food, tuition, and
            small everyday expenses that add up quickly—yet most finance apps
            are built for adults with salaries and mortgages, not student
            realities.
          </p>

          <p className="leading-relaxed">
            The app was created by a student who felt these struggles firsthand.
            The goal was to build something simple, fast, and genuinely
            helpful—an app that gives clear insights without pressure or
            complicated terms. During our beta, Charttix remains completely free
            to use, with no fees and no credit card required.
          </p>
        </div>
      </section>

      <section className="w-full bg-white text-slate-700 py-16">
        <div className="max-w-5xl mx-auto px-6 space-y-6">
          <p className="leading-relaxed">
            Our mission is to make financial management simple and stress-free
            for every student, whether you’re living on campus, studying abroad,
            or balancing classes with a part-time job. We believe good habits
            start early, small savings add up over time, and financial clarity
            builds real confidence.
          </p>

          <p className="leading-relaxed">
            Charttix is built as a student-first financial companion. It helps
            you track where your money goes, understand your spending patterns,
            set budgets you can actually stick to, avoid end-of-month panic, and
            make smarter everyday decisions—all without overwhelming features or
            financial jargon.
          </p>
        </div>
      </section>

      <section className="w-full bg-gray-50 border-y text-slate-700 py-16">
        <div className="max-w-5xl mx-auto px-6 space-y-6">
          <p className="leading-relaxed">
            Unlike generic finance apps built for everyone, Charttix is
            intentionally designed for college and university students,
            including those managing allowances, studying abroad, or earning
            through part-time work. Every part of the experience—from the
            interface to the insights—is shaped around real student life.
          </p>

          <p className="leading-relaxed">
            Over the coming months, we’re working on smarter insights, a more
            powerful dashboard, and budget tools that feel natural rather than
            overwhelming. Premium features will eventually arrive, but always
            with student-friendly pricing.
          </p>
        </div>
      </section>

      <section className="w-full bg-slate-950 text-slate-50 py-28 border-t border-slate-800">
        <div className="max-w-5xl mx-auto px-6">
          <div className="space-y-6 text-left">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Join us early.
            </h2>

            <p className="text-slate-400 max-w-xl leading-relaxed">
              Charttix is free during beta as we build the most student-friendly
              budgeting experience. Your feedback shapes the product — and the
              future of student finance.
            </p>

            <div className="flex flex-col justify-center gap-4">
              <Button className="cursor-pointer hover:bg-slate-300 bg-slate-100 w-max text-slate-900 font-medium px-7 py-3 rounded-lg transition">
                Start for free →
              </Button>

              <span className="text-xs text-slate-500">
                No credit card required • Free during beta
              </span>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
