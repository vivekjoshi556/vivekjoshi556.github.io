const ProjectBox = props => {
    return (
        <div className = "md:flex text-gray-200 rounded-xl p-8 md:p-0 aboveNoise mb-10">
            {
                props.left && 
                    <div className = "h-40 md:w-5/6 bg-center md:h-auto md:rounded-l-xl rounded-lg mx-auto bg-cover bg-no-repeat md:bg-center cursor-pointer" style = {{
                        "backgroundImage": `url(${process.env.PUBLIC_URL + "/img/Projects/service/1.png"})`
                    }}></div>
            }
            <div className = "pt-4 md:pt-6 md:pb-6 md:px-8 text-center md:text-left space-y-4">
                <div className = "pl-1">
                    <p className = "text-lg font-medium"> Service Provider Application </p>
                    <hr className = "relative right-1 mb-3" />
                    <p className=" ">
                        Service Provider applications where users could get any serivce they wanted, like plumbing, salon services, deliveries, laundry Service, Car Wash and many others. At the same time provides could provide these services and earn money.
                    </p>
                </div>
                {/* <div className = "font-medium pl-1">
                    <div className = "text-gray-800 mb-2">Tech Used</div>
                    <div className = "flex items-center gap-2 flex-wrap">
                        <span className = "text-xs border rounded-lg px-3 bg-gray-200 py-1 text-slate-700">Laravel</span>
                        <span className = "text-xs border rounded-lg px-3 bg-gray-200 py-1 text-slate-700">Tailwind CSS</span>
                        <span className = "text-xs border rounded-lg px-3 bg-gray-200 py-1 text-slate-700">Livewire</span>
                        <span className = "text-xs border rounded-lg px-3 bg-gray-200 py-1 text-slate-700">Google Maps API</span>
                        <span className = "text-xs border rounded-lg px-3 bg-gray-200 py-1 text-slate-700">Stripe Payment Gateway</span>
                    </div>
                </div> */}
                <div className = "flex justify-end">
                    <button className = "border bg-orange-400 hover:bg-orange-500 duration-500 text-white px-4 py-2 rounded-full">Find Out More</button>
                </div>
            </div>
            {
                !props.left && 
                    <div className = "h-40 md:w-5/6 bg-center md:h-auto md:rounded-l-xl rounded-lg mx-auto bg-cover bg-no-repeat md:bg-center cursor-pointer" style = {{
                        "backgroundImage": `url(${process.env.PUBLIC_URL + "/img/Projects/service/1.png"})`
                    }}></div>
            }
        </div>
    );
}

ProjectBox.defaultProps = {
    left: true,
}

export default ProjectBox;