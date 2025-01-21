import React from 'react'
import JobCard from '../components/JobCard'
import paystackIcon from "../../src/assets/Paystack.png";
import googleIcon from "../../src/assets/Google.png";
import flutterIcon from "../../src/assets/Flutter.png";
import accessIcon from "../../src/assets/Access.png";

const Jobs = () => {
  return (
    <div>
    <div className='flex gap-4 justify-center'>
      <JobCard 
      employmentType={"Full time"}
      logo={paystackIcon}
      role={"QA Engineer"}
      company={"paystack"}
      location={"Lagos, Nigeria"}
      />

      <JobCard 
      employmentType={"Part time"}
      logo={googleIcon}
      role={"Product Analyst"}
      company={"Google"}
      location={"Lagos, Nigeria"}
      />

      <JobCard 
      employmentType={"Full time"}
      logo={flutterIcon}
      role={"HR Manager"}
      company={"Flutterwave"}
      location={"Abuja, Nigeria"}
      />

      <JobCard 
      employmentType={"Full time"}
      logo={accessIcon}
      role={"QA Engineer"}
      company={"Access"}
      location={"Lagos, Nigeria"}
      />

      
    </div>
    </div>
  )
}

export default Jobs
