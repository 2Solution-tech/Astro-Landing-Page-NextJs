import React from 'react';

const data = [
  {
    questions: 'Is astrology a safe solution to my love problem?',
    answers: 'Yes, astrology is the safest solution to solve your love problems. It is important to consult a real Astrologer who will help you solve your love problem.'
  },
  {
    questions: 'What can help me solve my love problem easily?',
    answers: 'Astrology is the perfect solution to love problems. If you are facing any problems in love, use astrology without asking yourself any questions, it will definitely solve your problems.'
  },
  {
    questions: 'How can I get my ex-lover back?',
    answers: 'You can use astrology based remedies to get your loved one back. Astrology is a wonderful solution that has helped married and unmarried couples in their love affairs.'
  },
  {
    questions: 'Is it possible to return love after separation?',
    answers: 'Yes, you can return love after a breakup. The use of astrology certainly helps a person to get the love of his life. So, use astrology for any love question.'
  },
  {
    questions: 'What famous Astrologers offer affordable solutions to love problems?',
    answers: 'Astrologer Aghori Baba Ji is a well-known Astrologer who offers solutions to love problems at affordable prices. Each person can get a suitable solution to their problems and return love to the relationship.'
  }
];


export function Faq() {
  return (
    <section className="px-2">
      <div className="mx-auto max-w-7xl py-10">
        <div>
          <div className="max-w-2xl">
            <h1 className="text-2xl font-bold text-black">Frequently Asked Questions</h1>
            <p className="mt-4 text-sm leading-6 tracking-wide text-gray-500">
            Welcome To Astrology Expert
            </p>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {data.map((item, i) => (
              <div key={i} className="rounded-md border border-black/30 p-6">
                <dt className="text-lg font-semibold leading-6 text-gray-900">{item.questions}</dt>
                <dd className="mt-2 text-sm text-gray-500">{item.answers}</dd>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
