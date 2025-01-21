import React from 'react'
// import groupIcon from "../../src/assets/Paystack.png";
import locationIcon from "../../src/assets/location.png";


const JobCard = ({ logo, role, company, location, employmentType}) => {
    return (
        <div>
            <div className=" w-[300px] rounded-[5px] shadow-[0px_10px_30px_0px_rgba(6,148,42,0.05)] pt-4 pb-7">
                <div className="flex flex-col  gap-2">
                    <div className="flex justify-end p-2 gap-5">
                        <div className=" py-[5px] px-[18px] rounded-[50px] bg-[#F4F5F9] font-[Gordita] text-[12px] text-[#9B9B9B]">{employmentType}</div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <div className=" flex items-center w-[100px] h-[100px]"> <img src={logo} alt="" className="" /></div>
                        <p className="font-[Graphik] text-[18px] text-[#3F403F] leading-[27px]">{role}</p>
                    </div>
                </div>
                <div className="border-t-[1px] border-[#E5E5E5] pt-4 mt-10">
                <div className=" flex flex-col gap-2 pl-4 ">
                    <p className="font-[Graphik] text-[18px] text-[#3F403F] leading-[36px]">{company}</p>
                    <div className="flex gap-24 items-center">
                        <div className=" flex gap-2">
                            <img src={locationIcon} alt="" className='w-[13.2px] h-[18.38px]' />
                            <p className="font-[Graphik] text-[16px] text-[#3F403F] leading-[24px]">{location}</p>
                        </div>
                        <p className='font-[Graphik] text-[12px] text-[#06942A] leading-[18px] '>Apply now</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default JobCard