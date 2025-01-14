import React from 'react'
import TicketCardLPU from './TicketCardLPU'
import TicketCardStudent from './TicketCardStudent'
import TicketCardStandard from './TicketCardProf'

function TicketSection() {
    return (
        <section className="flex flex-col lg:flex-row lg:h-screen max-w-7xl mx-auto px-4 lg:px-8 py-10 justify-center items-center gap-4">
            <TicketCardLPU />
            <TicketCardStudent />
            <TicketCardStandard />
        </section>
    )
}

export default TicketSection
