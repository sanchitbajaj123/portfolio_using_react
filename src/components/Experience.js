import React from 'react';

const experience = [
  {
    role: 'Software Development Engineer I (SDE I)',
    company: 'Infinite Locus',
    location: 'Gurgaon, India',
    period: 'Sep 2025 – Present',
    highlights: [
      {
        label: 'Backend and API development',
        text: 'Owned the backend of the Ten X You e-commerce platform — wrote GraphQL queries and mutations against Saleor in Node.js for catalogue, cart and checkout, with Express REST endpoints and FastAPI services alongside.',
      },
      {
        label: 'Team leadership',
        text: 'Led 5 developer interns — assigning modules, reviewing pull requests and unblocking delivery on 3 concurrent client projects.',
      },
      {
        label: 'Platform engineering',
        text: 'Developed server-side business logic and scheduled jobs in Python on the Frappe framework, shipping custom applications on the ERPNext system spanning sales, procurement, inventory, POS, HRMS, healthcare and CRM for 6 client deployments.',
      },
      {
        label: 'Third-party integrations',
        text: 'Connected Shopify, Saleor, Amazon SP-API and OMS platforms over REST and GraphQL using Node.js and Python services with JSON mapping and OAuth token handling, removing ~80% of manual order entry.',
      },
      {
        label: 'Event-driven architecture',
        text: 'Engineered Apache Kafka producers and consumers decoupling order and inventory sync between internal systems and external platforms; retry and replay cut peak-load sync failures ~60%.',
      },
      {
        label: 'Custom dropship model',
        text: 'Delivered a dropship fulfilment model as a custom Frappe application in Python — vendor-owned inventory, routed purchase orders, split fulfilment — a workflow the ERPNext system lacks natively, cutting vendor turnaround from days to hours.',
      },
      {
        label: 'Quick-commerce allocation',
        text: 'Architected polygon-level serviceability and order-allocation logic for FreshTerra and Fixly, routing orders to the nearest fulfilment centre for sub-hour delivery windows.',
      },
      {
        label: 'Courier integrations',
        text: 'Automated shipment booking, AWB generation and asynchronous status webhooks over 4 logistics partners (Shiprocket, Shadowfax, ClickPost, Zippee), cutting per-order handling from ~5 minutes to 30 seconds.',
      },
      {
        label: 'AI integration',
        text: 'Integrated MedGemma and Gemini models into the Beyond Age healthcare platform to auto-summarise patient reports from PDFs and images, reducing clinician review from ~10 minutes to under 1.',
      },
      {
        label: 'Production operations',
        text: 'Managed deployments, environment configuration and monitoring on AWS and GCP for 6 production sites, running release cycles and post-deployment support.',
      },
      {
        label: 'Data engineering',
        text: 'Implemented a three-way reconciliation engine in Python on the ATB platform matching records across three systems — 97.7% agreement over 26,335 rows.',
      },
    ],
  },
];

const Experience = () => {
  return (
    <section className='mt-40 min-h-[85vh] lg:min-h-[78vh]' id='experience'>
      <div className='container mx-auto'>
        <h2 className='text-[50px] mb-12 font-bold text-accent text-center'>Experience</h2>

        {experience.map((job) => (
          <div
            key={job.role}
            className='max-w-4xl mx-auto bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-6 lg:p-10'
          >
            <div className='flex flex-col lg:flex-row lg:items-baseline lg:justify-between mb-6 gap-y-2'>
              <div>
                <h3 className='text-2xl font-bold leading-tight'>{job.role}</h3>
                <p className='text-accent font-semibold'>{job.company}</p>
              </div>
              <p className='text-sm text-white/70 lg:text-right'>
                {job.location}
                <br />
                {job.period}
              </p>
            </div>

            <ul className='flex flex-col gap-y-4'>
              {job.highlights.map((item) => (
                <li key={item.label} className='flex gap-x-3 text-base leading-relaxed'>
                  <span className='text-accent mt-1 shrink-0'>▹</span>
                  <span>
                    <strong className='font-bold'>{item.label}:</strong> {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
