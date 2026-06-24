
type AdditionalFormProp = {
    register:any,
    errors:any;
}

export default function AdditionalForm({
    register,
    errors,
}: AdditionalFormProp) {

    const onSubmit = (data: any) => {
     console.log("SUBMITTED");
     console.log(data);
    };
    return(
        <div className="border rounded-xl p-6">
           
           <h2 className="text-2xl font-semibold mb-6">
            Additional Information
           </h2>

           <div className="mb-6">
              <label className="block mb-2 font-medium">
                Transportation Required?
              </label>
              <div className="flex gap-6">
                <label>
                    <input type="radio" name="transport" /> Yes
                </label>
                <label>
                    <input type="radio" name="transport" /> No
                </label>
              </div>
           </div>

           
           <div className="mb-6">
            <label className="block mb-2 font-medium">
                Transportion Type
            </label>

            <select className="w-full border rounded-lg p-3">
                <option>Select Transport Type</option>
                <option>School Bus</option>
                <option>Private Van</option>
                <option>Self Transport</option>
            </select>
           </div>


           <div className="mb-6">
            <label className="block mb-2 font-medium">
                Medical Conditions
            </label>
            <textarea 
              rows={3}
              placeholder="Enter medical consitions"
              className="w-full border rounded-lg p-3" 
            /> 
           </div>

           <div className="mb-6">
            <label className="block mb-2 font-medium">
                Allergies
            </label>
            <textarea 
               rows={3}
               placeholder="Enter allergies"
               className="w-full border rounded-lg p-3"
            />
           </div>

           <div className="grid md:grid-cols-2 gap-4">
             <div>
                <label className="block mb-2 font-medium">
                    Previous School
                </label>
                <input 
                  type="text"
                  placeholder="Enter school name"
                  className="w-full border rounded-lg p-3"
                  {...register("previousSchool")}
                />
                {errors.previousSchool && (
                    <p className="text-red-500 text-sm mt-1">
                        {errors.previousSchool.message}
                    </p>
                )}
             </div>

             <div>
                <label className="block mb-2 font-medium">
                    Years Attended
                </label>
                <input 
                  type="number"
                  placeholder="Enter years attended"
                  className="w-full border rounded-lg p-3"
                  {...register("yearsAttended")}
                />
                {errors.yearsAttended && (
                    <p className="text-red-500 text-sm mt-1">
                        {errors.yearsAttended.message}
                    </p>
                )}
             </div>
           </div>

        </div>
    )
}