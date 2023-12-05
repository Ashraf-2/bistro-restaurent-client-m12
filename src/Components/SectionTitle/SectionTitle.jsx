/* eslint-disable react/prop-types */

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="text-center my-10 md:w-3/12 mx-auto">
            <p className="text-yellow-600 py-1">--{subHeading}--</p>
            <h3 className="uppercase text-3xl border-y-2 py-3">{heading}</h3>
        </div>
    );
};

export default SectionTitle;