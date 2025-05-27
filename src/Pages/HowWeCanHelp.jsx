import React from 'react';
import { motion } from 'framer-motion';

const serviceInsights = [
  {
    title: 'Boosting Online Credibility',
    image: 'https://jagadeeshchundru.com/wp-content/uploads/2021/03/Website-Credibility.png',
    painPoints: [
      'Customers lose trust due to outdated or poorly designed websites.',
      'Slow load times and bad mobile experience reduce engagement.'
    ],
    resolutions: [
      'We deliver modern, fast-loading websites that look stunning across all devices.',
      'Smart layouts and content structures turn visits into meaningful actions.'
    ]
  },
  {
    title: 'Scaling Your Online Store',
    image: 'https://www.entrepreneurshipinabox.com/wp-content/uploads/Guide-to-Building-And-Scaling-Your-Online-Store.webp',
    painPoints: [
      'Shoppers abandon carts due to confusing purchase flow.',
      'Poor product and order management slows your growth.'
    ],
    resolutions: [
      'We streamline checkout experiences and optimize product display for better conversions.',
      'Efficient inventory and order systems reduce delays and build customer trust.'
    ]
  },
  {
    title: 'Winning on Social Media',
    image: 'https://guest-post.org/wp-content/uploads/2024/09/winning-social-media-strategy.png',
    painPoints: [
      'Inconsistent posting and lack of audience connection.',
      'Wasted ad spend without clear ROI.'
    ],
    resolutions: [
      'We craft a consistent and authentic online voice that speaks to your audience.',
      'Data-driven content and paid campaigns focused on real results.'
    ]
  },
  {
    title: 'Building Smarter Content Platforms',
    image: 'https://searchengineland.com/wp-content/seloads/2023/05/15-ways-to-get-smarter-with-your-content-and-SEO.png',
    painPoints: [
      'Out-of-the-box themes don’t reflect your brand identity.',
      'Managing plugins and security becomes overwhelming.'
    ],
    resolutions: [
      'We tailor each build to your unique needs, with scalable and editable designs.',
      'Automatic updates and strong security measures to keep things smooth and safe.'
    ]
  },
  {
    title: 'Driving Sales with Custom Stores',
    image: 'http://consumerbrandbuilders.com/wp-content/uploads/2018/12/TBA02.122018-1.jpg',
    painPoints: [
      'Default store templates lack brand personality and conversion optimization.',
      'You’re spending time on tech instead of growing your business.'
    ],
    resolutions: [
      'We create highly personalized Shopify stores built to convert.',
      'Custom tools and automation help simplify daily store management.'
    ]
  },
  {
    title: 'Reliable Hosting for Serious Growth',
    image: 'https://www.copahost.com/blog/wp-content/uploads/2023/06/ecommerce-growth-strategy.jpg',
    painPoints: [
      'Website downtime and slow speeds damage brand credibility.',
      'Lack of tech support and backup risks valuable data.'
    ],
    resolutions: [
      'We offer fast, secure hosting environments with industry-best uptime.',
      'Ongoing maintenance, backups, and support help you stay focused on growth.'
    ]
  }
];

const HowWeCanHelp = () => {
  return (
    <div className="min-h-screen p-6 sm:p-10 bg-gradient-to-b from-white to-gray-100 text-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl font-bold mb-12 text-center"
        >
          Transform Your Business Challenges into Opportunities
        </motion.h1>
        <div className="space-y-24">
          {serviceInsights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} items-center gap-8`}
            >
              <div className="md:w-1/2 w-full">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-xl shadow-lg"
                />
              </div>
              <div className="md:w-1/2 w-full">
                <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-gray-800">{item.title}</h2>
                <div className="mb-4">
                  <h3 className="text-lg font-medium text-red-500 mb-1">Common Challenges</h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    {item.painPoints.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-green-600 mb-1">What You Gain</h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    {item.resolutions.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowWeCanHelp;