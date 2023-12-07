/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { Parallax, Background } from 'react-parallax';


const Cover = ({ img, title,subTitle }) => {
    // console.log("img: ", img);
    // `url("${img}")`
    // style={{ backgroundImage: `url("${img}")` }}
    return (
        <Parallax
            blur={{ min: -55, max: 40 }}
            bgImage={img}
            bgImageAlt="the dog"
            strength={-200}
            
        >
            <div className="hero h-[700px]" >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-xl">
                        <h1 className="mb-5 text-4xl font-bold uppercase">{title}</h1>
                        <p className="mb-5">{subTitle}</p>
                    </div>
                </div>
            </div>
        </Parallax>



    );
};

export default Cover;