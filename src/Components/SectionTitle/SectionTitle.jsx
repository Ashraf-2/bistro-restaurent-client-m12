/* eslint-disable react/prop-types */

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="text-center md:w-6/12 mx-auto mt-10">
            <p className="text-yellow-600 py-1">--{subHeading}--</p>
            <h3 className="uppercase text-3xl border-y-2 py-3">{heading}</h3>
        </div>
    );
};

export default SectionTitle;