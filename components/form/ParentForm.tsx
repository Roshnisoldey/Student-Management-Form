type ParentFormProps = {
    register:any;
    errors:any;
};

export default function ParentForm({
    register,
    errors,
}:ParentFormProps){
    
    return(
        <div className="border rounded-xl p-6">
            <h2 className="text-2xl font-semibold mb-6">
             Parent / Gurdian Information
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
                <div>
                    <label className="block mb-2 font-medium">
                        Parent Name
                    </label>
                    <input 
                        type="text"
                        placeholder="Enter Parent name"
                        className="w-full border rounded-lg p-3"
                        {...register("parentName")}
                    />

                     {errors.parentName && (
                       <p className="text-red-500 text-sm mt-1">
                           {errors.parentName.message}
                       </p>
                      )}
                </div>

                <div>
                    <label className="block mb-2 font-medium">
                        Relationship with Student
                    </label>
                    <select className="w-full border rounded-lg p-3"
                        {...register("relationship")}>
                        <option>Select Relationship</option>
                        <option>Father</option>
                        <option>Mother</option>
                        <option>Guardian</option>
                    </select>
                     {errors.relationship && (
                      <p className="text-red-500 text-sm mt-1">
                         {errors.relationship.message}
                      </p>
                     )}
                </div>

                <div>
                    <label className="block mb-2 font-medium required">
                        Email Address
                    </label>
                    <input 
                        type="email"
                        placeholder="Enter email address"
                        className="w-full border rounded-lg p-3"
                        {...register("parentEmail")}
                     />

                     {errors.parentEmail && (
                        <p className="text-red-500 text-sm mt-1">
                           {errors.parentEmail.message}
                        </p>
                     )}
                </div>

                <div>
                    <label className="blcok mb-2 font-medium">
                        Mobile Number
                    </label>
                    <input 
                        type="tel"
                        placeholder="Enter Mobile number"
                        className="w-full border rounded-lg p-3"
                        {...register("parentMobile")}
                     />
                     {errors.parentMobile && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.parentMobile.message}
                        </p>
                     )}
                </div>

                <div>
                    <label className="block mb-2 font-medium">
                        Occupation(Optional)
                    </label>
                    <input 
                        type="text"
                        placeholder="Enter occupation"
                        className="w-full border rounded-lg p-3"
                        {...register("occupation")}
                     />
                </div>

                <div>
                    <label className="block mb-2 font-medium">
                        Organization/Company Name (Optional)
                    </label>
                    <input 
                        type="text"
                        placeholder="Enter organization name"
                        className="w-full border rounded-lg p-3"
                        {...register("organizationName")}
                     />
                </div>
            
            
            </div>

        </div>
    )
}