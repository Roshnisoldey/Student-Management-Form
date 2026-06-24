type StudentFormProps = {
  register:any;
  errors:any;
};

export default function StudentForm({
  register,
  errors,
}: StudentFormProps) {
  return (
    <div className="border rounded-xl p-6">
      <h2 className="text-2xl font-semibold mb-6">
        Student Information
      </h2>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block mb-2 font-medium">
            Full Name
          </label>

          <input
            type="text"
            placeholder="Enter full name"
            className="w-full border rounded-lg p-3"
            {...register("fullName")}
          />

         {errors.fullName && (
          <p className="text-red-500 text-sm mt-1">
            {errors.fullName.message}
          </p>
         )}
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Date of Birth
          </label>

          <input
            type="date"
            className="w-full border rounded-lg p-3"
            {...register("dateOfBirth")}
          />
 
          {errors.dateOfBirth && (
          <p className="text-red-500 text-sm mt-1">
            {errors.dateOfBirth.message}
          </p>
         )}
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Gender
          </label>

          <select className="w-full border rounded-lg p-3"
              {...register("gender")}>
            <option>Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>

           {errors.gender && (
          <p className="text-red-500 text-sm mt-1">
            {errors.gender.message}
          </p>
         )}
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Grade/Class
          </label>

          <input
            type="text"
            placeholder="Enter grade"
            className="w-full border rounded-lg p-3"
            {...register("grade")}
          />

           {errors.grade && (
          <p className="text-red-500 text-sm mt-1">
            {errors.grade.message}
          </p>
         )}
        </div>
        <div>
         <label className="block mb-2 font-medium">
             School Name
         </label>

          <input
           type="text"
           placeholder="Enter school name"
           className="w-full border rounded-lg p-3"
           {...register("schoolName")}
           />
            {errors.schoolName && (
          <p className="text-red-500 text-sm mt-1">
            {errors.schoolName.message}
          </p>
         )}
        </div>

        <div>
         <label className="block mb-2 font-medium">
            Admission Number
         </label>

         <input
           type="text"
           placeholder="Enter admission number"
           className="w-full border rounded-lg p-3"
           {...register("admissionNumber")}
          />
        </div>

        <div>
         <label className="block mb-2 font-medium">
         Blood Group
        </label>

        <select className="w-full border rounded-lg p-3"
          {...register("bloodGroup")}>
        <option>Select Blood Group</option>
        <option>A+</option>
        <option>A-</option>
        <option>B+</option>
        <option>B-</option>
        <option>AB+</option>
        <option>AB-</option>
        <option>O+</option>
        <option>O-</option>
       </select>
        {errors.bloodGroup && (
          <p className="text-red-500 text-sm mt-1">
            {errors.bloodGroup.message}
          </p>
         )}
      </div>

      <div className="mt-4">
        <label className="block mb-2 font-medium">
          Address
        </label>

        <textarea
          rows={3}
          placeholder="Enter address"
          className="w-full border rounded-lg p-3"
          {...register("address")}
        />

         {errors.address && (
          <p className="text-red-500 text-sm mt-1">
            {errors.address.message}
          </p>
         )}
      </div>

      <div className="grid md:grid-cols-3 gap-4 mt-4">

  <div>
    <label className="block mb-2 font-medium">
      City
    </label>

    <input
      type="text"
      placeholder="Enter city"
      className="w-full border rounded-lg p-3"
      {...register("city")}
    />
     {errors.city && (
          <p className="text-red-500 text-sm mt-1">
            {errors.city.message}
          </p>
         )}
  </div>

  <div>
    <label className="block mb-2 font-medium">
      State
    </label>

    <input
      type="text"
      placeholder="Enter state"
      className="w-full border rounded-lg p-3"
      {...register("state")}
    />
     {errors.state && (
          <p className="text-red-500 text-sm mt-1">
            {errors.state.message}
          </p>
         )}
  </div>

  <div>
    <label className="block mb-2 font-medium">
      Pin Code
    </label>

    <input
      type="text"
      placeholder="Enter pin code"
      className="w-full border rounded-lg p-3"
      {...register("pinCode")}
    />
     {errors.pinCode && (
          <p className="text-red-500 text-sm mt-1">
            {errors.pinCode.message}
          </p>
         )}
  </div>

</div>

<div className="mt-4">
  <label className="block mb-2 font-medium">
    Profile Picture
  </label>

  <input
    type="file"
    className="w-full border rounded-lg p-3"
    {...register("profilePicture")}
  />
   {errors.profilePicture && (
          <p className="text-red-500 text-sm mt-1">
            {errors.profilePicture.message}
          </p>
         )}
</div>
      </div>
    </div>
  );
}