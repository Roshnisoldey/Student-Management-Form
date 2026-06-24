type ReviewFormProps = {
    data:any;
}

export default function Review({
    data,
}: ReviewFormProps){
    return(
       <div className="space-y-6">

         <div className="border p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-3">
               Student Information
            </h3>

           <p><strong>Name:</strong> {data.fullName}</p>
           <p><strong>Date of Birth:</strong> {data.dateOfBirth}</p>
           <p><strong>Gender:</strong> {data.gender}</p>
           <p><strong>School Name:</strong> {data.schoolName}</p>
           <p><strong>City:</strong> {data.city}</p>
         </div>

         <div className="border p-4 rounded-lg">
           <h3 className="text-lg font-semibold mb-3">
             Parent Information
           </h3>

           <p><strong>Parent Name:</strong> {data.parentName}</p>
           <p><strong>Relationship:</strong> {data.relationship}</p>
           <p><strong>Email:</strong> {data.parentEmail}</p>
           <p><strong>Mobile:</strong> {data.parentMobile}</p>
         </div>

         <div className="border p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-3">
             Additional Information
          </h3>

          <p><strong>Previous School:</strong> {data.previousSchool}</p>
          <p><strong>Years Attended:</strong> {data.yearsAttended}</p>
         </div>

       </div>
    )
}