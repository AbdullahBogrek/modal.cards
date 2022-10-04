import React from 'react'
import { Accordion } from './Accordion'

const index = () => {
  return (
    <section className='bg-white'>
      <div className="flex flex-wrap max-w-[1194px] mx-auto pt-24">
        <div className="section-title mb-10 text-center">Frequently Asked Questions</div>        
          <Accordion title="How do I pay for the essentials or premium plan?" content="You can pay with a credit card or via net banking (if you’re in United States). We willrenew your subscription automatically at the end of every billing cycle. You can paywith a credit card or via net banking (if you’re in United States). We will renew your subscription automatically at the end of every billing cycle." />
          <Accordion title="Can I cancel my essentials or premium plan subscription at my time?" content="You can pay with a credit card or via net banking (if you’re in United States). We willrenew your subscription automatically at the end of every billing cycle. You can paywith a credit card or via net banking (if you’re in United States). We will renew your subscription automatically at the end of every billing cycle." />
          <Accordion title="How do I pay for the essentials or premium plan?" content="You can pay with a credit card or via net banking (if you’re in United States). We willrenew your subscription automatically at the end of every billing cycle. You can paywith a credit card or via net banking (if you’re in United States). We will renew your subscription automatically at the end of every billing cycle." />
          <Accordion title="We need to add new users to our team, how will that be billed?" content="You can pay with a credit card or via net banking (if you’re in United States). We willrenew your subscription automatically at the end of every billing cycle. You can paywith a credit card or via net banking (if you’re in United States). We will renew your subscription automatically at the end of every billing cycle." />
          <Accordion title="How do I pay for the essentials or premium plan?" content="You can pay with a credit card or via net banking (if you’re in United States). We willrenew your subscription automatically at the end of every billing cycle. You can paywith a credit card or via net banking (if you’re in United States). We will renew your subscription automatically at the end of every billing cycle." />
          <Accordion title="Can I cancel my essentials or premium plan subscription at my time?" content="You can pay with a credit card or via net banking (if you’re in United States). We willrenew your subscription automatically at the end of every billing cycle. You can paywith a credit card or via net banking (if you’re in United States). We will renew your subscription automatically at the end of every billing cycle." />
      </div>
    </section>
  )
}

export default index