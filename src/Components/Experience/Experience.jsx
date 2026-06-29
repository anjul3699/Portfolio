import React from 'react'

const experiences = [
    {
        id: 1,
        date: '2020-2024',
        role: 'Frontend Developer | Digital Marketing Specialist',
        company: 'Indo-French Chamber of Commerce and Industry(IFCCI)',
        points: [
            'Designed, developed, and maintained responsive websites, microsites, and campaign landing pages using HTML5, CSS3, JavaScript, React, WordPress, and TYPO3',
            'Created marketing assets using Adobe Illustrator, Photoshop, and Canva for digital and print applications; monitored and reported on campaign and website performance using GA4.',
            ' Implemented technical SEO best practices — improving keyword rankings by 23% and growing organic traffic by 54%.',
            'Set up and managed A/B testing on landing pages to optimise conversion funnels, contributing to a 33% increase in inquiry leads.',

        ]
    },
    {
        id: '2',
        date: '2019-2020',
        role: 'Frontend Web Developer | Graphic Designer',
        company: 'Supertech India Pvt. Ltd.',
        points: [
            'Built custom React-based interfaces with component-level state management, props drilling, and hooks (useState, useEffect, useContext) for dynamic, data-driven pages.',
            'Creative designed marketing collaterals (Brochure, Flyers, magazine etc.) and company promotion on social media  marketing.',
            'Executed technical SEO audits and on-page improvements using SEMrush and Google Search Console — raised keyword rankings by 23% and achieved 54% organic traffic growth.',
            'Managed Google Ads campaigns contributing 12% of total company leads; improved ROI through A/B testing, audience segmentation, and negative keyword management. ',
        ]
    }
]

const Experience = ()=>{
    return(
        <section className=' w-full max-w-4xl mx-auto px-6 md:px-12 py-16'>

            {/* Title */}
            <div className='text-center mb-16'>
                <h2 className='inline-block text-2xl md:text-3xl font-medium text-white pb-2 border-b-2 border-green-500'>
                    Experience
                </h2>
            </div>
             {/* Timeline */}
             <div className='relative pl-10 border-l-2 border-green-500'>
                {experiences.map((exp) =>(
                    <div key ={exp.id} className='relative mb-12 last:mb-0'>

                    {/* Dot */}
                    <div className='absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-green-500 border-4 border-[#000000]'/>

                    {/* Card */}
                    <div className='bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-5 md:p-6 hover-green-500 transition-colors duration-300'>

                    {/* Date */}
                    <p className='text-xs text-gray-500 mb-1 tracking-wide'>
                    {exp.date}
                    </p>

                    {/* Role */}
                    <h3 className='text-lg md:text-xl font-semibold text-white mb-1'>
                        {exp.role}

                    </h3>

                    {/* Company */}
                    <p className='text-m text-green-400 mb-4'>
                        {exp.company}

                    </p>

                    {/* Bullet Points */}
                    <ul className='space-y-6 mt-2'>
                        {(exp.points || []).map((point, i) =>(
                            <li key={i} className='flex items-start gap-2 text-m text-gray-400 leading-relaxed pb-3 border-b border-[#2a2a2a] last:border-none last:pb-0'>
                                <span className='mt-1.5 w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0'/>
                                {point}

                            </li>
                        ))}

                    </ul>

                    </div>

                    </div>
                    
                ))}

             </div>

        </section>
    )
}
export default Experience