
"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { studentSchema } from "@/validations/studentSchema";
import {z} from "zod";

import Stepper from "@/components/Stepper";

import StudentForm from "@/components/form/StudentForm";
import ParentForm from "@/components/form/ParentForm";
import AdditionalForm from "@/components/form/AdditionalForm";
import ReviewForm from "@/components/form/ReviewForm";

type FormData = z.infer<typeof studentSchema>;

export default function StudentFormPage() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const{
    register,
    handleSubmit,
    watch,
    trigger,
    reset,
    formState:{errors},
  } = useForm<FormData>({
    resolver: zodResolver(studentSchema),
    mode: "onChange",
  });

  const fullName = watch("fullName");

  const onSubmit = (data:FormData)=>{
    alert("Form Submitted successfully!")
    console.log(data);
    setSubmitted(true);
    reset();
    setStep(1);
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow p-6">

        <h1 className="text-3xl font-bold">
          Student & Parent Information Form
        </h1>

        <p className="text-gray-500 mt-2">
          Please fill in the details accurately
        </p>

        {submitted && (
          <div className="mt-4 p-3 bg-green-100 text-green-700 rounded">
            Form submitted successfully!
          </div>
        )}

        <Stepper currentStep={step} />

        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-8">
          {step === 1 && <StudentForm register={register} errors = {errors} />}
          {step === 2 && <ParentForm  register={register} errors = {errors}/>}
          {step === 3 && <AdditionalForm register={register} errors = {errors}/>}
          {step === 4 && <ReviewForm data={watch()} />}
        </div>

        <p className="mt-4">Student Name: {fullName}</p>

        <div className="flex justify-between mt-8">
          <button
            type="button"
            onClick={() => 
             setStep(step - 1)}
            disabled={step === 1}
            className="px-4 py-2 border rounded disabled:opacity-50"
          >
            Previous
          </button>

         {step <4 ? (
           <button
              type="button"
              onClick={ async(e) => {
                e.preventDefault();
                setSubmitted(false);
                if(step === 1){

                  const isValid = await trigger(["fullName", "dateOfBirth", "gender", "grade", "schoolName", "address", "city", "state", "pinCode" ,"profilePicture"]);
                
                  if(isValid) {
                 setStep( step+1)}
                }

                if(step === 2){
                  const isValid = await trigger(["parentName", "relationship", "parentEmail", "parentMobile"])

                  if(isValid){
                    setStep(step+1)
                  }
                }
                
                if(step === 3){
                  const isValid = await trigger(["previousSchool", "yearsAttended"])

                  if(isValid){
                    console.log("moving to step 4")
                    setStep(step+1)
                  }
                }
              }}
              className="px-4 py-2 bg-purple-600 text-white rounded">
            Next
           </button>
         ):(
           <button 
             type="submit"
             className="px-4 py-2 bg-green-600 text-white rounded">
              Review & Submit
             </button>
           )}
        </div>
        </form>


      </div>
    </div>
  );
}