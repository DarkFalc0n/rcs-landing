import React from 'react'

function VenueDate() {
    return (
        <section className="flex flex-col gap-8  lg:h-screen max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 justify-center">
            <div className="flex flex-col gap-8  lg:flex-row w-full items-start justify-between">
                <div className="item">
                    <p className="mb-3 text-3xl text-primary font-medium">
                        Date
                    </p>
                    <p className="text-6xl font-bold">26 - 27 Jan 2024</p>
                </div>
                <div className="item">
                    <p className="mb-3 text-3xl text-primary font-medium">
                        Time
                    </p>
                    <p className="text-6xl font-bold">2PM</p>
                </div>
                <div className="item">
                    <p className="mb-3 text-3xl text-primary font-medium">
                        Duration
                    </p>
                    <p className="text-6xl font-bold">24 Hour</p>
                </div>
            </div>
            <div className="">
                <div className="item">
                    <p className="mb-3 text-3xl text-primary font-medium">
                        Venue
                    </p>
                    <p className="text-6xl font-bold">
                        Lovely Professional University, <br />
                        Jalandhar
                    </p>
                </div>
            </div>
        </section>
    )
}

export default VenueDate
